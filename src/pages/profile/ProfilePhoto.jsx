import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import Webcam from "react-webcam";
import CameraModal from "./Camera";

export default function ProfilePhoto({ user }) {
  const { register } = useForm();
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState("");
  const navigate = useNavigate();
  const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    getUserProfilePictureUrl(user.uid).then((url) => {
      setDownloadURL(url);
    });
  }, [user.uid]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setProfilePicture(selectedFile);
  };

  const uploadProfilePicture = async (userId, picture) => {
    try {
      if (!picture) {
        throw new Error("Please select a profile picture.");
      }

      setUploading(true);

      const storage = getStorage();
      const storageRef = ref(storage, `profilePictures/${userId}/profile-picture.jpg`);

      // Delete the previous profile picture if it exists
      try {
        await deleteProfilePicture(user.uid);
      } catch (deleteError) {
        console.error('Error deleting previous profile picture:', deleteError);
      }

      // Check if the picture is a file or a data URL (captured image)
      if (typeof picture === "string" && picture.startsWith("data:image")) {
        const base64Response = await fetch(picture);
        const blob = await base64Response.blob();

        await uploadBytes(storageRef, blob);
      } else {
        await uploadBytes(storageRef, picture);
      }

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
      if (error.code === "storage/object-not-found") {
        console.log('Profile picture not found');
        return null;
      }

      const defaultPictureRef = ref(storage, `profilePictures/default/profile-picture.jpg`);

      const defaultDownloadURL = await getDownloadURL(defaultPictureRef);
      return defaultDownloadURL;
    }
  };

  const deleteProfilePicture = async (userId) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `profilePictures/${userId}/profile-picture.jpg`);
  
      // Check if the profile picture exists
      try {
        await getDownloadURL(storageRef);
      } catch (error) {
        if (error.code === "storage/object-not-found") {
          console.log('Profile picture not found');
          return false; 
        }
      }
  
      // If it exists, delete the profile picture
      await deleteObject(storageRef);
      console.log('Deleted profile picture successfully');
      return true; 
    } catch (error) {
      console.error("Error deleting profile picture:", error);
      return false; 
    }
  };
  

  const handleUpload = async () => {
    try {
      if (profilePicture) {
        const pictureUrl = await uploadProfilePicture(user.uid, profilePicture);
        navigate("/SnapBack/profile");
      } else {
        setError("Please select or capture a profile picture before uploading.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  const openCameraModal = () => {
    setIsCameraModalOpen(true);
  };

  const handleProfilePictureClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="container text-white">
      <h1>Upload Profile Photo</h1>
      {error && <p className="text-red-500 text-lg">{error}</p>}
      <div>
        {/* Profile picture element that toggles options */}
        <div className="profile-picture" onClick={handleProfilePictureClick}>
          {/* Display the profile picture or a placeholder */}
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
              <span>Click to add a photo</span>
            </div>
          )}
        </div>
        {/* Options */}
        {showOptions && (
          <div className="options">
            <button onClick={() => document.getElementById("fileInput").click()}>Choose from Gallery</button>
            <button onClick={openCameraModal}>Use Camera</button>
            {downloadURL && (
              <button onClick={() => deleteProfilePicture(user.uid)} className="bg-red-500 text-white rounded-md mt-4">
                Delete Profile Picture
              </button>
            )}
            <button onClick={handleUpload} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
        )}
      </div>
      {error && <p className="error">{error}</p>}
      <CameraModal
        isOpen={isCameraModalOpen}
        onClose={() => setIsCameraModalOpen(false)}
        onCapture={(imageSrc) => {
          console.log("Captured image source:", imageSrc);
          setProfilePicture(imageSrc);
          setIsCameraModalOpen(false); // Close the modal
        }}
      />

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
