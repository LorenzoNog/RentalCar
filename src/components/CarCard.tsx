"use client";
import FetchCars, { generateCarUrlImg } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { CalculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";


interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = CalculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex font-extrabold text-[32px] mt-6">
        <span className="self-start text-[14px] font-semibold">U$D</span>
        {carRent}
        <span className="self-end text-[14px] font-light">/día</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image alt="cars" src={generateCarUrlImg(car)} className="object-contain" fill />
      </div>

      <div className="relative w-full flex flex-row justify-between mt-2 ">
        <div className="flex group-hover:invisible w-full justify-between text-gray-500">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
              alt="volante"
            />
            <small>{transmission === "a" ? "Automático" : "Manual"}</small>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="volante" />
            <small>{drive.toUpperCase()}</small>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="volante" />
            <small>{city_mpg} MPG</small>
          </div>
        </div>
        <div className="car-card__btn-container ">
          <CustomButton
            title="Ver más"
            btnType="button"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
    </div>
  );
};

export default CarCard;
