import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "../api/axios";

const UniDropdown = ({ value, onChange }) => {
  const [uniOptions, setUniOptions] = useState([]);

  useEffect(() => {
    const fetchUnis = async () => {
      try {
        const response = await axios.get("/university");
        const universities = response.data.map((uni) => ({
          value: uni,
          label: uni,
        }));
        setUniOptions(universities);
        console.log('Fetched universities:', universities);
      } catch (err) {
        console.log("Error fetching university names:", err);
      }
    };

    fetchUnis();
  }, []);

  return (
    <Select
      className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-green-500 m-1 focus:shadow-md focus:border-purple-500 focus:outline-none focus:ring-0 text-gray-500"
      value={uniOptions.find(option => option.value === value)}
      onChange={(selectedOption) => onChange(selectedOption ? selectedOption.value : null)}
      options={uniOptions}
      placeholder="Select University"
      isClearable
      isSearchable
    />
  );
};

export default UniDropdown;
