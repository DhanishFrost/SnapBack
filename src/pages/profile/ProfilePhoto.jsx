import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"; // Import necessary storage functions

export default function ProfilePhoto({ user }) {
  const { register } = useForm();
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState(""); // State for download URL
  const navigate = useNavigate();


  useEffect(() => {
    getUserProfilePictureUrl(user.uid).then((url) => {
      setDownloadURL(url);
    });
  }, [user.uid]); 

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setProfilePicture(selectedFile);
    console.log("Selected File:", selectedFile);
  };

  const uploadProfilePicture = async (userId, picture) => {
    try {
      if (!picture) {
        throw new Error("Please select a profile picture.");
      }

      setUploading(true);

      const storage = getStorage();
      const storageRef = ref(storage, `profilePictures/${userId}/profile-picture.jpg`);

      try {
        await deleteObject(storageRef);
        console.log('Deleted previous profile picture');
      } catch (deleteError) {
        // Ignore the error if the file doesn't exist
        if (deleteError.code !== "storage/object-not-found") {
          throw deleteError; // Rethrow other errors
        }
      }

      // Upload the new profile picture to Firebase Storage
      await uploadBytes(storageRef, picture);
      // Get the download URL of the uploaded image
      const url = await getDownloadURL(storageRef);

      setUploading(false); // Upload finished, enable button
      setDownloadURL(url); // Set the download URL
      console.log('Uploaded Successfully');
      return url;
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      setUploading(false); // Upload finished with error, enable button
      throw error;
    }
  };

  const getUserProfilePictureUrl = async (userId) => {
    try {
      const storage = getStorage();
      const userPictureRef = ref(storage, `profilePictures/${userId}/profile-picture.jpg`);

      // Check if the user's uploaded profile picture exists
      await getDownloadURL(userPictureRef);
      const downloadURL = await getDownloadURL(userPictureRef);
      setDownloadURL(downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error getting profile picture URL:", error);

      const defaultPictureRef = ref(storage, `profilePictures/default/profile-picture.jpg`);

      // Return the URL of the default picture with a random query parameter
      const defaultDownloadURL = await getDownloadURL(defaultPictureRef);
      return defaultDownloadURL;
    }
  };

  const handleUpload = async () => {
    try {
      const pictureUrl = await uploadProfilePicture(user.uid, profilePicture);

      // Redirect to the user's profile page or another page
      navigate("/SnapBack/profile");
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      setError("Camera access is required to take a profile picture.");
    }
  };

  return (
    <div className="container text-white">
      <h1>Upload Profile Photo</h1>
      <div>
        <input
          type="file"
          accept="image/*"
          capture="camera"
          onChange={handleFileChange}
        />
        <button onClick={requestCameraPermission}>Request Camera Access</button>
      </div>
      {error && <p className="error">{error}</p>}
      <div>
        {/* Conditionally render the profile picture or a message */}
        {downloadURL ? (
          <img
            src={downloadURL}
            alt="Profile"
            width="200"
            height="200"
          />
        ) : (
          <p>No profile picture available.</p>
        )}
      </div>
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
