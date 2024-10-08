import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex gap-5 items-center cursor-pointer">
      <Link href="/">
        <Image
          width={56}
          height={56}
          src={"/logo.png"}
          alt="Pepe coin logo"
          className=" w-[56px] h-[56px] bg-white rounded-full border-2 border-white"
        />
      </Link>
      <p className="text-2xl font-semibold text-white ">PEPE LAYER 2</p>
    </div>
  );
}

export default Logo;
