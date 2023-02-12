import React from "react";

const Sidebar = () => {
  const icons = [
    {
      iconName: "bx bxs-dashboard",
    },
    {
      iconName: "bx bxs-store",
    },
    {
      iconName: "bx bx-cart-alt",
    },
    {
      iconName: "bx bxs-bell",
    },
    {
      iconName: "bx bxs-cog",
    },
  ];
  return (
    <div className="bg-white h-screen p-5">
      <div className="flex gap-2 items-center">
        <img
          src="https://i.imgur.com/gx9zkI0.jpg"
          className="w-12 h-12 rounded-full"
          alt=""
        />{" "}
        <span className="text-xl text-gray-700 font-semibold">MG.</span>
      </div>
      <div className="grid grid-flow-row gap-10 mt-20">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-md p-1 a w-full">
          <i class={`${icons[0].iconName} text-white text-xl`}></i>
        </div>
        {icons.map((icon) => {
          return (
            <div className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center">
              <i class={`${icon.iconName} text-gray-400 text-xl`}></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
