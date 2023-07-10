import Hero from "@/components/hero";
import Searcher from "@/components/Searcher";
import CustomFilter from "@/components/CustomFilter";
import FetchCars from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/showMore";
import { HomeProps } from "@/types";

const Home = async ({ searchParams }: HomeProps) => {
  const allCars = await FetchCars({
    manufacturer: searchParams.manufacturer || " ",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || " ",
    limit: searchParams.limit || 10,
    model: searchParams.model || " ",
  });
  const haveData = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main>
      <Hero />
      <div className="mt-[6%] padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo</h1>
          <small className="text-gray-500">
            Explorá y encontrá el auto que más te guste
          </small>
        </div>
        <div className="home__filters">
          <Searcher />
          <div className="home__filter-container">
            <CustomFilter title="Combustible" options={fuels} />
            <CustomFilter title="Año" options={yearsOfProduction} />
          </div>
        </div>
        {!haveData ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no se encontraron resultados :(
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
