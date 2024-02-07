"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "@/components/room/page";
import Layout from "@/components/layout/page";

const Page = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: response } = await axios.get(
          "http://localhost:5000/rooms"
        );
        console.log(response); // Corrected log statement
        setRooms(response);
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
    <Layout>
      <div className=" container">
        <div className=" row justify-center">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            rooms.map((room) => {
              return (
                <div className=" md:col-span-9">
                  <Room room={room} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
