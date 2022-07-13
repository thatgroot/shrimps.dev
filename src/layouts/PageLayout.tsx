import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Sticky from "../components/sticky/Sticky";
import RightSidebar from "../components/sidebar/RightSidebar";

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <div className="">
        <Header />
      </div>

      <div className="container mx-auto py-6">
        <div className="flex md:flex-row flex-col min-h-screen">
          <Sticky className="h-max">
            <Sidebar />
          </Sticky>

          <div className="w-full md:px-12">{children}</div>
          <div className="flex  md:flex-row flex-col min-h-screen">
            <Sticky className="h-max">
              <RightSidebar />
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
