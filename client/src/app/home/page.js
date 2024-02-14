"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "@/components/room/page";
import Layout from "@/components/layout/page";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
const Page = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [fromdate, setFromdate] = useState();
  const [todate, setTodate] = useState();
  function filterByDate(dates) {
    setFromdate(dates[0].format("DD-MM-YYYY"));
    setTodate(dates[1].format("DD-MM-YYYY"));
  }

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
      <div className=" ml-40">
        <RangePicker format="MM-DD-YYYY" onChange={filterByDate} />
      </div>
      <div className=" ">
        <div className=" ">
          {loading ? (
            <h1>Loading....</h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            rooms.map((room) => {
              return (
                <div className="">
                  <Room room={room} fromdate={fromdate} todate={todate} />
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
