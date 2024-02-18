"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

const Room = ({ room, fromdate, todate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex rounded-lg shadow-md mt-4 w-8/12 mx-auto items-center pl-5 relative">
      <div className="flex relative">
        <div className="mt-2 mb-2">
          <img
            className="smallimg"
            src={room.imageurls[0]}
            alt="Picture of the author"
          />
        </div>
        <div className="ml-3 mt-2 font-medium">
          <h1 className="mb-2">{room.name}</h1>
          <p className="mb-2">Total room: {room.maxcount}</p>
          <p className="mb-2">Phone Number: {room.phonenumber}</p>
          <p className="mb-2">Type: {room.type}</p>
        </div>
      </div>
      <div className=" absolute bottom-0 right-0 mb-2 mr-8">
        {fromdate && todate && (
          <Link
            href={`/book/${room._id}/${fromdate}/${todate}`}
            className="bg-black px-4 text-white py-3 rounded-lg mr-4"
          >
            <button>Book Now</button>
          </Link>
        )}

        <Button
          onPress={onOpen}
          className="bg-black px-4 text-white py-3 rounded-lg"
        >
          View Details
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} className="size-max max-w-prose">
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              {room.name}
            </ModalHeader>
            <ModalBody>
              <Carousel>
                {room.imageurls.map((url, index) => (
                  <img key={index} src={url} alt="images" />
                ))}
              </Carousel>
              <p>{room.description}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Room;
