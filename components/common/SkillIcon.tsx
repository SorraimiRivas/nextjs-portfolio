import Image from "next/image";
import { FC } from "react";

type SkillIconProps = {
  svg: string;
  name: string;
};

const SkillIcon: FC<SkillIconProps> = ({ svg, name }) => {
  return (
    <div className="group flex flex-col items-center gap-1 justify-between hover:scale-110 transition duration-300 ease-in-out">
      <Image
        src={`/svgs/${svg}.svg`}
        alt={`${name} logo`}
        width={50}
        height={50}
      />
      <p className="text-xs text-center font-semibold opacity-0 group-hover:opacity-[1] bg-gray-200 rounded-lg py-1 px-2 ">
        {name}
      </p>
    </div>
  );
};

export default SkillIcon;
