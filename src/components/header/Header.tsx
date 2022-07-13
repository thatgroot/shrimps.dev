import { Link } from "react-router-dom";
import { primary_navigation_items } from "../../data/index";

const Header = () => {
  return (
    <header className="border-b border-gray-100 bg-gray-50">
      <div className="container flex items-center justify-between h-16 mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-end flex-1">
          <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
            {primary_navigation_items.map(
              ({ title, icon, color, link = "/" }, index) => (
                <Link
                  key={index}
                  to={link}
                  className="flex items-center justify-center w-28  hover:text-gray-600 "
                >
                  {icon.includes(".svg") ? (
                    <img src={icon} />
                  ) : (
                    <i
                      style={{
                        color: color,
                      }}
                      className={`mr-4 text-2xl text-center font-bold text-[${color.toLowerCase()}] ${icon}`}
                    ></i>
                  )}

                  <span className="">{title}</span>
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center ml-8">
            <form>
              <input
                className="bg-gray-100 rounded-lg w-full px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
