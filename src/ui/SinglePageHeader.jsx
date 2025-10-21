import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SinglePageHeader({ title, breadcrumbLinks, backgroundImage }) {
  return (
    <div>
      <div
        className="relative top-0 h-64 bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-r after:from-[#16171A] after:to-[rgba(22,23,26,0.2)] after:content-[''] sm:h-80"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative z-10 flex h-full items-center justify-between px-8 text-white md:px-16">
          <h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>

          <ul className="flex gap-3 text-lg font-semibold">
            {breadcrumbLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                {link.to ? (
                  <Link to={link.to}>{link.label}</Link>
                ) : (
                  <span>{link.label}</span>
                )}
                {index < breadcrumbLinks.length - 1 && (
                  <span className="mx-2">-</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

SinglePageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  breadcrumbLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
  ).isRequired,
};

export default SinglePageHeader;
