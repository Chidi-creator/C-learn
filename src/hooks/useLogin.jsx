import axios from "../api/axios";
import { useState } from "react";
import useAuth from "./useAuthContext";

const LOGIN_URL = "/auth";

const useLogin = () => {
  const[error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const loginUser = async (email, password) => {
    const userParameters = { email, password };

    try {
      setLoading(true)
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify(userParameters)
      );
      setError(null);
      setLoading(false);
      console.log(response.data);
      login(response.data);
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

  return {loginUser, error, loading}
};

export default useLogin;
