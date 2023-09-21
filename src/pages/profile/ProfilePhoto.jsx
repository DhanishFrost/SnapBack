import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export default function ProfilePhoto({ user }) {
  const { register } = useForm();
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState("");
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
        if (deleteError.code !== "storage/object-not-found") {
          throw deleteError; 
        }
      }
  
      // Upload the new profile picture to Firebase Storage
      await uploadBytes(storageRef, picture);
      const url = await getDownloadURL(storageRef);
  
      setUploading(false); 
      setDownloadURL(url); 
      console.log('Uploaded Successfully');
      return url;
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      setUploading(false); 
      throw error;
    }
  };
  
  const getUserProfilePictureUrl = async (userId) => {
    try {
      const storage = getStorage();
      const userPictureRef = ref(storage, `profilePictures/${userId}/profile-picture.jpg`);
  
      await getDownloadURL(userPictureRef);
      const downloadURL = await getDownloadURL(userPictureRef);
      setDownloadURL(downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error getting profile picture URL:", error);
  
      const defaultPictureRef = ref(storage, `profilePictures/default/profile-picture.jpg`);
  
      const defaultDownloadURL = await getDownloadURL(defaultPictureRef);
      return defaultDownloadURL;
    }
  };
  

  const handleUpload = async () => {
    try {
      const pictureUrl = await uploadProfilePicture(user.uid, profilePicture);

      navigate("/SnapBack/profile");
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      stream.getTracks().forEach((track) => track.stop());
  
      // After successfully getting camera access, trigger the file input to open the camera
      const input = document.getElementById("fileInput");
      if (input) {
        input.click();
      }
    } catch (error) {
      setError("Camera access is required to take a profile picture.");
    }
  };
  
  return (
    <div className="container text-white">
  <h1>Upload Profile Photo</h1>
  <div>
    {/* Hidden file input */}
    <input
      type="file"
      accept="image/*"
      capture="camera"
      id="fileInput"
      style={{ display: "none" }}
      onChange={handleFileChange}
    />
    <button onClick={requestCameraPermission}>Use Camera</button>
    <button>
      <label>
        Choose from Gallery
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </label>
    </button>
  </div>
  {error && <p className="error">{error}</p>}
  <div className="profile-picture">
    {/* Conditionally render the profile picture or a user icon */}
    {downloadURL ? (
      <img
        src={downloadURL}
        alt="Profile"
        width="150"
        height="150"
        className="rounded-[2000px]"
      />
    ) : (
      <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
      </div>
    )}
  </div>
  <button onClick={handleUpload} disabled={uploading}>
    {uploading ? "Uploading..." : "Upload"}
  </button>
</div>

  );
}
