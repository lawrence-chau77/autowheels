import { CarProps, FilterProps } from "@/types";

export async function fetchCars( filters: FilterProps) {
    const { selectedBrand, year, fuel, limit, transmission, drive} = filters
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${selectedBrand}&year=${year}&limit=${limit}&fuel_type=${fuel}&transmission=${transmission}&drive=${drive}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5e9882065bmsh944ef8773de609ep1682dcjsn535ad51a042f',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        return error;
    }
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`;
}