import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const UploadResources = () => {
  const { id } = useParams();
  const UPLOAD_RESOURCES_URL = `teacher/upload/resources/${id}`;
  const desInputRef = useRef();
  const fileIputRef = useRef();

  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile && selectedFile.type.startsWith("video/")) {
      const videoURL = URL.createObjectURL(selectedFile);
      setFilePreview(videoURL);
    } else {
      setFilePreview(null);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);

    try {
      const response = await axios.post(UPLOAD_RESOURCES_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Resource Uploaded Successfully");
      desInputRef.current.value = null;
      fileIputRef.current.value = null;
      setFile(null);
      setFilePreview(null);
    } catch (err) {
      setMessage("Failed to Upload Resources");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-light-purple mb-6">Upload Resources</h2>
      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label className="block text-gray-700">Resource File</label>
          <input
            type="file"
            accept=".pdf, .xls, .xlsx, .ppt, .pptx, .mp4, .avi, .mkv, .webm"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            ref={fileIputRef}
          />
        </div>
        {filePreview && (
          <div className="mb-4">
            <label className="block text-gray-700">Video Preview</label>
            <video
              src={filePreview}
              controls
              className="w-full h-60 object-cover rounded"
            />
          </div>
        )}
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            ref={desInputRef}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>
        <button type="submit" className="bg-light-purple text-white p-2 rounded">
          Upload Resource
        </button>
        {message && <p className="text-gray-600 mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default UploadResources;
