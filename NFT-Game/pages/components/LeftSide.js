import React from "react";

const LeftSide = () => {
  const activities = [
    "Crystal Algorithm",
    "Crystal Algorithm",
    "Crystal Algorithm",
    "Crystal Algorithm",
  ];
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <i className="bx bx-bell text-2xl"></i>
        <div className="flex gap-2">
          <img
            src="http://www.playtoearn.online/wp-content/uploads/2021/10/Clone-X-NFT-avatar.png"
            className="h-10 w-10 rounded-full"
            alt="Nft-Image"
          />
          <i class="bx bx-chevron-down text-2xl"></i>
        </div>
      </div>
      <div className="flex items-center mt-10 justify-between">
        <h1 className="text-xl font-semibold">Recent Activities</h1>
        <small>See All</small>
      </div>
      {/* All Recents */}
      <div>
        {activities.map((x) => {
          return (
            <div className="bg-gray-100 flex gap-5 rounded-md mt-4 p-2">
              <div className="bg-gradient-to-r flex h-10 w-10 justify-center items-center rounded-full  from-purple-500 to-purple-700">
                <i class="bx bxs-rocket text-white"></i>
              </div>
              <div>
                <h1 className="font-semibold">Crystal Algorithm</h1>
                <small>crystal</small>
              </div>
              <small>Feb 11</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftSide;
