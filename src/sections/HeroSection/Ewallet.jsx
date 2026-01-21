import React from "react";
import IN from "country-flag-icons/react/3x2/IN"; // India
import US from "country-flag-icons/react/3x2/US"; // USA

const Ewallet = () => {
  return (
    <div className="w-full h-full relative">
      {/* Main invoice container */}
      <div className="absolute left-[3px] top-[4px] w-full h-full bg-white border border-[#E5E7EB] rounded-[28px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden px-8 py-2">
        {/* Title - E-Wallet */}
        <div className="flex items-center gap-40 mb-8">
          <div className="flex items-center space-x-3">
            {/* Currency dots indicator */}
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-[#00C950] rounded-full"></div>
              <div className="w-2 h-2 bg-[#F0B100] rounded-full"></div>
              <div className="w-2 h-2 bg-[#FB2C36] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-xl text-[#0A0A0A]">E-Wallet</span>

            {/* E-Wallet Icon */}
            <div className="w-6 h-6">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 3.625C0 2.66359 0.381919 1.74156 1.06174 1.06174C1.74156 0.381919 2.66359 0 3.625 0H20.5417C21.5031 0 22.4251 0.381919 23.1049 1.06174C23.7847 1.74156 24.1667 2.66359 24.1667 3.625V15.7083C24.1667 16.6697 23.7847 17.5918 23.1049 18.2716C22.4251 18.9514 21.5031 19.3333 20.5417 19.3333H3.625C2.66359 19.3333 1.74156 18.9514 1.06174 18.2716C0.381919 17.5918 0 16.6697 0 15.7083V3.625ZM3.625 3.625C3.30453 3.625 2.99719 3.75231 2.77058 3.97891C2.54397 4.20552 2.41667 4.51286 2.41667 4.83333C2.41667 5.1538 2.54397 5.46115 2.77058 5.68775C2.99719 5.91436 3.30453 6.04167 3.625 6.04167H20.5417C20.8621 6.04167 21.1695 5.91436 21.3961 5.68775C21.6227 5.46115 21.75 5.1538 21.75 4.83333C21.75 4.51286 21.6227 4.20552 21.3961 3.97891C21.1695 3.75231 20.8621 3.625 20.5417 3.625H3.625ZM2.41667 10.875C2.41667 10.5545 2.54397 10.2472 2.77058 10.0206C2.99719 9.79397 3.30453 9.66667 3.625 9.66667H8.45833C8.49217 9.66667 8.526 9.66828 8.55983 9.6715C8.82675 9.64815 9.09385 9.71418 9.31914 9.8592C9.54444 10.0042 9.71514 10.22 9.80442 10.4726C9.97136 10.9436 10.2801 11.3512 10.6882 11.6395C11.0963 11.9278 11.5837 12.0826 12.0833 12.0826C12.583 12.0826 13.0704 11.9278 13.4785 11.6395C13.8866 11.3512 14.1953 10.9436 14.3622 10.4726C14.4515 10.22 14.6222 10.0042 14.8475 9.8592C15.0728 9.71418 15.3399 9.64815 15.6068 9.6715C15.6399 9.66747 15.6737 9.66586 15.7083 9.66667H20.5417C20.8621 9.66667 21.1695 9.79397 21.3961 10.0206C21.6227 10.2472 21.75 10.5545 21.75 10.875C21.75 11.1955 21.6227 11.5028 21.3961 11.7294C21.1695 11.956 20.8621 12.0833 20.5417 12.0833H16.269C15.8448 12.8181 15.2347 13.4282 14.4999 13.8524C13.7652 14.2766 12.9317 14.5 12.0833 14.5C11.2347 14.5002 10.401 14.277 9.66605 13.8527C8.93108 13.4285 8.32076 12.8183 7.89646 12.0833H3.625C3.30453 12.0833 2.99719 11.956 2.77058 11.7294C2.54397 11.5028 2.41667 11.1955 2.41667 10.875Z"
                  fill="#073F9E"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* "You send" section */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="mb-1">
                <span className="font-['DM_Sans'] text-sm text-[#4F4F4F]">
                  You send
                </span>
              </div>
              <div className="relative">
                <span className="absolute font-['DM_Sans'] font-semibold text-lg text-[#073F9E]">
                  $
                </span>
                <div className="ml-6">
                  <input
                    type="text"
                    className="font-['DM_Sans'] text-lg text-[#073F9E] bg-transparent outline-none w-full"
                    placeholder="0.00"
                    defaultValue="4,250.00"
                  />
                </div>
              </div>
            </div>

            {/* USD currency selector */}
            <div className="relative w-32 h-8">
              <div className="absolute left-0 top-2 w-5 h-6">
                <US
                  title="United States"
                  style={{ width: "24px", height: "16px" }}
                />
                ,
              </div>
              <div className="absolute left-6 top-0 w-24 h-8 bg-white shadow-sm rounded-lg">
                <div className="flex items-center justify-between px-2 h-full">
                  <span className="font-['DM_Sans'] text-sm text-black">
                    USD
                  </span>
                  <div className="flex items-center">
                    <div className="w-[0.5px] h-5 bg-gray-300"></div>
                    <div className="w-4 h-4 ml-1">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="#073F9E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "Recipient gets" section */}
        <div className="mb-10">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="mb-1">
                <span className="font-['DM_Sans'] text-sm text-[#4F4F4F]">
                  Recipient gets
                </span>
              </div>
              <div className="relative">
                <span className="absolute font-['DM_Sans'] font-semibold text-lg text-[#073F9E]">
                  ₹
                </span>
                <div className="ml-6">
                  <input
                    type="text"
                    className="font-['DM_Sans'] text-lg text-[#073F9E] bg-transparent outline-none w-full"
                    placeholder="0.00"
                    defaultValue="501,500.00"
                  />
                </div>
              </div>
            </div>

            {/* INR currency selector */}
            <div className="relative w-28 h-8">
              <div className="absolute left-0 top-2 w-5 h-6">
                <IN
                  title="United States"
                  style={{ width: "24px", height: "16px" }}
                />
                ,
              </div>
              <div className="absolute left-6 top-0 w-20 h-8 bg-white shadow-sm rounded-lg">
                <div className="flex items-center justify-between px-2 h-full">
                  <span className="font-['DM_Sans'] text-sm text-black">
                    INR
                  </span>
                  <div className="flex items-center">
                    <div className="w-[0.5px] h-5 bg-gray-300"></div>
                    <div className="w-4 h-4 ml-1">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="#073F9E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Details Container */}
        <div className="mb-8">
          {/* Heading */}
          <div className="mb-6">
            <span className="font-['Microsoft_Sans_Serif'] text-lg text-[#0A0A0A]">
              Your Virtual Transaction Details
            </span>
          </div>

          {/* Amount */}
          <div className="flex justify-between items-center pb-3 border-b border-[#333333] mb-4">
            <span className="font-['Microsoft_Sans_Serif'] text-base text-[#4B4B4B]">
              Amount
            </span>
            <span className="font-['Microsoft_Sans_Serif'] text-sm text-[#0A0A0A]">
              $4,250.00
            </span>
          </div>

          {/* Fee */}
          <div className="flex justify-between items-center pb-3 border-b border-[#333333] mb-4">
            <span className="font-['Microsoft_Sans_Serif'] text-base text-[#4B4B4B]">
              Fee
            </span>
            <span className="font-['Microsoft_Sans_Serif'] text-sm text-[#717182]">
              $12.50
            </span>
          </div>

          {/* Exchange Rate */}
          <div className="flex justify-between items-center pb-3 border-b border-[#333333] mb-4">
            <span className="font-['Microsoft_Sans_Serif'] text-base text-[#4B4B4B]">
              Exchange Rate
            </span>
            <span className="font-['Microsoft_Sans_Serif'] text-sm text-[#717182]">
              1.18
            </span>
          </div>

          {/* Status */}
          <div className="flex justify-between items-center">
            <span className="font-['Microsoft_Sans_Serif'] text-base text-[#4B4B4B]">
              Status
            </span>
            <span className="font-['Microsoft_Sans_Serif'] text-sm text-[#073F9E]">
              Completed
            </span>
          </div>
        </div>

        {/* All type of Currency section */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-['Microsoft_Sans_Serif'] text-base text-[#0A0A0A]">
              All type of Currency :
            </span>

            {/* Currency icons */}
            <div className="flex items-center space-x-3">
              {/* Euro icon */}
              <div className="w-5 h-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 21C13.0333 21 11.2833 20.4417 9.75 19.325C8.21667 18.2083 7.13333 16.7667 6.5 15H3V13H6.05C6 12.6 5.97933 12.2293 5.988 11.888C5.99667 11.5467 6.01733 11.2507 6.05 11H3V9H6.5C7.13333 7.23333 8.21667 5.79167 9.75 4.675C11.2833 3.55833 13.0333 3 15 3C16.15 3 17.2377 3.20433 18.263 3.613C19.2883 4.02167 20.2007 4.584 21 5.3L19.575 6.7C18.9583 6.16667 18.2627 5.75 17.488 5.45C16.7133 5.15 15.884 5 15 5C13.5833 5 12.3167 5.371 11.2 6.113C10.0833 6.855 9.24167 7.81733 8.675 9H15V11H8.075C8.00833 11.45 7.98333 11.846 8 12.188C8.01667 12.53 8.04167 12.8007 8.075 13H15V15H8.675C9.24167 16.1833 10.0833 17.146 11.2 17.888C12.3167 18.63 13.5833 19.0007 15 19C15.8833 19 16.7127 18.85 17.488 18.55C18.2633 18.25 18.959 17.8333 19.575 17.3L21 18.7C20.2 19.4167 19.2873 19.9793 18.262 20.388C17.2367 20.7967 16.1493 21.0007 15 21Z"
                    fill="#073F9E"
                  />
                </svg>
              </div>

              {/* USD icon */}
              <div className="w-5 h-5">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.84375 19.6875V18.1937C6.58424 18.0059 4.604 16.3267 4.59375 13.7812H7.54688C7.61947 14.8616 8.52551 15.6864 9.84375 15.832V11.8125L8.74576 11.5254C6.24381 10.9438 4.90506 9.49963 4.90506 7.33852C4.90506 4.79104 6.72984 3.12047 9.84375 2.87109V1.3125H11.1562V2.87109C14.3304 3.12949 16.0371 4.82918 16.0781 7.21875H13.125C13.0938 6.23191 12.4757 5.43908 11.1562 5.33203V9.10547L12.4204 9.40406C15.0778 9.98566 16.4062 11.3613 16.4062 13.6172C16.4062 16.2561 14.6122 17.9599 11.1562 18.183V19.6875H9.84375ZM9.84375 8.85938V5.33203C8.71213 5.39437 7.90494 6.08959 7.90494 7.07643C7.90494 7.99107 8.57719 8.58908 9.84375 8.85938ZM11.1562 12.0586V15.832C12.721 15.7689 13.4687 15.056 13.4687 13.9547C13.4687 12.9466 12.721 12.2678 11.1562 12.0586Z"
                    fill="#073F9E"
                  />
                </svg>
              </div>

              {/* Rupee icon */}
              <div className="w-5 h-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3H18L17 5H13.74C14.22 5.58 14.58 6.26 14.79 7H18L17 9H15C14.8757 10.2466 14.3341 11.4147 13.4628 12.315C12.5916 13.2153 11.4419 13.7949 10.2 13.96V14H9.5L15.5 21H13L7 14V12H9.5C11.26 12 12.72 10.7 12.96 9H7L8 7H12.66C12.1 5.82 10.9 5 9.5 5H7L8 3Z"
                    fill="#073F9E"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ewallet;
