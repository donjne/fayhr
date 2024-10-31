import Image from "next/image";
import { Search, Menu, UsersRound } from "lucide-react";

export const categories = [
  { name: "Gadget Funding", image: "/gadget_funding.png" },
  { name: "Food Funding", image: "/food_funding.png" },
  { name: "Savings Funding", image: "/savings_funding.png" },
  { name: "Fashion Funding", image: "/fashion_funding.png" },
];

export const communities = [
  {
    name: "Gadget Funders",
    members: "10k Members",
    description:
      "The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.",
    contributions: "100 contributions",
    image: "/gadget_funding.png",
  },
  {
    name: "Men's Wear",
    members: "60k Members",
    description:
      "The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.",
    contributions: "7000k contributions",
    image: "/gadget_funding_full.png",
  },
  {
    name: "Cow Funders",
    members: "50k Members",
    description:
      "The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.",
    contributions: "3000k contributions",
    image: "/gadget_funding_full.png",
  },
  {
    name: "Merch Funders",
    members: "10k Members",
    description:
      "The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.",
    contributions: "600 contributions",
    image: "/gadget_funding_full.png",
  },
  {
    name: "Fashion Funders",
    members: "90k Members",
    description:
      "The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.",
    contributions: "9000k contributions",
    image: "/gadget_funding_full.png",
  },
];

const scrollbarStyle =
  "[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full";

const Header = function () {
  return (
    <nav className="w-full flex items-center justify-start py-3 px-6 border-b-[3.4px] border-b-[#F5F5F5]">
      <div className="bg-blue-300 w-11 h-11 rounded-full relative flex-shrink-0">
        <Image src="/avatar.png" alt="avatar" fill className="object-cover" />
      </div>
      <div className="ml-auto flex items-center justify-center gap-5">
        <div className="hover:bg-gray-200 p-2 transition-all cursor-pointer rounded-full">
          <Search />
        </div>
        <div className="hover:bg-gray-200 p-2 transition-all cursor-pointer rounded-full">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

const CommunityCard = function ({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <div
      className="w-[15rem] flex-shrink-0 bg-[#F5F5F5] rounded-md grid grid-rows-[3fr_1fr] shadow-md drop-shadow-md"
      style={{ aspectRatio: "100 / 79" }}
    >
      <div className="w-full h-full relative bg-red-400 rounded-t-md overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="15rem"
        />
      </div>
      <span className="w-full h-full flex items-center justify-center">
        {name}
      </span>
    </div>
  );
};

const CrowdFundingCommunities = function () {
  return (
    <section className="ml-6 my-3 flex flex-col items-start gap-3">
      <h2 className="text-[#01A8F6]">
        <span>Crowdfunding communities</span>
        <div className="h-[3px] rounded-md max-w-[67px] bg-[#01A8F6] mt-2"></div>
      </h2>
      <section
        className={`flex items-center justify-start gap-4 overflow-x-auto w-full py-2 ${scrollbarStyle}`}
      >
        {communities.map((community) => (
          <CommunityCard key={community.name} {...community} />
        ))}
      </section>
    </section>
  );
};

const CommunityCard = function () {
  return (
    <div
      className="w-[15rem] flex-shrink-0"
      style={{ aspectRatio: `377/95` }}
    ></div>
  );
};

const YourCommunities = function () {
  return (
    <section className="ml-6 my-3 flex flex-col items-start gap-3">
      <h2 className="flex items-center gap-3">
        <UsersRound strokeWidth={1} /> <span>Your Communities</span>
      </h2>
      <section>
        <CommunityCard />
      </section>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <CrowdFundingCommunities />
        <YourCommunities />
      </div>
    </>
  );
}
