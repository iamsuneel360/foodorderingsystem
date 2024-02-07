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

const Room = ({ room }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex shadow-md mt-4 w-6/12 mx-auto items-center justify-center ">
      <div className="flex items-center relative">
        <div className="-mr-10 mt-2 mb-2">
          <img
            className="smallimg -ml-16"
            src="https://images.oyoroomscdn.com/uploads/hotel_image/56303/medium/597f0e48823f8885.jpg"
            alt="Picture of the author"
          />
        </div>
        <div className="-mt-20 font-medium">
          <h1 className="mb-2">{room.name}</h1>
          <p className="mb-2">Total room: {room.maxcount}</p>
          <p className="mb-2">Phone Number: {room.phonenumber}</p>
          <p className="mb-2">Type: {room.type}</p>
          <div className="absolute bottom-0 right-0 mb-2 -mr-20">
            <Button
              onPress={onOpen}
              className="bg-black text-white px-10 py-2 rounded-lg"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className=" size-max max-w-prose"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {room.name}
              </ModalHeader>
              <ModalBody>
                <Carousel>
                  {room.imageurls.map((url) => {
                    return <img src={url} alt="images" />;
                  })}
                </Carousel>
                <p> {room.description} </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Room;
