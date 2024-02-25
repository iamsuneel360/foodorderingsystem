"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "@/components/navbar/page";
import moment from "moment";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const Page = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();
  const { userDetails } = useSelector((state) => state.user);

  //   const roomid = params.booking;
  const fromdate = moment(params.fromid, "DD-MM-YYYY");
  const todate = moment(params.toid, "DD-MM-YYYY");

  const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1;
  // const totalamount = room ? totaldays * room.price : 0;
  const [totalamount, setTotalamount] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: response } = await axios.post(
          "http://localhost:5000/room",
          { roomid: params.booking }
        );
        // console.log(response); // Corrected log statement
        setTotalamount(response.price * totaldays);
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

  async function onToken(token) {
    console.log(token);
    const bookingDetails = {
      room,
      userid: userDetails._id,
      fromdate,
      todate,
      totalamount,
      totaldays,
      token,
    };

    try {
      const result = await axios.post(
        "http://localhost:5000/bookroom",
        bookingDetails
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Nav />
      {loading ? (
        <h1>...loading</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : (
        <div className="shadow-md mt-8 w-10/12 mx-auto">
          <div className="flex">
            <div className="md:w-5/12 mx-4 my-2">
              <h1 className="font-semibold mt-2 mb-2">{room.name}</h1>
              <img className="rounded-sm" src={room.imageurls[0]} alt="" />
            </div>
            <div className="md:w-7/12">
              <div
                className="apple"
                style={{ textAlign: "right", marginRight: "12px" }}
              >
                <div>
                  <b>
                    <h1 className="mt-6">Booking Details</h1>
                    <hr />
                    <p className=" mt-3">Name: {userDetails.userName}</p>
                    <p className=" mt-3">From Date: {params.fromid}</p>
                    <p className=" mt-3">To Date: {params.toid} </p>
                    <p className=" mt-3">Max Count: {room.maxcount}</p>
                  </b>
                </div>

                <div>
                  <b>
                    <h1 className=" mt-5">Amount</h1>
                    <hr />
                    <p className=" mt-3">Total Days: {totaldays}</p>
                    <p className=" mt-3">Rent per day: {room.price}</p>
                    <p className=" mt-3">Total Amount: {totalamount} </p>
                  </b>
                </div>
                <div>
                  {/* <button
                    className="bg-black px-3 mt-3 text-white py-1 rounded-lg"
                    onClick={bookRoom}
                  >
                    Pay Now
                  </button> */}
                  <StripeCheckout
                    amount={totalamount * 100}
                    token={onToken}
                    currency="NPR"
                    stripeKey="pk_test_51NvihqSAIZdDIMkwP0ErwdY50kyg0XvdbRuce837kaazzljwIOxyUFj7sFCcQJ99HlHAExFxC5syjPYpyjpDW81800nEoA1Qqt"
                  >
                    <button className="bg-black px-3 mt-3 text-white py-1 rounded-lg">
                      Pay Now
                    </button>
                  </StripeCheckout>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
