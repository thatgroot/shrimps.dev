import { Link } from "react-router-dom";
function SmallPostCard({ slug }: Post) {
  return (
    <div className="flex flex-col bg-gray-200 rounded-[2rem] border-4 border-white">
      <img
        src="https://forem.dev/remoteimages/uploads/articles/f7nihr3z8nacgyb8ptrn.png"
        className="rounded-[2rem]"
      />
      <div className="flex items-center justify-center">
        <Link
          className="relative block p-8 overflow-hidde"
          to={`/post/${slug}`}
        >
          {/* <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span> */}

          <div className="justify-between sm:flex">
            <div>
              <h5 className="text-xl font-bold text-gray-900">
                Building a SaaS product as a software developer
              </h5>
              <p className="mt-1 text-xs font-medium text-gray-600">
                By John Doe
              </p>
            </div>

            <div className="flex-shrink-0 hidden ml-3 sm:block">
              <img
                className="object-cover w-16 h-16 rounded-lg shadow-sm"
                src="https://www.hyperui.dev/photos/man-5.jpeg"
                alt=""
              />
            </div>
          </div>

          <div className="mt-4 sm:pr-8">
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
              illum provident a, ipsa maiores deleniti consectetur nobis et
              eaque.
            </p>
          </div>

          <dl className="flex mt-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">31st June, 2021</dd>
            </div>

            <div className="flex flex-col-reverse ml-3 sm:ml-6">
              <dt className="text-sm font-medium text-gray-600">
                Reading time
              </dt>
              <dd className="text-xs text-gray-500">3 minute</dd>
            </div>
          </dl>
        </Link>
      </div>
    </div>
  );
}

export default SmallPostCard;
