import React, { useEffect, useState } from "react";
import {
  Wallet,
  Users,
  Footprints,
  Glasses,
  Boxes,
  ShoppingCart,
  PiggyBank,
  Flower,
  Heart,
  ShoppingBag,
} from "lucide-react";
import pillsData from "../data/pills.json";

const iconMap = {
  Wallet,
  Users,
  Footprints,
  Glasses,
  ShoppingBag,
  Heart,
  ShoppingCart,
  PiggyBank,
  Flower,
  Boxes,
};

const Pill = ({
  Icon,
  text,
  variant,
  style,
}: {
  Icon: React.ElementType;
  text: string;
  variant: "blue" | "darkBlue" | "yellow" | "purple";
  style?: React.CSSProperties;
}) => {
  const bgColors = {
    blue: "bg-[#74D0FA] text-black",
    darkBlue: "bg-[#167EAF] text-white",
    yellow: "bg-[#E0DD90] text-black",
    purple: "bg-[#A35CDC] text-white",
  };

  return (
    <div
      style={style}
      className={`w-[8rem] rounded-3xl ${bgColors[variant]} py-2 px-4 flex items-center justify-center text-white shadow-md`}
    >
      <div className="flex items-center gap-2">
        <Icon size={18} />
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
};

interface PillPosition {
  top: string;
  left: string;
  transform: string;
}

const RandomScreen = () => {
  const [pillPositions, setPillPositions] = useState<PillPosition[]>([]);

  useEffect(() => {
    const PILL_WIDTH = 128;
    const PILL_HEIGHT = 50;
    const MARGIN = 20;

    const positions: PillPosition[] = [];
    const containerWidth = window.innerWidth * 0.6;
    const containerHeight = window.innerHeight * 0.5;
    
    // Calculate the center point of the container
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;

    // Helper function to check if a position overlaps with existing pills
    const isOverlapping = (newPos: { top: number; left: number }) => {
      return positions.some((pos) => {
        const existingTop = parseFloat(pos.top);
        const existingLeft = parseFloat(pos.left);
        
        return (
          Math.abs(newPos.left - existingLeft) < PILL_WIDTH + MARGIN &&
          Math.abs(newPos.top - existingTop) < PILL_HEIGHT + MARGIN
        );
      });
    };

    // Generate non-overlapping positions around the center
    pillsData.pills.forEach(() => {
      let attempts = 0;
      let position;
      
      do {
        // Calculate position relative to center
        const radius = Math.min(containerWidth, containerHeight) * 0.3; // Use 30% of the smaller container dimension
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * radius;

        position = {
          left: centerX + (Math.cos(angle) * distance) - PILL_WIDTH / 2,
          top: centerY + (Math.sin(angle) * distance) - PILL_HEIGHT / 2,
        };
        attempts++;
      } while (isOverlapping(position) && attempts < 100);

      positions.push({
        top: `${position.top}px`,
        left: `${position.left}px`,
        transform: `rotate(${Math.random() * 20 - 10}deg)`,
      });
    });

    setPillPositions(positions);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between p-4 bg-white relative max-w-md mx-auto">
      {/* Logo */}
      <div className="text-[#74D0FA] font-semibold text-lg text-left w-full">
        fayhr<sup className="text-xs">tm</sup>
      </div>

      {/* Pills */}
      <div className="relative w-full h-[50%] flex flex-wrap gap-3 items-center justify-center">
        {pillsData.pills.map((pill, index) => (
          <Pill
            key={index}
            Icon={iconMap[pill.icon as keyof typeof iconMap]}
            text={pill.text}
            variant={pill.variant as "blue" | "darkBlue" | "yellow" | "purple"}
            style={{
              position: "absolute",
              ...pillPositions[index], // Apply positions only when they're available
            }}
          />
        ))}
      </div>

      {/* Co-Funding Button and Hand */}
      <div className="flex flex-col items-center">
        <div className="bg-[#74D0FA] text-white font-semibold text-lg rounded-full w-[120px] h-[50px] flex items-center justify-center shadow-md mb-4">
          Co-Funding
        </div>
        <div className="text-[#74D0FA] text-5xl font-bold">✌️</div>
      </div>
    </div>
  );
};

export default RandomScreen;
