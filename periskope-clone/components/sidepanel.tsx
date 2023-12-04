import Image from "next/image";

export default function Sidepanel() {
  return (
    <nav
      id="sidenav-7"
      className="fixed right-0 top-0 z-[1035] h-screen w-96 translate-x-full overflow-hidden bg-gray-50 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:-translate-x-0 mt-14"
      data-te-sidenav-init
      data-te-sidenav-hidden="false"
      data-te-sidenav-right="true"
    >
      <div className="flex flex-wrap py-3 px-5 justify-between pt-6">
        <div className="flex flex-wrap flex-row items-center text-gray-700 font-semibold fontsm">
          <Image
            src="/novabenefits.svg"
            width={35}
            height={35}
            alt="logo"
            className="mr-2 rounded-full p-2 bg-slate-800"
          />
          <span>NovaBenefits Periskope</span>
        </div>
        <button className="flex flex-wrap flex-row items-center text-xs text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
              clipRule="evenodd"
            />
          </svg>
          Refresh
        </button>
      </div>

      <ul className="flex flex-wrap text-sm font-medium text-center border-b px-4 text-gray-700">
        <li className="me-2">
          <a
            href="#"
            aria-current="page"
            className="inline-block p-4 active border-b-2 border-green-700 text-green-700"
          >
            Overview
          </a>
        </li>
        <li className="me-2">
          <a href="#" className="inline-block p-4">
            Members
          </a>
        </li>
        <li className="me-2">
          <a href="#" className="inline-block p-4">
            Logs
          </a>
        </li>
      </ul>
      <div className="flex flex-wrap flex-row border-b px-4 justify-between">
        <div>
          <ul>
            <li className="py-3 text-sm text-gray-400 font-medium">
              Last Active
            </li>
            <li className="py-3 text-sm text-gray-400 font-medium">
              Disappearing Messages
            </li>
            <li className="py-3 text-sm text-gray-400 font-medium">
              Send Message Permission
            </li>
            <li className="py-3 text-sm text-gray-400 font-medium">Project</li>
          </ul>
        </div>
        <div className="w-1/3">
          <ul>
            <li className="py-3 text-sm text-gray-700 font-medium">
              Yesterday
            </li>
            <li className="py-3 text-sm text-gray-700 font-medium">OFF</li>
            <li className="py-3 text-sm text-gray-700 font-medium">ALL</li>
            <li className="py-3 text-sm font-medium">
              <span className="text-orange-700 bg-orange-100 rounded-xl py-1 px-2 text-sm">
                #Clients
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-4">
      <button className="flex flex-wrap text-gray-500 items-center mb-3 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
          <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
        </svg>
        Export Chat
      </button>
      <button className="flex flex-wrap text-red-500 items-center text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 mr-2"
        >
          <path
            fillRule="evenodd"
            d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
            clipRule="evenodd"
          />
        </svg>
        Exit Group
      </button>
      </div>
    </nav>
  );
}
