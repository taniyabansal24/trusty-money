import React from "react";

const ExcelTable = () => {
  return (
    <div className="relative mx-auto mt-8 w-full max-w-[880px] sm:mt-12">
      <div className="hero-bg-grid"></div>
      <div className="absolute left-1/2 top-1/2 -z-10 h-[110%] w-[100%] -translate-x-1/2 -translate-y-1/2 transform-gpu rounded-3xl bg-gradient-to-r from-blue-600/30 via-50% to-indigo-600/10 to-90% opacity-60 blur-xl"></div>

      <div
        className="mx-auto overflow-hidden rounded-lg border border-[#E4E8EF] bg-white"
        style={{
          boxShadow:
            "rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px",
          "--factor": "1",
        }}
      >
        {/* Header */}
        <div className="flex h-14 items-center justify-between border-b border-[#E4E8EF] px-4">
          <p className="text-base font-bold">Total Invoicing</p>
          <div
            className="flex h-9 min-w-[160px] items-center justify-center rounded-lg bg-[#073F9E] text-white font-medium cursor-pointer transition-all duration-200 hover:bg-[#06388c] active:scale-95"
            style={{
              boxShadow: "rgba(20, 23, 28, 0.08) 0px 2px 2px 0px",
            }}
          >
            Create new invoice
          </div>
        </div>

        {/* Table Container */}
        <div className="w-full max-w-full overflow-auto">
          <table className="w-full border-[#E4E8EF] lg:table-fixed">
            <thead className="border-b">
              <tr className="border-b last:border-b-0 group">
                <th className="sticky left-0 h-10 whitespace-nowrap border-r bg-white px-4 text-left text-[11px] uppercase text-[#8B8B8E] shadow-[inset_-2px_1px_0px_-1px_#E4E8EF]">
                  Customer
                </th>
                <th className="h-10 whitespace-nowrap border-r bg-white px-4 text-left text-[11px] uppercase text-[#8B8B8E]">
                  Jun 23
                </th>
                <th className="h-10 whitespace-nowrap border-r bg-white px-4 text-left text-[11px] uppercase text-[#8B8B8E]">
                  Jul 23
                </th>
                <th className="h-10 whitespace-nowrap border-r bg-white px-4 text-left text-[11px] uppercase text-[#8B8B8E]">
                  Aug 23
                </th>
                <th className="h-10 whitespace-nowrap border-r bg-white px-4 text-left text-[11px] uppercase text-[#8B8B8E]">
                  Sep 23
                </th>
                <th className="h-10 whitespace-nowrap border-r bg-white px-4 text-left text-[11px] uppercase text-[#8B8B8E]">
                  Oct 23
                </th>
                <th className="h-10 whitespace-nowrap border-r bg-white px-4 text-left text-[11px] uppercase text-[#8B8B8E]">
                  Nov 23
                </th>
                <th className="h-10 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-left text-[11px] uppercase text-black">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Ramp Row */}
              <tr className="border-b last:border-b-0 group">
                <td className="sticky left-0 h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs font-medium text-[#716FFF] shadow-[inset_-2px_1px_0px_-1px_#E4E8EF]">
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <path
                        fill="#010202"
                        d="M13.854 2.271c.15.076.226.226.376.302l2.166 2.165c-.076 2.165-.81 4.16-1.864 6.025a14.28 14.28 0 0 1-8.115 6.402c-.96.3-2.015.527-2.975.527l-2.166-2.165c-.15-.151-.3-.226-.376-.452 3.125-.226 6.176-1.563 8.397-3.728 1.563-1.488 2.9-3.352 3.653-5.348.527-1.11.829-2.39.904-3.728M10.201 16.939a16 16 0 0 0 2.165-1.789h4.01l2.524 2.523c-.527.075-1.11 0-1.638 0h-8.19c.32-.226.771-.452 1.13-.734"
                      ></path>
                    </svg>
                    Ramp
                  </div>
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £3,300
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £283.80
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £246.00
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £2,339.70
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £2,978.40
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  <div className="flex w-full items-center justify-between gap-x-2">
                    <span>£800</span>
                    <svg
                      className="flex-shrink-0"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#E01E5A"
                        d="M6.00462 0.93749C6.00462 0.688853 5.90585 0.450399 5.73004 0.274586C5.55423 0.0987736 5.31578 5.38297e-07 5.06714 5.1656e-07C4.8185 4.94824e-07 4.58005 0.0987735 4.40424 0.274586C4.22843 0.450399 4.12966 0.688853 4.12966 0.93749L4.12966 6.67492L1.6922 4.04995C1.52312 3.86762 1.28854 3.75991 1.04006 3.75054C0.79158 3.74116 0.549552 3.83088 0.367218 3.99995C0.184885 4.16902 0.0771823 4.40361 0.0678058 4.65209C0.0584292 4.90057 0.148145 5.1426 0.317218 5.32494L4.37965 9.69988C4.46741 9.79454 4.57377 9.87006 4.69207 9.9217C4.81037 9.97334 4.93806 10 5.06714 10C5.19622 10 5.32391 9.97334 5.44221 9.9217C5.56051 9.87006 5.66687 9.79454 5.75463 9.69988L9.81706 5.32494C9.90078 5.23465 9.96589 5.12877 10.0087 5.01332C10.0515 4.89787 10.0711 4.77513 10.0665 4.65209C10.0618 4.52905 10.033 4.40814 9.98163 4.29624C9.93025 4.18435 9.85734 4.08367 9.76706 3.99995C9.67678 3.91624 9.57089 3.85112 9.45544 3.80833C9.34 3.76553 9.21725 3.7459 9.09422 3.75054C8.97118 3.75518 8.85026 3.78401 8.73837 3.83539C8.62648 3.88676 8.5258 3.95967 8.44208 4.04995L6.00462 6.67492L6.00462 0.93749Z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £45,297.90
                </td>
              </tr>

              {/* Open AI Row */}
              <tr className="border-b last:border-b-0 group">
                <td className="sticky left-0 h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs font-medium text-[#716FFF] shadow-[inset_-2px_1px_0px_-1px_#E4E8EF]">
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <g clipPath="url(#open-ai_svg__a)">
                        <path
                          fill="#000"
                          d="M18.434 8.186a4.98 4.98 0 0 0-.428-4.093 5.04 5.04 0 0 0-5.428-2.417A4.98 4.98 0 0 0 8.82 0 5.04 5.04 0 0 0 4.013 3.49 4.99 4.99 0 0 0 .68 5.906a5.04 5.04 0 0 0 .62 5.909 4.98 4.98 0 0 0 .428 4.092 5.04 5.04 0 0 0 5.427 2.418A4.98 4.98 0 0 0 10.915 20a5.04 5.04 0 0 0 4.809-3.491 4.99 4.99 0 0 0 3.332-2.417 5.04 5.04 0 0 0-.622-5.907m-7.518 10.507a3.74 3.74 0 0 1-2.4-.867c.031-.017.084-.046.119-.067l3.982-2.3a.65.65 0 0 0 .328-.567V9.277l1.683.972q.028.015.033.046v4.65a3.753 3.753 0 0 1-3.745 3.748m-8.053-3.44a3.73 3.73 0 0 1-.447-2.51l.118.07 3.983 2.3a.65.65 0 0 0 .654 0l4.863-2.808v1.944a.06.06 0 0 1-.024.052l-4.026 2.324a3.75 3.75 0 0 1-5.12-1.371M1.815 6.56a3.74 3.74 0 0 1 1.95-1.643l-.001.138v4.6a.65.65 0 0 0 .327.567l4.862 2.807L7.27 14a.06.06 0 0 1-.057.005L3.186 11.68a3.753 3.753 0 0 1-1.372-5.118zm13.83 3.218-4.863-2.807L12.465 6a.06.06 0 0 1 .057-.005l4.027 2.324a3.75 3.75 0 0 1-.58 6.764v-4.738a.65.65 0 0 0-.324-.567m1.674-2.52-.118-.072-3.982-2.3a.65.65 0 0 0-.655 0L7.702 7.694V5.75a.06.06 0 0 1 .024-.052l4.026-2.322a3.748 3.748 0 0 1 5.566 3.881zM6.787 10.721 5.103 9.75a.06.06 0 0 1-.032-.047V5.054a3.749 3.749 0 0 1 6.147-2.879l-.118.067-3.983 2.3a.65.65 0 0 0-.327.566l-.003 5.612zm.915-1.972L9.867 7.5l2.166 1.25v2.5L9.867 12.5l-2.165-1.25z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="open-ai_svg__a">
                          <path fill="#fff" d="M0 0h20v20H0z"></path>
                        </clipPath>
                      </defs>
                    </svg>
                    Open AI
                  </div>
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs"></td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £18,220.22
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £18,236.70
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £18,659.14
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £65,999.16
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  <div className="flex w-full items-center justify-between gap-x-2">
                    <span>£35,421.50</span>
                    <svg
                      className="flex-shrink-0"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#E01E5A"
                        d="M6.00462 0.93749C6.00462 0.688853 5.90585 0.450399 5.73004 0.274586C5.55423 0.0987736 5.31578 5.38297e-07 5.06714 5.1656e-07C4.8185 4.94824e-07 4.58005 0.0987735 4.40424 0.274586C4.22843 0.450399 4.12966 0.688853 4.12966 0.93749L4.12966 6.67492L1.6922 4.04995C1.52312 3.86762 1.28854 3.75991 1.04006 3.75054C0.79158 3.74116 0.549552 3.83088 0.367218 3.99995C0.184885 4.16902 0.0771823 4.40361 0.0678058 4.65209C0.0584292 4.90057 0.148145 5.1426 0.317218 5.32494L4.37965 9.69988C4.46741 9.79454 4.57377 9.87006 4.69207 9.9217C4.81037 9.97334 4.93806 10 5.06714 10C5.19622 10 5.32391 9.97334 5.44221 9.9217C5.56051 9.87006 5.66687 9.79454 5.75463 9.69988L9.81706 5.32494C9.90078 5.23465 9.96589 5.12877 10.0087 5.01332C10.0515 4.89787 10.0711 4.77513 10.0665 4.65209C10.0618 4.52905 10.033 4.40814 9.98163 4.29624C9.93025 4.18435 9.85734 4.08367 9.76706 3.99995C9.67678 3.91624 9.57089 3.85112 9.45544 3.80833C9.34 3.76553 9.21725 3.7459 9.09422 3.75054C8.97118 3.75518 8.85026 3.78401 8.73837 3.83539C8.62648 3.88676 8.5258 3.95967 8.44208 4.04995L6.00462 6.67492L6.00462 0.93749Z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £156,536.72
                </td>
              </tr>

              {/* Figma Row */}
              <tr className="border-b last:border-b-0 group">
                <td className="sticky left-0 h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs font-medium text-[#716FFF] shadow-[inset_-2px_1px_0px_-1px_#E4E8EF]">
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <path
                        fill="#0ACF83"
                        d="M7 19c1.656 0 3-1.344 3-3v-3H7a3.001 3.001 0 0 0 0 6"
                      ></path>
                      <path
                        fill="#A259FF"
                        d="M4 10c0-1.656 1.344-3 3-3h3v6H7c-1.656 0-3-1.344-3-3"
                      ></path>
                      <path
                        fill="#F24E1E"
                        d="M4 4c0-1.656 1.344-3 3-3h3v6H7C5.344 7 4 5.656 4 4"
                      ></path>
                      <path
                        fill="#FF7262"
                        d="M10 1h3a3.001 3.001 0 0 1 0 6h-3z"
                      ></path>
                      <path
                        fill="#1ABCFE"
                        d="M16 10a3.001 3.001 0 0 1-6 0 3.001 3.001 0 0 1 6 0"
                      ></path>
                    </svg>
                    Figma
                  </div>
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs"></td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs"></td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs"></td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £1,800.00
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £1,747.20
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  <div className="flex w-full items-center justify-between gap-x-2">
                    <span>£2,583.00</span>
                    <svg
                      className="flex-shrink-0 rotate-180"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#51A26C"
                        d="M6.00462 0.93749C6.00462 0.688853 5.90585 0.450399 5.73004 0.274586C5.55423 0.0987736 5.31578 5.38297e-07 5.06714 5.1656e-07C4.8185 4.94824e-07 4.58005 0.0987735 4.40424 0.274586C4.22843 0.450399 4.12966 0.688853 4.12966 0.93749L4.12966 6.67492L1.6922 4.04995C1.52312 3.86762 1.28854 3.75991 1.04006 3.75054C0.79158 3.74116 0.549552 3.83088 0.367218 3.99995C0.184885 4.16902 0.0771823 4.40361 0.0678058 4.65209C0.0584292 4.90057 0.148145 5.1426 0.317218 5.32494L4.37965 9.69988C4.46741 9.79454 4.57377 9.87006 4.69207 9.9217C4.81037 9.97334 4.93806 10 5.06714 10C5.19622 10 5.32391 9.97334 5.44221 9.9217C5.56051 9.87006 5.66687 9.79454 5.75463 9.69988L9.81706 5.32494C9.90078 5.23465 9.96589 5.12877 10.0087 5.01332C10.0515 4.89787 10.0711 4.77513 10.0665 4.65209C10.0618 4.52905 10.033 4.40814 9.98163 4.29624C9.93025 4.18435 9.85734 4.08367 9.76706 3.99995C9.67678 3.91624 9.57089 3.85112 9.45544 3.80833C9.34 3.76553 9.21725 3.7459 9.09422 3.75054C8.97118 3.75518 8.85026 3.78401 8.73837 3.83539C8.62648 3.88676 8.5258 3.95967 8.44208 4.04995L6.00462 6.67492L6.00462 0.93749Z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £6,130.20
                </td>
              </tr>

              {/* Intercom Row */}
              <tr className="border-b last:border-b-0 group">
                <td className="sticky left-0 h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs font-medium text-[#716FFF] shadow-[inset_-2px_1px_0px_-1px_#E4E8EF]">
                  <div className="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <path
                        fill="#1F8DED"
                        d="M16.6 10.896a.6.6 0 0 1-1.2 0V5.5a.6.6 0 0 1 1.2 0zm-.21 3.756c-.092.08-2.315 1.944-6.39 1.944s-6.298-1.865-6.39-1.944a.6.6 0 0 1 .78-.912c.034.03 2.02 1.656 5.61 1.656 3.636 0 5.59-1.639 5.61-1.655a.6.6 0 0 1 .78.91M3.4 5.5a.6.6 0 0 1 1.2 0v5.396a.6.6 0 0 1-1.2 0zm3-1.2a.6.6 0 0 1 1.2 0v8.016a.6.6 0 0 1-1.2 0zm3-.304a.6.6 0 1 1 1.2 0v8.7a.6.6 0 0 1-1.2 0zm3 .304a.6.6 0 0 1 1.2 0v8.016a.6.6 0 0 1-1.2 0zM16.75 1H3.25A2.25 2.25 0 0 0 1 3.25v13.5A2.25 2.25 0 0 0 3.25 19h13.5A2.25 2.25 0 0 0 19 16.75V3.25A2.25 2.25 0 0 0 16.75 1"
                      ></path>
                    </svg>
                    Intercom
                  </div>
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs"></td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £387.00
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £1,120.58
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £1,124.64
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  £5,519.60
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-white px-4 text-xs">
                  <div className="flex w-full items-center justify-between gap-x-2">
                    <span>£2,304.30</span>
                    <svg
                      className="flex-shrink-0"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#E01E5A"
                        d="M6.00462 0.93749C6.00462 0.688853 5.90585 0.450399 5.73004 0.274586C5.55423 0.0987736 5.31578 5.38297e-07 5.06714 5.1656e-07C4.8185 4.94824e-07 4.58005 0.0987735 4.40424 0.274586C4.22843 0.450399 4.12966 0.688853 4.12966 0.93749L4.12966 6.67492L1.6922 4.04995C1.52312 3.86762 1.28854 3.75991 1.04006 3.75054C0.79158 3.74116 0.549552 3.83088 0.367218 3.99995C0.184885 4.16902 0.0771823 4.40361 0.0678058 4.65209C0.0584292 4.90057 0.148145 5.1426 0.317218 5.32494L4.37965 9.69988C4.46741 9.79454 4.57377 9.87006 4.69207 9.9217C4.81037 9.97334 4.93806 10 5.06714 10C5.19622 10 5.32391 9.97334 5.44221 9.9217C5.56051 9.87006 5.66687 9.79454 5.75463 9.69988L9.81706 5.32494C9.90078 5.23465 9.96589 5.12877 10.0087 5.01332C10.0515 4.89787 10.0711 4.77513 10.0665 4.65209C10.0618 4.52905 10.033 4.40814 9.98163 4.29624C9.93025 4.18435 9.85734 4.08367 9.76706 3.99995C9.67678 3.91624 9.57089 3.85112 9.45544 3.80833C9.34 3.76553 9.21725 3.7459 9.09422 3.75054C8.97118 3.75518 8.85026 3.78401 8.73837 3.83539C8.62648 3.88676 8.5258 3.95967 8.44208 4.04995L6.00462 6.67492L6.00462 0.93749Z"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £10,456.12
                </td>
              </tr>

              {/* Total Row */}
              <tr className="border-b last:border-b-0 group">
                <td className="sticky left-0 h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium text-black shadow-[inset_-2px_1px_0px_-1px_#E4E8EF]">
                  Total
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £3,300
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £18,891.02
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £19,603.28
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £23,923.48
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £76,244.36
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £40,308.80
                </td>
                <td className="h-10 min-w-0 whitespace-nowrap border-r bg-[#FBFBFB] px-4 text-xs font-medium">
                  £218,420.94
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExcelTable;
