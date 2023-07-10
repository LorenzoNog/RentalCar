"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Renta un auto, creá recuerdos inolvidables.
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Optimice su experiencia de alquilar vehículos con nuestro sencillo
          proceso de reservación
        </p>
        <CustomButton title="Ver autos" handleClick={handleScroll} btnType="button"/>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image alt="hero" src="/hero.png" fill className="object-contain" />
        </div>
        <div className="absolute xl:-top-[-15%] xl:right-[-44%] -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden">
          <Image alt="hero-bg" src={"/hero-bg.png"} width={950} height={950} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
