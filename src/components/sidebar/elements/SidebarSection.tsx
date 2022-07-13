export const SidebarSection = (props: SectionProps) => {
  return (
    <ul className="w-full pt-4 space-y-1 mb-5 border-gray-100 px-2 py-6 bg-gray-200 rounded-lg">
      {props.items.map(({ title, icon, color }) => (
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
  );
};
