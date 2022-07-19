import { primary_navigation_items } from "../../../data/index";
import { Button } from "../../elements/button/Button";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <header className="border-b border-gray-100 bg-gray-50">
    <div className="container flex items-center justify-between h-16 mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-end flex-1">
        <nav className="hidden lg:uppercase lg:text-gray-500 lg:tracking-wide lg:font-bold lg:text-xs lg:space-x-4 lg:flex">
          {primary_navigation_items.map(
            ({ title, icon, color, link = "/" }, index) => (
              <Button
                mode="secondary"
                size="medium"
                label={title}
                onClick={() => {
                  // navigate
                }}
              />
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
