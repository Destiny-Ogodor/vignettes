import Button from "./Button";

function ServicesCta() {
  return (
    <div className="relative">
      <div
        className="inset-0 top-0 h-96 bg-cover bg-center bg-no-repeat px-8 py-20 text-white after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-r after:from-[#16171aee] after:to-[rgba(22,23,26,0.5)] after:content-[''] sm:px-28"
        style={{
          backgroundImage: 'url("/contact-bg.jpg")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-30 flex h-full flex-col items-center justify-center gap-y-8 md:flex-row md:justify-between">
          <h2 className="w-full text-center text-4xl font-bold md:w-3/6 md:text-start md:text-5xl">
            We Counsel Students to Get Study Visas
          </h2>
          <div className="w-2/3 text-center sm:w-80">
            <Button variant="red" size="md" to="/contact-us">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCta;
