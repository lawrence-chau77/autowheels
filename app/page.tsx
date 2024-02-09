import { CarCard, Filter, Hero, SearchBar, ShowMore } from "@/components";
import { drive, fuels, transmission, years } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    selectedBrand: searchParams.selectedBrand || 'Toyota',
    year: searchParams.year || 2017,
    fuel: searchParams.fuel || '',
    drive: searchParams.drive || '',
    transmission: searchParams.transmission || '',
    limit: searchParams.limit || 10
  });

  const noCars = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div id='cars' className="pad-x-default w-full max-w-[1440px] mx-auto mt-10">
        <div>
          <h1 className="text-[27px] font-extrabold">
            Cars Available 
          </h1>
          <p>Explore and search for your perfect car</p>
        </div>
        <div className="mt-3 flex flex-col items-start gap-3" >
          <SearchBar/>
          <div className="flex flex-row gap-2">
            <Filter title='Fuels' options={fuels}/>
            <Filter title= 'Year'options={years}/>
            <Filter title='Drive' options={drive}/>
            <Filter title='Transmission' options={transmission}/>
          </div>
        </div>
        {!noCars ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6 mt-10">
              {allCars?.map((car) => (
                <CarCard car={car}/>
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="my-20 text-center">
            <h2 className="font-bold"> No cars match results </h2>
          </div>
        )}
      </div>
    </main>
  );
}
