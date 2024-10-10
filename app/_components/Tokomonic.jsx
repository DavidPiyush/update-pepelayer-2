import Image from "next/image";

import tokomonicBg from "@/public/tokoenmic.png";
import pieChart from "@/public/pie-chart.png";

function Tokomonic() {
  return (
    <section className=" relative mt-20">
      <div className="relative lg:h-screen h-[80vh]">
        <Image
          src={tokomonicBg}
          alt="background"
          fill
          quality={50}
          palaceholder={"blur"}
          className="opacity-20"
        />
      </div>
      <div className="absolute top-0 flex justify-center items-center flex-col w-full">
        <div className="text-center space-y-3 mt-12 flex flex-col justify-center items-center">
          <h4 className="text-2xl font-bold text-[#e1a313]">About Our Token</h4>
          <h2 className="text-4xl font-bold text-[#e1a313]">Our Token Info</h2>
          <p className="text-lg text-[#eee] max-w-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 items-center mt-16 container-div ">
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-6">
              <li className="flex gap-3">
                <p class="border-[7px] border-[#997dea] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Token Name
                  </h6>
                  <p class="text-sm text-[#ccc]">Pepe Coin</p>
                </div>
              </li>
              <li className="flex gap-3">
                <p class="border-[7px] border-[#e66392] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    CO Pre-sale starts in
                  </h6>
                  <p class="text-sm text-[#ccc]">June 15-30, 2025</p>
                </div>
              </li>
              <li className="flex gap-3">
                <p class="border-[7px] border-[#2acd72] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">Platform</h6>
                  <p class="text-sm text-[#ccc]">Ethereum based</p>
                </div>
              </li>
              <li className="flex gap-3">
                <p class="border-[7px] border-[#1eb8e0] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    PreICO price
                  </h6>
                  <p class="text-sm text-[#ccc]">1 ETH = 1,000 Token</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-6">
              <li className="flex gap-3">
                <p class="border-[7px] border-[#1eb8e0] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Token Soft cap
                  </h6>
                  <p class="text-sm text-[#ccc]">$18.000.000</p>
                </div>
              </li>
              <li className="flex gap-3">
                <p class="border-[7px] border-[#f5a67e] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Token Hard Cap
                  </h6>
                  <p class="text-sm text-[#ccc]">$78.000.000</p>
                </div>
              </li>
              <li className="flex gap-3">
                <p class="border-[7px] border-[#997dea] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Total Supply
                  </h6>
                  <p class="text-sm text-[#ccc]">250.000.000 Token</p>
                </div>
              </li>
              <li className="flex gap-3">
                <p class="border-[7px] border-[#e66392] w-8 h-8 rounded-full"></p>
                <div>
                  <h6 className="text-white text-lg font-semibold">
                    Sold Tokens
                  </h6>
                  <p class="text-sm text-[#ccc]">49,828,000 Token</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative ">
            <Image
              src={pieChart}
              fill
              alt="pie chart"
              className="object-cover object-center"
              quality={90}
              palaceholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokomonic;
