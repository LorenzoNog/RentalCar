"use client";
import Image from "next/image";
import { CustomButtonProps } from "../types";

const CustomButton = ({
  title,
  handleClick,
  btnType,
  rigthIcon,
}: CustomButtonProps) => {
  return (
    <button
      className="custom-btn"
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rigthIcon && (
        <div className="relative w-6 h-6">
          <Image src={rigthIcon} alt="rightICon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
