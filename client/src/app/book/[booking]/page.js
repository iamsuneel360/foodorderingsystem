"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const page = ({ params }) => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [room, setRoom] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: response } = await axios.post(
          "http://localhost:5000/room",
          { roomid: params.booking }
        );
        console.log(response); // Corrected log statement
        setRoom(response);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Booking screen</h1>
      roomid= {params.booking}
    </div>
  );
};

export default page;
