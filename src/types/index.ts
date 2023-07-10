import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
  rigthIcon?: string;
  isDisabled?: boolean;
}

export interface searchBrandProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface OptionProps{
  title: string;
  value: string
}

export interface CustomFilterProps{
  title: string;
  options: OptionProps[]
}

export interface FilterProps {
  manufacturer: string,
  year: number,
  fuel: string,
  limit: number,
  model: string
}

export interface ShowMoreProp{
  pageNumber: number;
  isNext: boolean
}

export interface HomeProps{
  searchParams: FilterProps
}