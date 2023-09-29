"use client";
import React,{ useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import {manufacturerProps} from '@/types'

const SearchButton = ({ otherClasses } : { otherClasses : string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className='object-contain'
        />
    </button>
)

export default function SearchBar({setManufacturer,setModel} : manufacturerProps) {
    
    const [searchManuFacturer, setSearchManuFacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');

    const handleSeatch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setModel(searchModel)
        setManufacturer(searchManuFacturer)
    }
    return (
        <form className='searchbar' onSubmit={handleSeatch}>
             <div className='searchbar__item'>
                <SearchManufacturer 
                    selected={searchManuFacturer}
                    setSelected={setSearchManuFacturer}
                />
                <SearchButton otherClasses='sm:hidden' />
             </div>
             <div className='searchbar__item'>
                <Image src='/model-icon.png' width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' alt='car model' />
                <input
                    type='text'
                    name='model'
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder='Tiguan...'
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden' />
             </div>
             <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}