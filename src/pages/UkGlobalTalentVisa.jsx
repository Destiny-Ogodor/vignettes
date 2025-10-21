import ServicesHero from "../ui/ServicesHero";
import SinglePageHeader from "../ui/SinglePageHeader";

function UkGlobalTalentVisa() {
  return (
    <div>
      <SinglePageHeader
        title="Services"
        backgroundImage="/contact-breadcrumb.jpg"
        breadcrumbLinks={[
          { label: "Home", to: "/" },
          { label: "UK Global Talent Visa", to: "/services" },
        ]}
      />

      <div className="space-y-20 bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-20 sm:px-16 sm:py-28">
        <div className="flex flex-col items-center gap-y-6">
          <div className="w-full space-y-3 text-center sm:text-start md:w-1/2">
            <h5 className="text-center font-semibold uppercase tracking-wider text-siteRed sm:text-sm">
              Visa Categories
            </h5>
            <h2 className="text-center text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl">
              UK Global Talent Visa
            </h2>
          </div>

          <p className="w-full text-center text-[16px] text-gray-600 md:w-1/2">
            The UK Global Talent Visa is designed for individuals who are
            recognized as leaders or potential leaders in their field. This
            includes those in academia, research, arts and culture, and digital
            technology.
          </p>
        </div>

        <section>
          <header>
            <h3 className="text-primary text-center text-2xl font-bold tracking-wide">
              These are three sectors covered under this Visa:
            </h3>
          </header>

          <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap">
            <article className="flex min-h-80 max-w-sm flex-col justify-start gap-4 rounded-xl border-2 p-8 text-center shadow-md">
              <div className="flex justify-center">
                <img
                  src="/academia-icon.png"
                  alt="academia and research icon"
                  className="mb-3 h-16 w-16"
                />
              </div>
              <h3 className="text-primary text-xl font-semibold">
                Academia and Research
              </h3>
              <p className="text-lg text-gray-600">
                This is aimed at researchers, academic leaders or other experts
                in scientific fields
              </p>
            </article>

            <article className="flex min-h-80 max-w-sm flex-col gap-4 rounded-xl border-2 p-8 text-center shadow-md">
              <div className="flex justify-center">
                <img
                  src="/arts-icon.png"
                  alt="arts and culture"
                  className="mb-3 h-16 w-16"
                />
              </div>
              <h3 className="text-primary text-xl font-semibold">
                Arts & Culture
              </h3>
              <p className="text-lg text-gray-600">
                For individuals in fields such as dance, music, theatre, visual
                arts, literature, fashion design, film and television
              </p>
            </article>

            <article className="flex max-w-sm flex-col gap-4 rounded-xl border-2 p-8 text-center shadow-md">
              <div className="flex justify-center">
                <img
                  src="/digital-technology-icon.png"
                  alt="digital technology icon"
                  className="mb-3 h-16 w-16"
                />
              </div>
              <h3 className="text-primary text-xl font-semibold">
                Digital Technology
              </h3>
              <p className="text-lg text-gray-600">
                For professionals working in the digital technology sectors
                including areas such as software engineering, data science and
                cybersecurity
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UkGlobalTalentVisa;
