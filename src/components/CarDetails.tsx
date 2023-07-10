import React, { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { CarProps } from "@/types";
import { generateCarUrlImg } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  car: CarProps;
  closeModal: () => void;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
  
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-0"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-gray-200  rounded-full"
                  >
                    <Image
                      src={"/close.svg"}
                      alt="close-icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-blue-300 bg-cover bg-center rounded-lg">
                      <Image
                        alt="hero"
                        src={generateCarUrlImg(car)}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 rounded-lg bg-gray-100">
                      <Image
                        alt="hero"
                        src={generateCarUrlImg(car, '29')}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 rounded-lg bg-gray-100">
                      <Image
                        alt="hero"
                        src={generateCarUrlImg(car, '22')}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 rounded-lg bg-gray-100">
                      <Image
                        alt="hero"
                        src={generateCarUrlImg(car, '13')}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-2 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                        {
                            Object.entries(car).map(([key,value]) => (
                                <div className="flex justify-between gap-4 w-full text-right" key={key}>
                                    <h4 className="font-bold text-gray-500">{key.split("_").join(" ").toUpperCase()}</h4>
                                    <span className="text-black font-semibold">{value}</span>
                                </div>
                            ))
                        }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
