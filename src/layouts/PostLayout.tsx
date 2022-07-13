import Header from "../components/header/Header";
import Sticky from "../components/sticky/Sticky";

const PostLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <div className="">
        <Header />
      </div>

      <div className="container mx-auto py-6">
        <div className="flex md:flex-row flex-col min-h-screen">
          <Sticky className="w-48 h-max">
            <ul className="w-full pt-4 space-y-1 mb-5 border-gray-100 px-2 py-6 bg-gray-200 rounded-lg">
              <li className="text-sm mb-4 text-[#1976d2]">
                <a href="!#"># Installation</a>
              </li>
              <li className="text-sm mb-4 ">
                <a href="!#"># Create a project</a>
              </li>
              <li className="text-sm mb-4">
                <a href="!#"># Creating Server</a>
              </li>
              <li className="text-sm mb-4">
                <a href="!#"># Defining Routes</a>
              </li>
            </ul>
          </Sticky>

          <div className="w-full md:px-12">{children}</div>
          <div className="flex  md:flex-row flex-col min-h-screen">
            <Sticky className="h-max">
              <ul className="w-full pt-4 space-y-1 mb-5 border-gray-100 px-2 py-6 bg-gray-200 rounded-lg">
                {{
                  items: [
                    {
                      title: "like",
                      icon: "fa fa-thumbs-up",
                      color: "#1976d2",
                    },
                    {
                      title: "bookmark",
                      icon: "fa fa-bookmark",
                      color: "#1976d2",
                    },
                    {
                      title: "share",
                      icon: "fa fa-share-alt",
                      color: "#1976d2",
                    },
                    {
                      title: "similar",
                      icon: "fa fa-th-list",
                      color: "#1976d2",
                    },
                    {
                      title: "more",
                      icon: "fa fa-arrow-right",
                      color: "#1976d2",
                    },
                  ],
                }.items.map(({ title, icon, color }) => (
                  <li key={title} className={" mb-2 "}>
                    <a
                      href=""
                      className="flex justify-center items-center px-2 py-1.5 rounded hover:bg-gray-50 hover:text-gray-700 relative group"
                    >
                      {icon.includes(".svg") ? (
                        <img src={icon} className="w-5 h-5" />
                      ) : (
                        <i
                          style={{
                            color: color,
                          }}
                          className={`text-2xl text-center font-bold text-[${color.toLowerCase()}] ${icon}`}
                        ></i>
                      )}

                      <span className="absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100">
                        {title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Sticky>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
