import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Userlogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const logoutUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            maxRedirects: 5, // Enable automatic redirects
          }
        );

        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        if (error.response?.status === 301) {
          const newURL = error.response.headers["location"];
          console.warn(`Redirecting to: ${newURL}`);
          await axios.get(newURL, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          console.error("Logout failed:", error.message);
        }
      }
    };

    logoutUser();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Userlogout;
