"use client";
import {useState} from "react";
import Image from "next/image";
import "./Sidebar.css";
import {avatar, bell, comment, control, discussion, like, market, share, user, view,} from "@/public/assets";
import {Card, data, RenderCard, SecondCard, secondSunset, secondSunsetText} from "@/constants";

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

            <div className="h-full md:pt-6 md:flex md:flex-row">
                <div className="h-full inline-block md:flex md:flex-col md:w-[70%] desktop-view">
                    <h1 className="submit desktop-view">Discussion Forum</h1>
                    <div className="pt-4 desktop-view">
                        {data.map((item, index) => (
                            <RenderCard key={index} {...item} />
                        ))}
                    </div>
                </div>
                <div className=" h-full inline-block md:flex md:flex-col md:w-[25%] desktop-view">
                    <h1 className="submit desktop-view">Market Stories</h1>
                    <div className="pt-4 desktop-view">
                        <SecondCard image={secondSunset} title={secondSunsetText}
                                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae."/>
                        <SecondCard image={secondSunset} title={secondSunsetText}
                                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae."/>
                        <SecondCard image={secondSunset} title={secondSunsetText}
                                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae."/>
                    </div>
                </div>
                <div className="mobile-view min-w-[90%] mx-auto h-full">
                    <div className="flex flex-row min-w-[100%]">
                        <div className="min-w-[50%]">
                            <h1 className={action === "Market Stories" ? "submit" : "submit "} onClick={() => {
                                setAction("Discussion Forum")
                            }}>Discussion Forum</h1>
                        </div>
                        <div className="min-w-[50%]">
                            <h1 className={action === "Discussion Forum" ? "submit" : "submit "} onClick={() => {
                                setAction("Market Stories")
                            }}>Market Stories</h1>
                        </div>
                    </div>
                    {action === "Discussion Forum" &&
                        <div className="pt-4 min-h-[100vh]">
                            <Card
                                avatar={avatar}
                                sector="Sector 1"
                                time="2 min ago"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is"
                                like={like}
                                view={view}
                                comment={comment}
                                share={share}
                            />
                            <Card
                                avatar={avatar}
                                sector="Sector 2"
                                time="2 min ago"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is"
                                like={like}
                                view={view}
                                comment={comment}
                                share={share}
                            />
                            <Card
                                avatar={avatar}
                                sector="Sector 3"
                                time="2 min ago"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is"
                                like={like}
                                view={view}
                                comment={comment}
                                share={share}
                            />
                            <Card
                                avatar={avatar}
                                sector="Sector 4"
                                time="2 min ago"
                                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is"
                                like={like}
                                view={view}
                                comment={comment}
                                share={share}
                            />
                        </div>
                    }
                    {action === "Market Stories" &&
                        <div className="pt-4 min-h-[100vh]">
                            <SecondCard image={secondSunset} title={secondSunsetText}
                                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae."/>
                            <SecondCard image={secondSunset} title={secondSunsetText}
                                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae."/>
                            <SecondCard image={secondSunset} title={secondSunsetText}
                                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut explicabo facilis fugiat molestiae."/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};


export default Sidebar;

