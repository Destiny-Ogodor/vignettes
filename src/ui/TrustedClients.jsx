import Button from "./Button";

function TrustedClients() {
  const numbersCount = [
    {
      img: "./assets/globe.png",
      count: "35+",
      details: "Countries Represented",
    },
    {
      img: "./assets/passport (1).png",
      count: "25k+",
      details: " Visa Delivery",
    },
    {
      img: "./assets/shield.png",
      count: "89%",
      details: "Success Rate",
    },
  ];

  return (
    <div className="relative z-30 -mb-64 px-4 sm:px-20">
      <div className="flex flex-col gap-8 bg-siteRed px-14 py-16 sm:flex-row sm:items-center sm:gap-20 sm:px-24">
        <div className="w-full sm:w-1/3">
          <div className="space-y-6 text-center sm:space-y-8 sm:text-start">
            <h5 className="-mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              5m+ Trusted Our Clients
            </h5>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Experience our services
            </h2>
            <p className="text-sm leading-relaxed text-white sm:text-lg sm:tracking-wide">
              Transmds is the world’s driving worldwide exchange the worldwide
              trade of
            </p>

            <Button variant="white" size="md" to="/about-us">
              Explore our services
            </Button>

            {/* <Link
              to="/services"
              className="group flex w-10/12 items-center justify-start gap-2 bg-white px-10 py-4 text-lg font-bold capitalize tracking-wider text-gray-900 transition-all duration-500 hover:gap-4 hover:bg-black hover:text-white sm:py-6 sm:text-lg"
            >
              <span className=" ">Explore our services</span>
              <span className="">
                <FaAngleRight />
              </span>
            </Link> */}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 sm:flex-row">
          {numbersCount.map((counter, i) => (
            <div key={i} className="group relative w-full sm:w-1/3">
              <div className="relative flex h-full w-full flex-col items-center gap-2 px-6 py-4 text-center text-white after:absolute after:inset-0 after:z-0 after:rounded-lg after:bg-transparent after:transition-all after:duration-500 after:ease-in-out after:content-[''] group-hover:after:mt-20 group-hover:after:bg-[#CC0000]/30 sm:gap-10 sm:py-8">
                <div className="relative z-10 transform rounded-full bg-white p-6 transition-transform duration-500 group-hover:scale-x-[-1]">
                  <img src={counter.img} alt="img" className="w-12" />
                </div>

                <h3 className="relative z-10 mt-8 text-5xl font-bold sm:mt-0 md:text-6xl">
                  {counter.count}
                </h3>
                <h4 className="relative z-10 w-4/6 text-center text-sm sm:text-xl">
                  {counter.details}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedClients;
