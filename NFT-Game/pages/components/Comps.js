import React, { useState, useEffect } from "react";
import { Modal } from "flowbite-react";
import data from "../data.json";
import { useRouter } from "next/router";

const TestModal = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  console.log("Your Data -", data);
  useEffect(() => {
    if (typeof document !== "undefined") {
      // code to run in the browser
    }
  }, []);
  return (
    <>
      {/* <Modal show={showModal} onClose={() => setShowModal((prev) => !prev)}>
        <Modal.Header>
          {" "}
          <h1 className="text-purple-700">Select Any Game to Play</h1>{" "}
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="grid grid-cols-3 gap-5">
              {data.results.map((res) => {
                return (
                  <div
                    onClick={() => router.push("/components/GamePage")}
                    className="border-2 cursor-pointer rounded-lg border-gray-200 p-2"
                  >
                    <img
                      className="w-96 hover:scale-90 rounded-md transition duration-300 ease-in-out h-60 object-fit object-cover"
                      src={res.image_url}
                      alt={res.class}
                    />
                    <div className="mt-2">
                      <p className="font-semibold">Price: {res.price}</p>
                      <div className="flex justify-between">
                        <small className="font-semibold">
                          Name: {res.name}
                        </small>
                        <small className="font-semibold">
                          Players: {res.players}
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="bg-gray-300 w-full p-3 rounded-md">Cancel</button>
        </Modal.Footer>
      </Modal>
      <button
        onClick={() => setShowModal((prev) => !prev)}
        className="bg-purple-600 px-5 hover:bg-purple-700 transition duration-300 ease-in-out  rounded-full p-2 text-black"
      >
        <span className="text-white">Play Nfts</span>
      </button> */}

      <button
        data-modal-target="staticModal"
        data-modal-toggle="staticModal"
        className="block text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Play Nfts
      </button>

      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h1 className="text-purple-700">Select Any Game to Play</h1>{" "}
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="staticModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <div className="grid grid-cols-3 gap-5">
                  {data.results.map((res) => {
                    return (
                      <div
                        onClick={() => router.push("/components/GamePage")}
                        className="border-2 cursor-pointer rounded-lg border-gray-200 p-2"
                      >
                        <img
                          className="w-96 hover:scale-90 rounded-md transition duration-300 ease-in-out h-60 object-fit object-cover"
                          src={res.image_url}
                          alt={res.class}
                        />
                        <div className="mt-2">
                          <p className="font-semibold">Price: {res.price}</p>
                          <div className="flex justify-between">
                            <small className="font-semibold">
                              Name: {res.name}
                            </small>
                            <small className="font-semibold">
                              Players: {res.players}
                            </small>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button className="bg-gray-300 w-full p-3 rounded-md">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestModal;
