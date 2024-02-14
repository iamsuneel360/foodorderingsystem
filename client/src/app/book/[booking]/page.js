// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Nav from "@/components/navbar/page";

// const Page = ({ params }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState();
//   const [room, setRoom] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const { data: response } = await axios.post(
//           "http://localhost:5000/room",
//           { roomid: params.booking }
//         );
//         // console.log(response); // Corrected log statement
//         setRoom(response);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         console.error(error.message);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Nav />
//       {loading ? (
//         <h1>...loading</h1>
//       ) : error ? (
//         <h1>Error...</h1>
//       ) : (
//         <div className="shadow-md mt-8 w-10/12 mx-auto">
//           <div className="flex">
//             <div className="md:w-5/12 mx-4 my-2">
//               <h1 className="font-semibold mt-2 mb-2">{room.name}</h1>
//               <img className="rounded-sm" src={room.imageurls[0]} alt="" />
//             </div>
//             <div className="md:w-7/12">
//               <div
//                 className="apple"
//                 style={{ textAlign: "right", marginRight: "12px" }}
//               >
//                 <div>
//                   <b>
//                     <h1 className="mt-6">Booking Details</h1>
//                     <hr />
//                     <p className=" mt-3">Name: Biraj</p>
//                     <p className=" mt-3">From Date: {params.fromdate}</p>
//                     <p className=" mt-3">To Date: {params.todate} </p>
//                     <p className=" mt-3">Max Count: {room.maxcount}</p>
//                   </b>
//                 </div>

//                 <div>
//                   <b>
//                     <h1 className=" mt-5">Amount</h1>
//                     <hr />
//                     <p className=" mt-3">Total Days: 2</p>
//                     <p className=" mt-3">Rent per day: {room.price}</p>
//                     <p className=" mt-3">Total Amount: 3000</p>
//                   </b>
//                 </div>
//                 <div>
//                   <button className="bg-black px-3 mt-3 text-white py-1 rounded-lg">
//                     Pay Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Page;
