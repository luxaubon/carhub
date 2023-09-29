import { CarProps,FilterProps } from "@/types/index";

export async function fetchCars(filters:FilterProps){

    const {manufacturer,model,year,limit,fuel} = filters;

    const headers = { 
        'X-RapidAPI-Key': '3d816f92abmsh9b04eec4a6a1362p16b549jsn2a417dfbf534',
		    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers : headers
        });
    const result = await res.json();
    return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    // url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
  }

  export const updateSearchParam = (type: string, value: string) => {
    
    const params = new URLSearchParams(window.location.search);
    params.set(type,value);
    const newPatchname = `${window.location.pathname}?${params.toString()}`;

    return newPatchname;

  }