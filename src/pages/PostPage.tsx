import PostCard from "../components/card/post/PostCard";
import PostLayout from "../layouts/PostLayout";

function PostPage() {
  return (
    <PostLayout>
      <PostCard />
      <form className="flex flex-col my-4 items-end justify-between">
        <textarea
          rows={4}
          className="bg-gray-200 w-full p-4  rounded-[1rem] focus:bg-gray-300 outline-none"
          placeholder="comment"
        ></textarea>
        <button className="flex justify-evenly items-center p-4 my-4 bg-black/90 text-gray-300  rounded-[1rem] w-[8rem]">
          <i className="fa fa-message"></i>
          <span>send</span>
        </button>
      </form>

      <div className="flex flex-col bg-gray-200 p-4 rounded-lg">
        <div className="flex justify-between items-start px-4">
          <div className="w-full flex flex-col">
            <p
              className="w-full text-lg"
              style={{
                lineHeight: "2rem",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam enim doloribus ab incidunt voluptatibus obcaecati
              minima vero voluptates quidem sapiente, placeat sed inventore
              eveniet nulla et laborum deserunt. Nihil, eum.
            </p>
            <div className="flex justify-between w-24 py-4 text-gray-600">
              {[
                {
                  icon: "thumbs-up",
                  hint: "like",
                },
                {
                  icon: "thumbs-down",
                  hint: "dislike",
                },
                {
                  icon: "message",
                  hint: "message",
                },
              ].map(({ icon, hint }) => (
                <span className="relative group w-max cursor-pointer">
                  <i className={`fa fa-${icon}`}></i>
                  <span className="absolute z-10 text-xs font-medium text-white bg-gray-900 left-0 -bottom-6 px-2 py-1.5 rounded opacity-0 group-hover:opacity-100">
                    {hint}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex w-32 flex-col justify-center items-center">
            <i className="fa fa-user text-lg text-[#1976d2]"></i>
            <span className="text-sm">shrims dev</span>
          </div>
        </div>
      </div>
    </PostLayout>
  );
}

export default PostPage;
