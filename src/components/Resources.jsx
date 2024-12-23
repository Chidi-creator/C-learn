import { useState, useEffect } from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faFileExcel,
  faFilePowerpoint,
  faFileAlt,
  faFileVideo,
} from "@fortawesome/free-solid-svg-icons";

const Resources = () => {
  const { id } = useParams();
  const [resources, setResources] = useState([]);
  const [course, setCourse] = useState(null);
  const FETCH_RESOURCES_URL = `/teacher/student/get-resources/${id}`;
  const FETCH_SINGLE_COURSE = `/admin/course/${id}`;

  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await axios.get(FETCH_SINGLE_COURSE);
        setCourse(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    const fetchResources = async () => {
      try {
        const response = await axios.get(FETCH_RESOURCES_URL);
        setResources(response.data);
      } catch (err) {
        console.error("Failed to fetch resources:", err);
      }
    };

    getCourse();
    fetchResources();
  }, [id]);

  const getFileIcon = (fileName) => {
    if (fileName.endsWith(".pdf")) {
      return faFilePdf;
    } else if (
      fileName.endsWith(".xls") ||
      fileName.endsWith(".xlsx")
    ) {
      return faFileExcel;
    } else if (
      fileName.endsWith(".ppt") ||
      fileName.endsWith(".pptx")
    ) {
      return faFilePowerpoint;
    } else if (
      fileName.endsWith(".mp4") ||
      fileName.endsWith(".avi") ||
      fileName.endsWith(".mkv") ||
      fileName.endsWith(".webm")
    ) {
      return faFileVideo;
    } else {
      return faFileAlt;
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {course && <h2 className="text-3xl font-bold text-light-purple mb-6">{course.coursename}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.length ? (
          resources.map((resource) => (
            <div
              key={resource._id}
              className="bg-white p-6 shadow-md rounded flex flex-col items-start transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <FontAwesomeIcon
                  icon={getFileIcon(resource.name)}
                  className="text-6xl text-light-purple mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {resource.description}
                  </h4>
                </div>
              </div>
              {resource.name.endsWith(".mp4") ||
              resource.name.endsWith(".avi") ||
              resource.name.endsWith(".mkv") ||
              resource.name.endsWith(".webm") ? (
                <video
                  controls
                  className="w-full rounded mb-4"
                  src={`http://localhost:3000/files/${resource.name}`}
                ></video>
              ) : (
                <a
                  href={`http://localhost:3000/files/${resource.name}`}
                  download
                  className="mt-auto bg-light-purple text-white p-2 rounded inline-block transition-colors hover:bg-dark-purple"
                >
                  Download
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No resources available.</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
