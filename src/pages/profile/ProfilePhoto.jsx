import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
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
  const [selectedImageName, setSelectedImageName] = useState("");

  useEffect(() => {
    getUserProfilePictureUrl(user.uid).then((url) => {
      setDownloadURL(url);
    });
  }, [user.uid]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setProfilePicture(selectedFile);
    setSelectedImageName(selectedFile.name);

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
      setDownloadURL("");
      navigate("/SnapBack/profile");
      setShowOptions(false);
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
        setShowOptions(false);
        setError("");
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
      <div>
        {/* Profile picture element that toggles options */}
        <div className="flex flex-col items-center justify-center text-center" onClick={handleProfilePictureClick}>
          {downloadURL ? (
            <img
              src={downloadURL}
              alt="Profile"
              className="max-lg:mt-3 max-lg:rounded-full max-lg:w-32 max-lg:h-32 w-64 h-64 rounded-lg object-cover"
            />
          ) : (
            <div className="max-lg:rounded-full max-lg:w-32 max-lg:h-32 w-64 h-64 rounded-lg bg-gray-500 flex items-center justify-center">
              <span>Click to add a photo</span>
            </div>
          )}

        </div>
        {showOptions && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 font-[poppins]">
            <div className="bg-gray-900 border rounded-lg shadow-md w-96">
              <div className="p-4">
                <h2 className="text-xl font-semibold">Upload Profile Photo</h2>
              </div>
              {error && <p className="text-red-500 text-lg">{error}</p>}
              {/* Display the selected image name */}
              {selectedImageName && (
                <div className="px-4 mt-2">
                  <p className="text-gray-400">Selected Image : {selectedImageName}</p>
                </div>
              )}
              <div className="">
                <div className="flex mt-2 mx-2">
                  <button
                    onClick={() => document.getElementById("fileInput").click()}
                    className="w-full px-4 py-2 border border-teal-500 hover:bg-teal-800 text-white rounded-md mr-2"
                  >
                    Choose from Gallery
                  </button>
                  <button
                    onClick={openCameraModal}
                    className="w-full px-4 py-2 border border-teal-500 hover:bg-teal-800 text-white rounded-md"
                  >
                    Use Camera
                  </button>
                </div>


                {downloadURL && (
                  <div className="px-4 mt-4">
                    <button
                      onClick={() => deleteProfilePicture(user.uid)}
                      className="block w-full py-2 px-4 border border-red-600 text-white hover:bg-red-800 rounded-md"
                    >
                      Delete Profile Picture
                    </button>
                  </div>
                )}

                <div className="px-4 mt-4">
                  <button
                    onClick={handleUpload}
                    disabled={uploading}
                    className="w-full py-2 px-4 border border-blue-600 text-white hover:bg-blue-800 rounded-md"
                  >
                    {uploading ? "Uploading..." : "Upload"}
                  </button>
                </div>
              </div>
              <div className="p-4">
                <button
                  onClick={() => setShowOptions(false)}
                  className="w-full py-2 px-4 bg-red-500 text-white hover:bg-red-600 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}


      </div>
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
    </div >
  );
}
