import { useState } from "react";

const universities = {
  "United Kingdom": [
    "Buckinghamshire New University (BUCKS)",
    "British Study Centres University Pathways",
    "Brunel University London",
    "Cardiff Metropolitan University",
    "Coventry University",
    "Cranfield University",
    "David Game College, London UK",
    "De Montfort University",
    "Glasgow Caledonian University",
    "Kingston University London",
    "Leeds Beckett University",
    "London South Bank University",
    "Loughborough University",
    "Middlesex University, London",
    "Nottingham Trent University",
    "Oxford Brookes University",
    "Ravensbourne University",
    "Regent College London",
    "Royal Holloway, University of London",
    "Swansea University",
    "Teesside University",
    "University of Bradford",
    "University of Bedfordshire",
    "University of Essex",
    "University of Greenwich",
    "University of Hertfordshire",
    "University of Kent",
    "University of Liverpool",
    "University of Portsmouth",
    "University of Reading",
    "University of South Wales",
    "University of Strathclyde",
    "University of Surrey",
    "University of Sussex",
    "University of the West of England",
    "University of Wolverhampton",
  ],
  "United States of America": [
    "Bishop’s University",
    "Adelphi University",
    "Alma College",
    "Arizona State University",
    "Arkansas State University",
    "Auburn University",
    "Audacia Novatio Business College",
    "Bay Atlantic University",
    "California State University, Channel Islands",
    "California State University, Chico",
    "California State University, Dominguez Hills",
    "California State University, East Bay",
    "California State University, Long Beach",
    "California State University, Monterey Bay",
    "California State University, Northridge",
    "California State University, San Bernardino",
    "Calvin University",
    "Central Michigan University",
    "Clarkson University",
    "Cleveland State University",
    "Concordia University Chicago",
    "College of the Canyons",
    "College of San Mateo",
    "Colorado State University – Pueblo",
    "Embry-Riddle Aeronautical University",
    "ECPI University",
    "Edmonds College",
    "Elgin Community College",
    "Elizabethtown College",
    "Embry Riddle Aeronautical University",
    "Felician University",
    "Fordham University, Gabelli School of Business",
    "Full Sail University",
    "Gannon University",
    "Grand Valley State University",
    "High Point University",
    "Hope College",
    "Humboldt State University",
    "Iowa State University",
    "Indiana University – Purdue University Indianapolis",
    "Lake Tahoe Community College",
    "Lewis-Clark State College",
    "Lincoln University",
    "Long Island University",
    "Madison College",
    "Northeastern University",
    "Northeastern Illinois University",
    "Notre Dame High School",
    "Ohio Wesleyan University",
    "Olympic College",
    "Pacific Lutheran University",
    "Rice University",
    "Roger Williams University",
    "Sacred Heart University-USA",
    "Santa Rosa Junior College",
    "Santa Monica College",
    "San Francisco State University",
    "SCAD",
    "Schiller International University",
    "Shoreline Community College",
    "Southeast Missouri State University",
    "SUNY Oswego",
    "Tennessee Technological University",
    "Tiffin University",
    "The Chicago School of Professional Psychology",
    "The American University of Barbados School of Medicine",
    "The University of Alabama",
    "The University of Arizona",
    "The University of New Mexico",
    "The University of Southern Mississippi",
    "Touro College Graduate School of Technology",
    "Trine University",
    "University of Arizona",
    "University of California, Riverside",
    "University of Central Missouri",
    "University of Colorado Denver",
    "University of Colorado – Denver",
    "University of Delaware",
    "University of Idaho",
    "University of Illinois at Chicago",
    "University of Findlay",
    "University of New Haven",
    "University of Notre Damec",
    "University of Texas at Tyler",
    "University of Wisconsin – Stout",
    "University of Wyoming",
    "Valencia College",
    "Wayne State University",
    "Westcliff University",
    "Webster University",
    "Western Michigan University",
    "Whitworth University",
    "Wilkes University",
  ],
  Canada: [
    "Algoma University",
    "Alexander College",
    "Bishop’s University",
    "Bow Valley College",
    "British Columbia Institute of Technology",
    "Brock University",
    "Brock University Faculty of Education",
    "Canadian College of Technology and Business",
    "Canadore College",
    "Centennial College",
    "Conestoga College",
    "Douglas College",
    "Georgian College",
    "Great Lakes College of Toronto",
    "Fanshawe College",
    "Fleming College",
    "Focus College, Abbotsford",
    "George Brown College",
    "Herzing College",
    "Humber College Institute of Technology",
    "International Business University",
    "Insignia College",
    "Justice Institute of British Columbia",
    "King’s University College at Western University",
    "Kwantlen Polytechnic University",
    "Langara College",
    "Languages Across Borders",
    "Lakehead University",
    "London International Academy, Canada",
    "Loyalist College of Applied Arts and Technology",
    "Manitoba Institute of Trades and Technology",
    "Mohawk College",
    "Niagara College Canada",
    "Red Deer Polytechnic at Sterling College",
    "Red River College Polytechnic",
    "Royal Roads University",
    "Saskatchewan Polytechnic",
    "Seneca College",
    "Sheridan College",
    "Southern Alberta Institute of Technology",
    "St. Clair College",
    "The University of Winnipeg Collegiate",
    "Thompson Rivers University",
    "Toronto Metropolitan University (TMU)",
    "Trebas Institute",
    "Toronto School of Management",
    "University Canada West",
    "University of Guelph",
    "University of Lethbridge",
    "University of Manitoba",
    "University of the Fraser Valley",
    "University of Regina",
    "University of Saskatchewan",
    "University of Windsor",
    "Western University",
    "York University",
    "Yorkville University",
  ],
  "The Republic of Ireland": [
    "Dublin City University – Glasnevin",
    "Dublin Business School",
    "IBAT College - Dublin",
    "Maynooth University",
    "University of Limerick",
    "UniHaven College",
    "Trinity College Dublin",
    "Technological University of the Shannon: Midlands Midwest (TUS)",
    "University College Cork",
    "University College Dublin",
    "University of Limerick",
  ],
};

function PartnerInstitutionList() {
  const [openCountry, setOpenCountry] = useState(null);

  const toggleAccordion = (country) => {
    setOpenCountry(openCountry === country ? null : country);
  };

  return (
    <>
      <div className="space-y-4 px-6 text-center">
        <h3 className="text-3xl uppercase text-siteRed">
          Partner Institutions
        </h3>

        <p className="text-lg text-gray-600">
          Here is the List Our partner institutions, Country by Country.
        </p>
      </div>
      <div className="mx-auto my-10 mb-72 max-w-5xl space-y-4 px-6">
        {Object.keys(universities).map((country) => (
          <div key={country} className="rounded-lg border shadow-md">
            <button
              className="flex w-full items-center justify-between border border-siteRed p-4 text-lg font-semibold text-gray-800"
              onClick={() => toggleAccordion(country)}
            >
              {country}
              <span
                className="transform transition-transform duration-300"
                style={{
                  transform:
                    openCountry === country ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                ▼
              </span>
            </button>
            {openCountry === country && (
              <div className="bg-gray-100 p-4">
                <ul className="list-inside list-disc space-y-1">
                  {universities[country].map((university, index) => (
                    <li key={index}>{university}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default PartnerInstitutionList;
