import { TEAM_MEMBERS } from "../../constants";
import Button from "./Button";

function TeamMembers() {
  return (
    <div className="relative flex flex-col items-center gap-16 bg-black px-6 py-40 pt-96 sm:px-24">
      <div className="text-center">
        <h5 className="mb-2 text-sm font-semibold uppercase tracking-wider text-siteRed sm:text-lg">
          Professional people
        </h5>
        <h2 className="text-4xl font-bold leading-normal tracking-wide text-white sm:text-4xl md:text-6xl">
          Meet Our Expert Visa <br /> Consultants
        </h2>
      </div>

      <div className="flex flex-wrap gap-5 gap-y-8 sm:flex-row sm:flex-nowrap sm:gap-10">
        {TEAM_MEMBERS.map((member, i) => (
          <div
            key={i}
            className="group relative h-full w-[46%] sm:h-80 sm:w-1/3 md:w-1/4"
          >
            <img src={member.img} alt="team member" className="relative z-10" />
            <div className="relative z-20 mx-2 -mt-10 space-y-1 bg-white px-6 py-3 text-center text-black sm:mx-5">
              <h4 className="text-xl font-bold transition-all duration-300 group-hover:text-siteRed">
                {member.title}
              </h4>
              <h5>{member.role}</h5>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-0 w-96 text-center sm:mt-28">
        <Button variant="red" size="md" to="/contact-us">
          Get a Quote
        </Button>
      </div>
    </div>
  );
}

export default TeamMembers;
