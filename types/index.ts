import {MouseEventHandler } from 'react';

export interface CustomButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?:string;
    rightIcon?:string
}

export interface SearchManufacturerProps {
    selected:string;
    setSelected:(manufacturer:string) => void;
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
  
  export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

  
  export interface OptionProps {
    title: string;
    value: string;
  }
  
  export interface CustomFilterProps {
    title : string;
    options: OptionProps[];
    setFilter: (value: any) => void;
  }
  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    clickShowlimit: (limit: number) => void;
  }


  export interface manufacturerProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
  }