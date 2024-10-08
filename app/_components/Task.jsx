import Link from "next/link";

function Task() {
  
  return (
    <section className=" flex items-center flex-col justify-between p-5 relative overflow-hidden">
      <div className="bg-[#ffffffe6] p-12 rounded-xl shadow-md shadow-[rgba(0, 0, 0, 0.15)] ">
        <p class="text-center text-4xl font-semibold text-[#333] mb-4">
          Complete these daily tasks and earn coins!...
        </p>
        <h2 class="text-[#2a0691]  pb-4 mb-5 text-2xl border-b-4 border-[#f39c12]  text-[2em]">
          Daily Tasks
        </h2>
        <span class="text-[20px] text-[#087f5b] font-semibold tracking-wide pt-12">
          POINTS RATIO=1:1
        </span>
        <div id="tasks-list">
          <div class="flex items-center justify-between p-4 rounded-xl shadow-lg transition-all duration-300  ease-in hover:translate-y-[-5px] hover:bg-[#f1f8ff]">
            <Link
              href="https://x.com/?lang=en"
              class="bg-[#ff5722] text-white border-2 py-4 px-4
              rounded-lg cursor-pointer text-lg w-[75%] font-bold inline-block transition-all duration-300 ease-in text-center hover:bg-[#f4511e] border-[#f45113]
              shadow-lg-[#0000004d] hover:scale-105
              
               "
              data-reward="10"
            >
              Follow us on Twitter
            </Link>
            <span class="text-lg font-bold bg-[#fff3e0] rounded-lg shadow-lg-[#0000001a] p-4 text-[#ff9800]">
              +25000 Points
            </span>
          </div>
        </div>
        <div class="text-[1.6em] font-bold text-center mt-4 p-4 bg-yellow-300 text-gray-800 rounded-xl shadow-lg">
          <h3>
            Total Coins: <span id="coin-count">0</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Task;
