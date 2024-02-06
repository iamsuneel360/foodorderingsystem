'use client'
import React, { useEffect, useState } from 'react';
import axios from "axios";

const Page = () => {

  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      try {
        const { data: response } = await axios.get('http://localhost:5000/rooms');
        console.log(response);  // Corrected log statement
        setRooms(response);
      } catch (error) {
        console.error(error.message);
      }

    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Total {rooms.length} rooms</h2>
      {rooms.map((room, index) => (
        <div key={index}>
          <h3>{room.name}</h3>
          {/* Add other room details if needed */}
        </div>
      ))}
    </div>
  )

};

export default Page;
