"use client";


import React, { useContext } from "react";
import {ShowMoreProps} from '../types'
import { updateSearchParam } from "@/utils";
import { CustomButton } from "@/components";

function ShowMore({pageNumber, isNext,clickShowlimit}: ShowMoreProps) {
 
    const handleNavigation = () =>{
        const newLimit = (pageNumber + 1) * 10;
        clickShowlimit(newLimit);
    }
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore