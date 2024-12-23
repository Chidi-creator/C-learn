import { useState } from "react";
import axios from "../api/axios";
import useAuth from "./useAuthContext";

const REGISTER_URL = "/register";

const useSignup = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const {login} = useAuth()

  const signUp = async (username, email, password, institution, role) => {

    setError(null);
    setLoading(true);

    const userParanmeters = { username, email, password, institution, role };

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify(userParanmeters)
      );
      setError(null);
      setLoading(false)
      console.log(response.data);
      login(response.data)
    } catch (err) {
      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { signUp, error, loading };
};

export default useSignup;
