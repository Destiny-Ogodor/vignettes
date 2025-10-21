import { COUNTRIES_FLAGS } from "../../constants";

function CountryFlags() {
  return (
    <div>
      <div className="bg-gray-100 px-6 py-24 sm:px-16">
        <div className="flex flex-wrap justify-between gap-6">
          {COUNTRIES_FLAGS.map((country, i) => (
            <div
              key={i}
              className="group flex w-full cursor-pointer items-center gap-5 rounded-lg bg-white px-6 py-8 shadow-md sm:w-[47%] md:w-[32%]"
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-20 transition-all duration-500 group-hover:scale-x-[-1]"
              />
              <div className="space-y-3">
                <h3 className="text-xl font-bold">{country.name}</h3>
                <p className="text-lg text-stone-700">{country.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryFlags;
