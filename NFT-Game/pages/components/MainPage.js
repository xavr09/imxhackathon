import React from "react";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import TestMod from "./Comps.js";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function Profile() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div className="text-white flex items-center justify-between w-full">
        <small className="font-semibold">Connected to: {address}</small>
        <button
          onClick={() => disconnect()}
          className="bg-red-500 text-white px-3 p-2 font-semibold rounded-full"
        >
          Disconnect
        </button>
      </div>
    );
  return (
    <button
      className="bg-gradient-to-tr mt-2 from-purple-500 to-purple-700 p-2 px-3 rounded-full"
      onClick={() => connect()}
    >
      Connect Wallet
    </button>
  );
}

const royals = [
  {
    imgUrl:
      "https://tse1.mm.bing.net/th?id=OIP.g9MbjSo-mwjz1Odgk1qYhAHaHa&pid=Api&P=0",
    name: "Crystal NFT",
    rating: "55",
  },
  {
    imgUrl:
      "https://i0.wp.com/blog.seanbonner.com/wp-content/uploads/2021/07/burned-ape.png?w=1167&ssl=1",
    name: "Crystal NFT",
    rating: "45",
  },
  {
    imgUrl:
      "https://publish.one37pm.net/wp-content/uploads/2021/02/punks.png?fit=600%2C600",
    name: "Crystal NFT",
    rating: "55",
  },
  {
    imgUrl:
      "https://tse2.explicit.bing.net/th?id=OIP.htissmvYlJOO-Mx9kbDa9AHaHV&pid=Api&P=0",
    name: "Crystal NFT",
    rating: "58",
  },
];

function Connector() {
  return (
    <>
      <div>
        <WagmiConfig client={client}>
          <Profile />
        </WagmiConfig>
      </div>
    </>
  );
}
const MainPage = () => {
  return (
    <div className="p-5">
      <div className="bg-white w-80 p-2 rounded-md">
        <i class="bx bx-search-alt-2"></i>
        <input
          className="border-none outline-none"
          type="text"
          placeholder="Search..."
        />
      </div>
      {/* Main Bg */}
      <div className='h-60 mt-10 w-full bg-center relative rounded-lg bg-[url("https://t4.ftcdn.net/jpg/05/14/21/43/360_F_514214339_3KDGkF1W1ZZPE4YaymnfLyd4c0PEGO2P.jpg")]'>
        <div className="p-5 flex grid grid-cols-2">
          <div>
            <small className="text-white">
              Start Your Nft Game Journey Here
            </small>
          </div>
          <div className="space-x-3 flex justify-end">
            <button className="bg-white px-5 hover:bg-gray-200 transition duration-300 ease-out rounded-full p-2 text-black">
              My Nfts
            </button>
            <TestMod />
          </div>
        </div>

        <div className="bg-black/30 p-3 absolute w-full bottom-0">
          <div className="text-white">
            <h1 className="text-2xl">Name: Jokoyoski Makanga</h1>
            <div>
              {/* <Connector /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Weekly Report */}
      <div className="mt-10">
        <div>
          <h1 className="font-semibold text-xl mt-5 mb-3">Weekely Report</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white rounded-lg flex flex-col p-3">
              <h1>10:48</h1>
              <h1>Oothers</h1>
            </div>
            <div className="bg-white rounded-md flex flex-col p-3">
              <h1>10:59</h1>
              <h1>Graph</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl mt-5 mb-3">NFT Artwork(s)</h1>
          <div className="grid gap-5 grid-cols-4">
            {royals.map((royal, key) => {
              return (
                <div key={key} className="bg-white rounded-md">
                  <img
                    src={royal.imgUrl}
                    className="h-54 rounded-lg "
                    alt="nft_img"
                  />
                  <div className="p-5">
                    <h1 className="font-semibold">{royal.name}</h1>
                    <div className="flex mt-3 justify-between">
                      <div className="bg-black flex justify-center items-center rounded-full p-2">
                        <i className="bx bxs-rocket text-white"></i>
                      </div>
                      <div className="flex items-center">
                        <i className="bx bxs-heart"></i>
                        <span>{royal.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
