import {avatar, comment, like, share, sunset, view} from "@/public/assets";
import Image from "next/image";

const data = [
    {
        avatar: avatar,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is",
        sector: "Sector 2",
        time: "2 min ago",
        likeSrc: like,
        viewSrc: view,
        commentSrc: comment,
        shareSrc: share
    },
    {
        avatar: avatar,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is",
        sector: "Sector 2",
        time: "2 min ago",
        likeSrc: like,
        viewSrc: view,
        commentSrc: comment,
        shareSrc: share
    },
    {
        avatar: avatar,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is",
        sector: "Sector 2",
        time: "2 min ago",
        likeSrc: like,
        viewSrc: view,
        commentSrc: comment,
        shareSrc: share
    },
    {
        avatar: avatar,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is",
        sector: "Sector 2",
        time: "2 min ago",
        likeSrc: like,
        viewSrc: view,
        commentSrc: comment,
        shareSrc: share
    }
];

const RenderCard = ({avatar, text, sector, time, likeSrc, viewSrc, commentSrc, shareSrc}) => (
    <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
        <div>
            <div className="flex flex-row topRow justify-center items-center">
                <div className="flex justify-center items-center gap-4">
                    <div className="z-50 w-14 h-14 rounded-full bg-blue-900">
                        <Image src={avatar} alt="Share" height width/>
                    </div>
                    <div>
                        <p className="text-gray-800 font-bold text-[15px]">Lorem ipsum</p>
                    </div>
                    <div className="py-1 px-3 bg-blue-800 rounded-2xl">
                        <p className="text-[13px]">{sector}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <p className="text-[14px] text-blue-700 font-semibold">{time}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
                <div>
                    <p className="text-[18px] text-gray-600 font-medium">{text}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between space-x-4 max-w-[80%] mx-auto">
                <div className="flex space-x-2 items-center">
                    <div className="w-6 h-6">
                        <Image src={likeSrc} alt="like" height width/>
                    </div>
                    <div>
                        <p className="font-semibold text-[12px] text-black">2k</p>
                    </div>
                </div>
                <div className="flex space-x-2 items-center">
                    <div className="w-6 h-6">
                        <Image src={viewSrc} alt="like" height width/>
                    </div>
                    <div>
                        <p className="font-semibold text-[12px] text-black">2k</p>
                    </div>
                </div>
                <div className="flex space-x-2 items-center">
                    <div className="w-6 h-6">
                        <Image src={commentSrc} alt="like" height width/>
                    </div>
                    <div>
                        <p className="font-semibold text-[12px] text-black">2k Comments</p>
                    </div>
                </div>
                <div className="flex space-x-2 items-center">
                    <div className="w-6 h-6">
                        <Image src={shareSrc} alt="like" height width/>
                    </div>
                    <div>
                        <p className="font-semibold text-[12px] text-black">Share</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const secondSunset = sunset;
const secondSunsetText = "The Coldest Sunset";
const secondSunsetImage = sunset;

const SecondCard = ({image, title, text}) => (
    <div className="h-56 bg-white w-[90%] mx-auto mb-4 z-10 flex flex-col boxShadow">
        <div className="bg-blue-900 image-part">
            <Image
                src={image}
                alt="sunset"
                height
                width
                className="image"
            />
        </div>
        <div className="min-h-[40%] max-w-[90%] mx-auto pt-1">
            <p className="font-bold text-[13px] text-black">{title}</p>
            <p className="text-[12px] text-black">{text}</p>
        </div>
    </div>
);


const Card = ({ avatar, sector, time, description, like, view, comment, share }) => (
  <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
    <div>
      <div className="flex flex-row topRow justify-center items-center">
        <div className="flex justify-center items-center gap-4">
          <div className="z-10 w-10 h-10 rounded-full bg-blue-900">
            <Image src={avatar} alt="Share" height width />
          </div>
          <div>
            <p className="text-gray-800 font-bold text-[12px]">Lorem ipsum</p>
          </div>
          <div className="py-1 px-3 bg-blue-800 rounded-2xl">
            <p className="text-[10px]">{sector}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <p className="text-[11px] text-blue-700 font-semibold">{time}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4">
        <div>
          <p className="text-[14px] text-gray-600 font-medium">{description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between space-x-4 max-w-[90%] mx-auto">
        <div className="flex space-x-1 items-center">
          <div className="w-4 h-4">
            <Image src={like} alt="like" height width />
          </div>
          <div>
            <p className="font-semibold text-[10px] text-black">2k</p>
          </div>
        </div>
        <div className="flex space-x-1 items-center">
          <div className="w-4 h-4">
            <Image src={view} alt="like" height width />
          </div>
          <div>
            <p className="font-semibold text-[10px] text-black">2k</p>
          </div>
        </div>
        <div className="flex space-x-1 items-center">
          <div className="w-4 h-4">
            <Image src={comment} alt="like" height width />
          </div>
          <div>
            <p className="font-semibold text-[10px] text-black">2k Comments</p>
          </div>
        </div>
        <div className="flex space-x-1 items-center">
          <div className="w-6 h-6">
            <Image src={share} alt="like" height width />
          </div>
          <div>
            <p className="font-semibold text-[10px] text-black">Share</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { data, RenderCard, secondSunset, secondSunsetText, secondSunsetImage, SecondCard, Card };