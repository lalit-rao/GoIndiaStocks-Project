/*
"use client";

import {useState} from "react";
import Image from "next/image";
import {control, discussion, market, user,} from "@/public/assets";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        {title: "Discussion Forum", src: discussion},
        {title: "Market Stories", src: market},
        {title: "Sentiment"},
        {title: "Market"},
        {title: "Sector"},
        {title: "Watchlist"},
        {title: "Events"},
        {title: "News/Interview"},
    ];

    return (
        <div className="flex">
            <div
                className={` ${
                    open ? "w-72" : "w-0 "
                } bg-blue-900 h-screen pt-8 relative duration-300`}
            >
                <div
                    className="absolute cursor-pointer -right-4 top-[40%] w-6 h-24 bg-blue-900  justify-center flex items-center"
                    onClick={() => setOpen(!open)}
                >
                    <Image
                        src={control}
                        className={`w-3 ${!open && "rotate-180"}`}

                        alt=""
                        width
                        height
                    />
                </div>
                <div className="flex gap-x-4 items-center pl-2">
                    <Image
                        src={user}
                        className={`cursor-pointer duration-500 ${
                            open && "rotate-[360deg]"
                        }`}
                        alt=""
                        width
                        height
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${
                            !open && "scale-0"
                        }`}
                    >
                        Hello User
                    </h1>
                </div>
                <ul className="pt-6 pl-2">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } `}
                        >
                            {Menu.src ? (
                                <Image src={Menu.src} alt="" width={20} height={20}/>
                            ) : (
                                <div style={{width: 20, height: 20}}/>
                            )}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-full flex-1">
                <div className="flex">
                    <div className="h-full w-[70%] pr-8 pt-6 pl-8">
                        <h1 className="text-2xl font-semibold text-red-700 bg-gray-100 w-60 text-center">Discussion
                            Forum</h1>
                        <div className="pt-4">
                            <div className="h-48 bg-red-200 w-[90%] mx-auto mb-4">
                                <p>hello</p>
                            </div>
                            <div className="h-48 bg-red-200 w-[90%] mx-auto mb-4">
                                <p>hello</p>
                            </div>
                            <div className="h-48 bg-red-200 w-[90%] mx-auto mb-4">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-screen w-[25%] pt-6">
                        <h1 className="text-2xl font-semibold text-red-700 bg-gray-100 w-48 text-center">Market
                            Stories</h1>
                        <div className="pt-4">
                            <div className="h-48 bg-red-200 w-[90%] mx-auto mb-4">
                                <p>hello</p>
                            </div>
                            <div className="h-48 bg-red-200 w-[90%] mx-auto mb-4">
                                <p>hello</p>
                            </div>
                            <div className="h-48 bg-red-200 w-[90%] mx-auto mb-4">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
*/

"use client";
import {useState} from "react";
import Image from "next/image";
import "./Sidebar.css";
import {avatar, bell, comment, control, discussion, like, market, share, sunset, user, view,} from "@/public/assets";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState("discussion");
    const [action, setAction] = useState("Discussion Forum");

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const Menus = [
        {title: "Discussion Forum", src: discussion},
        {title: "Market Stories", src: market},
        {title: "Sentiment"},
        {title: "Market"},
        {title: "Sector"},
        {title: "Watchlist"},
        {title: "Events"},
        {title: "News/Interview"},
    ];

    return (
        <div className="flex">
            <div
                className={`${
                    open ? "w-72" : "w-0 "
                } bg-blue-900 min-h-full pt-8 md:relative duration-300 absolute z-50`}
            >
                <div
                    className="absolute cursor-pointer -right-4 top-[40%] w-6 h-24 bg-blue-900  justify-center flex items-center"
                    onClick={() => setOpen(!open)}
                >
                    <Image
                        src={control}
                        className={`w-3 ${!open && "rotate-180"}`}
                        alt="control-icon"
                        width
                        height
                    />
                </div>
                <div className="flex gap-x-4 spacy items-center pl-2 pr-8">
                    <div className="flex flex-row text-center justify-center items-center">
                        <Image
                            src={user}
                            className={`cursor-pointer duration-500 ${
                                open && "rotate-[360deg]"
                            }`}
                            alt="user-icon"
                            width={30}
                            height={30}
                        />
                        <h1
                            className={` pl-2 text-white origin-left font-medium text-xl duration-200 ${
                                !open && "scale-0"
                            }`}
                        >
                            Hello User
                        </h1>
                    </div>
                    <div className="flex flex-row items-center">
                        <Image src={bell} alt="bell-icon" width={20} height={20}/>
                    </div>
                </div>
                <ul className="pt-6 pl-2">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } `}
                        >
                            {Menu.src ? (
                                <Image src={Menu.src} alt="menu" width={20} height={20}/>
                            ) : (
                                <div style={{width: 20, height: 20}}/>
                            )}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="h-full pt-6 md:flex md:flex-row">
                <div className="h-full inline-block md:flex md:flex-col md:w-[70%]">
                    <h1 className={action === "Market Stories" ? "submit gray" : "submit"} onClick={() => {
                        setAction("Discussion Forum")
                    }}>Discussion Forum</h1>
                    <div className="pt-4 desktop-view">
                        <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
                            <div>
                                <div className="flex flex-row topRow justify-center items-center">
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="z-50 w-14 h-14 rounded-full bg-blue-900">
                                            <Image
                                                src={avatar}
                                                alt="Share"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="text-gray-800 font-bold text-[15px]">Lorem ipsum</p>
                                        </div>
                                        <div className="py-1 px-3 bg-blue-800 rounded-2xl">
                                            <p className="text-[13px]">Sector 2</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <p className="text-[14px] text-blue-700 font-semibold">2 min ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
                                    <div>
                                        <p className="text-[18px] text-gray-600 font-medium">Lorem Ipsum is simply
                                            dummy text of the printing and typesetting industry.Lorem Ipsum is</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between space-x-4 max-w-[80%] mx-auto">
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={like}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={view}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={comment}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k Comments</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={share}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
                            <div>
                                <div className="flex flex-row topRow justify-center items-center">
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="z-50 w-14 h-14 rounded-full bg-blue-900">
                                            <Image
                                                src={avatar}
                                                alt="Share"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="text-gray-800 font-bold text-[15px]">Lorem ipsum</p>
                                        </div>
                                        <div className="py-1 px-3 bg-blue-800 rounded-2xl">
                                            <p className="text-[13px]">Sector 2</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <p className="text-[14px] text-blue-700 font-semibold">2 min ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
                                    <div>
                                        <p className="text-[18px] text-gray-600 font-medium">Lorem Ipsum is simply
                                            dummy text of the printing and typesetting industry.Lorem Ipsum is</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between space-x-4 max-w-[80%] mx-auto">
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={like}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={view}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={comment}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k Comments</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={share}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
                            <div>
                                <div className="flex flex-row topRow justify-center items-center">
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="z-50 w-14 h-14 rounded-full bg-blue-900">
                                            <Image
                                                src={avatar}
                                                alt="Share"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="text-gray-800 font-bold text-[15px]">Lorem ipsum</p>
                                        </div>
                                        <div className="py-1 px-3 bg-blue-800 rounded-2xl">
                                            <p className="text-[13px]">Sector 2</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <p className="text-[14px] text-blue-700 font-semibold">2 min ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
                                    <div>
                                        <p className="text-[18px] text-gray-600 font-medium">Lorem Ipsum is simply
                                            dummy text of the printing and typesetting industry.Lorem Ipsum is</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between space-x-4 max-w-[80%] mx-auto">
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={like}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={view}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={comment}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k Comments</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={share}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
                            <div>
                                <div className="flex flex-row topRow justify-center items-center">
                                    <div className="flex justify-center items-center gap-4">
                                        <div className="z-50 w-14 h-14 rounded-full bg-blue-900">
                                            <Image
                                                src={avatar}
                                                alt="Share"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="text-gray-800 font-bold text-[15px]">Lorem ipsum</p>
                                        </div>
                                        <div className="py-1 px-3 bg-blue-800 rounded-2xl">
                                            <p className="text-[13px]">Sector 2</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div>
                                            <p className="text-[14px] text-blue-700 font-semibold">2 min ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
                                    <div>
                                        <p className="text-[18px] text-gray-600 font-medium">Lorem Ipsum is simply
                                            dummy text of the printing and typesetting industry.Lorem Ipsum is</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between space-x-4 max-w-[80%] mx-auto">
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={like}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={view}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={comment}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">2k Comments</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <div className="w-6 h-6">
                                            <Image
                                                src={share}
                                                alt="like"
                                                height
                                                width
                                            />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-[12px] text-black">Share</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" h-full inline-block md:flex md:flex-col md:w-[25%]">
                    <h1 className={action === "Discussion Forum" ? "submit gray" : "submit"} onClick={() => {
                        setAction("Market Stories")
                    }}>Market Stories</h1>
                    <div className="pt-4 desktop-view">
                        <div className="h-56 bg-white w-[90%] mx-auto mb-4 z-10 flex flex-col boxShadow">
                            <div className="bg-blue-900 image-part">
                                <Image
                                    src={sunset}
                                    alt="sunset"
                                    height
                                    width
                                    className="image"
                                />
                            </div>
                            <div className="min-h-[40%] max-w-[90%] mx-auto pt-1">
                                <p className="font-bold text-[13px] text-black">The Coldest Sunset</p>
                                <p className=" text-[12px] text-black">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae.</p>
                            </div>
                        </div>
                        <div className="h-56 bg-white w-[90%] mx-auto mb-4 z-10 flex flex-col boxShadow">
                            <div className="bg-blue-900 image-part">
                                <Image
                                    src={sunset}
                                    alt="sunset"
                                    height
                                    width
                                    className="image"
                                />
                            </div>
                            <div className="min-h-[40%] max-w-[90%] mx-auto pt-1">
                                <p className="font-bold text-[13px] text-black">The Coldest Sunset</p>
                                <p className=" text-[12px] text-black">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae.</p>
                            </div>
                        </div>
                        <div className="h-56 bg-white w-[90%] mx-auto mb-4 z-10 flex flex-col boxShadow">
                            <div className="bg-blue-900 image-part">
                                <Image
                                    src={sunset}
                                    alt="sunset"
                                    height
                                    width
                                    className="image"
                                />
                            </div>
                            <div className="min-h-[40%] max-w-[90%] mx-auto pt-1">
                                <p className="font-bold text-[13px] text-black">The Coldest Sunset</p>
                                <p className=" text-[12px] text-black">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-4 mobile-view sm:min-w-[90%] sm:mx-auto h-full">
                    {action === "Discussion Forum" &&
                        <div className="pt-4 min-h-[100vh]">
                            <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
                                <div>
                                    <div className="flex flex-row topRow justify-center items-center">
                                        <div className="flex justify-center items-center gap-4">
                                            <div className="z-10 w-10 h-10 rounded-full bg-blue-900">
                                                <Image
                                                    src={avatar}
                                                    alt="Share"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-bold text-[12px]">Lorem ipsum</p>
                                            </div>
                                            <div className="py-1 px-3 bg-blue-800 rounded-2xl">
                                                <p className="text-[10px]">Sector 2</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div>
                                                <p className="text-[11px] text-blue-700 font-semibold">2 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
                                        <div>
                                            <p className="text-[14px] text-gray-600 font-medium">Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry.Lorem Ipsum is</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between space-x-4 max-w-[90%] mx-auto">
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={like}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={view}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={comment}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k Comments</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-6 h-6">
                                                <Image
                                                    src={share}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">Share</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
                                <div>
                                    <div className="flex flex-row topRow justify-center items-center">
                                        <div className="flex justify-center items-center gap-4">
                                            <div className="z-10 w-10 h-10 rounded-full bg-blue-900">
                                                <Image
                                                    src={avatar}
                                                    alt="Share"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-bold text-[12px]">Lorem ipsum</p>
                                            </div>
                                            <div className="py-1 px-3 bg-blue-800 rounded-2xl">
                                                <p className="text-[10px]">Sector 2</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div>
                                                <p className="text-[11px] text-blue-700 font-semibold">2 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
                                        <div>
                                            <p className="text-[14px] text-gray-600 font-medium">Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry.Lorem Ipsum is</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between space-x-4 max-w-[90%] mx-auto">
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={like}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={view}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={comment}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k Comments</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-6 h-6">
                                                <Image
                                                    src={share}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">Share</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
                                <div>
                                    <div className="flex flex-row topRow justify-center items-center">
                                        <div className="flex justify-center items-center gap-4">
                                            <div className="z-10 w-10 h-10 rounded-full bg-blue-900">
                                                <Image
                                                    src={avatar}
                                                    alt="Share"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-bold text-[12px]">Lorem ipsum</p>
                                            </div>
                                            <div className="py-1 px-3 bg-blue-800 rounded-2xl">
                                                <p className="text-[10px]">Sector 2</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div>
                                                <p className="text-[11px] text-blue-700 font-semibold">2 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
                                        <div>
                                            <p className="text-[14px] text-gray-600 font-medium">Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry.Lorem Ipsum is</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between space-x-4 max-w-[90%] mx-auto">
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={like}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={view}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={comment}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k Comments</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-6 h-6">
                                                <Image
                                                    src={share}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">Share</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
                                <div>
                                    <div className="flex flex-row topRow justify-center items-center">
                                        <div className="flex justify-center items-center gap-4">
                                            <div className="z-10 w-10 h-10 rounded-full bg-blue-900">
                                                <Image
                                                    src={avatar}
                                                    alt="Share"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="text-gray-800 font-bold text-[12px]">Lorem ipsum</p>
                                            </div>
                                            <div className="py-1 px-3 bg-blue-800 rounded-2xl">
                                                <p className="text-[10px]">Sector 2</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div>
                                                <p className="text-[11px] text-blue-700 font-semibold">2 min ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
                                        <div>
                                            <p className="text-[14px] text-gray-600 font-medium">Lorem Ipsum is simply
                                                dummy text of the printing and typesetting industry.Lorem Ipsum is</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between space-x-4 max-w-[90%] mx-auto">
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={like}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={view}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-4 h-4">
                                                <Image
                                                    src={comment}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">2k Comments</p>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 items-center">
                                            <div className="w-6 h-6">
                                                <Image
                                                    src={share}
                                                    alt="like"
                                                    height
                                                    width
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[10px] text-black">Share</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {action === "Market Stories" &&
                        <div className="pt-4 min-h-[100vh]">
                            <div className="h-56 bg-white w-[90%] mx-auto mb-4 z-10 flex flex-col boxShadow">
                                <div className="bg-blue-900 image-part">
                                    <Image
                                        src={sunset}
                                        className="image"
                                    />
                                </div>
                                <div className="min-h-[40%] max-w-[90%] mx-auto pt-1">
                                    <p className="font-bold text-[13px] text-black">The Coldest Sunset</p>
                                    <p className=" text-[12px] text-black">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae.</p>
                                </div>
                            </div>
                            <div className="h-56 bg-white w-[90%] mx-auto mb-4 z-10 flex flex-col boxShadow">
                                <div className="bg-blue-900 image-part">
                                    <Image
                                        src={sunset}
                                        className="image"
                                    />
                                </div>
                                <div className="min-h-[40%] max-w-[90%] mx-auto pt-1">
                                    <p className="font-bold text-[13px] text-black">The Coldest Sunset</p>
                                    <p className=" text-[12px] text-black">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae.</p>
                                </div>
                            </div>
                            <div className="h-56 bg-white w-[90%] mx-auto mb-4 z-10 flex flex-col boxShadow">
                                <div className="bg-blue-900 image-part">
                                    <Image
                                        src={sunset}
                                        className="image"
                                    />
                                </div>
                                <div className="min-h-[40%] max-w-[90%] mx-auto pt-1">
                                    <p className="font-bold text-[13px] text-black">The Coldest Sunset</p>
                                    <p className=" text-[12px] text-black">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae.</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

