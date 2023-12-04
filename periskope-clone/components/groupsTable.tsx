"use client";
import { Database } from "@/lib/schema";
import { supabase } from "../supabase";
import { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";

type Groups = Database["public"]["Tables"]["whatsappGroups"]["Row"];

export default function GroupsTable() {
  const [groups, setGroups] = useState<Groups[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const { data: whatsappGroups, error } = await supabase
      .from("whatsappGroups")
      .select("*");

    if (error) console.log("error", error);
    else setGroups(whatsappGroups);
  };

  return (
    <>
      {groups.length > 0 ? (
        <div className="pl-60 pr-96">
          <div className="py-2 px-4 bg-gray-50 border-b border-gray-200 relative flex justify-between">
            <div className="flex searchBar">
              <input
                type="text"
                name="search"
                id="1"
                placeholder="Search"
                className="border rounded-md border-gray-200 py-1 pl-7 pr-3 text-sm text-gray-600 focus:outline-0 mr-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 text-gray-400 absolute top-4 left-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              <button
                type="button"
                className="text-gray-500 border rounded-md text-sm border-gray-200 flex flex-wrap flex-row bg-white py-1 px-2 items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                    clipRule="evenodd"
                  />
                </svg>
                Filter
              </button>
            </div>
            <div className="flex flex-wrap flex-row">
              <button
                type="button"
                className="border rounded-md text-sm bg-green-700 text-white py-1 px-2 mr-2"
              >
                Bulk message
              </button>
              <button
                type="button"
                className="border rounded-md text-sm bg-white text-gray-500 py-1 px-2 flex flex-wrap flex-row items-center"
              >
                Group Actions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <table className="table-fixed w-full">
            <thead>
              <tr className="text-sm shadow-md">
                <th className="w-3/6 text-left font-medium p-3 text-sm text-gray-500">
                  <input
                    type="checkbox"
                    name="address"
                    value="1"
                    className="mr-4 border-white"
                  ></input>
                  Group Name
                </th>
                <th className="font-medium p-3 text-sm text-gray-500">
                  Project
                </th>
                <th className="font-medium p-3 text-sm text-gray-500">
                  Members
                </th>
                <th className="font-medium p-3 text-sm text-gray-500">
                  Last Active
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>
                  <div className="scrollit">
                    <table className="w-full">
                      <>
                        {groups.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-100 cursor-pointer">
                            <td className="p-3 text-gray-600 flex flex-wrap flex-row items-center w-4/5">
                              <input
                                type="checkbox"
                                name="address"
                                value="1"
                                className="mr-4 border-white"
                              ></input>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-9 h-9 rounded-full p-2 bg-gray-300 text-gray-50 mr-3"
                              >
                                <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                              </svg>

                              {item.groupName}
                            </td>
                            <td className="p-3 text-center">
                              <span
                                className={
                                  "rounded-xl py-1 px-2 text-sm " +
                                  (item.projects === "Demo"
                                    ? "text-indigo-700 bg-indigo-100"
                                    : "text-orange-700 bg-orange-100")
                                }
                              >
                                # {item.projects}
                              </span>
                            </td>
                            <td className="p-3 text-center text-gray-600" style={{width: "18%"}}>
                              {item.noOfMembers}
                            </td>
                            <td className="p-3 text-center text-gray-600">
                              {moment(
                                moment(item.lastActive).format(
                                  "MMMM Do YYYY, h:mm:ss a"
                                )
                              ).isBefore(
                                moment().format("MMMM Do YYYY, h:mm:ss a")
                              )
                                ? moment(item.lastActive).format("hh:mm a")
                                : moment(item.lastActive).format("hh:mm:ss a")}
                            </td>
                          </tr>
                        ))}
                      </>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center mt-80">
          <Image
            src="/loader.svg"
            width={200}
            height={200}
            alt="logo"
            className="mr-2"
          />
        </div>
      )}
    </>
  );
}
