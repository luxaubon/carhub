"use client";
import React, { useState, useEffect } from 'react'

import { Hero,SearchBar,CustomFilter,CarCard,ShowMore } from '@/components'
import { fetchCars } from '@/utils'
import {yearsOfProduction , fuels} from '@/constants'

export default function Home() {

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2023)

  const [limit, setLimit] = useState(10)

  const getCats = async () => {
    setLoading(true);

    try{
      const result = await fetchCars({
          manufacturer : manufacturer || '',
          model : model || '',
          fuel : fuel || '',
          year : year || 2023,
          limit : limit || 10,
      });
      setAllCars(result)
    }catch(error){
      console.log(error)
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    console.log(manufacturer,model,fuel,year,limit);
    getCats();

  },[manufacturer,model,fuel,year,limit])

  const isDataEmoty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>

        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>ค้าหารถยนต์</h1>
          <p>กดปุ่ม แว่นขยายสีม่วงๆอะ</p>
        </div>

        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel}/>

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

            {allCars.length > 0 ? (
              <section>
                <div className='home__cars-wrapper'>
                  {allCars?.map((item) =>(
                    <CarCard car={item} />
                  ))}
                </div>
                  {loading && (
                    <p className='text-center'>Loading...</p>
                  )}

                    <ShowMore
                      pageNumber={limit / 10}
                      isNext={limit > allCars.length}
                      clickShowlimit={setLimit}
                    />
              </section>
            ) : (
              <div className='home__error-container'>
                <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                {/* <p>{allCars?.message}</p> */}
              </div>
            )}

      </div>
    </main>
  )
}
