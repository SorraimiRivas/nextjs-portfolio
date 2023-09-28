import Image from "next/image";

type SkillIconProps = {
  svg: string;
  name: string;
};

const SkillIcon = ({ svg, name }: SkillIconProps) => {
  return (
    <div className="group flex flex-col items-center gap-2 justify-between hover:scale-110 transition duration-300 ease-in-out dark:text-black">
      <Image
        src={`/svgs/${svg}.svg`}
        alt={`${name} logo`}
        width={30}
        height={30}
        className="w-[100%] h-full"
      />
      <p className="text-xs text-center font-semibold opacity-0 group-hover:opacity-[1] bg-white dark:bg-gray-50 rounded-lg py-1 px-2 ">
        {name}
      </p>
    </div>
  );
};

export default SkillIcon;
