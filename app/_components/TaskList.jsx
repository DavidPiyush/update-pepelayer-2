"use client";
import Link from "next/link";
import { referDataLink } from "../_data/ReferData";

function TaskList({}) {
  
  return referDataLink.map((data) => (
    <div
      class="flex items-center justify-between p-4 rounded-xl shadow-lg transition-all duration-300  ease-in hover:translate-y-[-5px] hover:bg-[#f1f8ff]"
      key={data.title}
    >
      <Link
        href={data.link}
        class="bg-[#ff5722] text-white border-2 py-4 px-4
              rounded-lg cursor-pointer text-lg w-[75%] font-bold inline-block transition-all duration-300 ease-in text-center hover:bg-[#f4511e] border-[#f45113]
              shadow-lg-[#0000004d] hover:scale-105
              
               "
        data-reward={data.points}
        target="_blank"
      >
        {data.title}
      </Link>
      <span class="text-lg font-bold bg-[#fff3e0] rounded-lg shadow-lg-[#0000001a] p-4 text-[#ff9800]">
        +{data.points} Points
      </span>
    </div>
  ));
}

export default TaskList;
