function PepeHeader() {
    return (
      <article className=" ">
        <div className="w-full h-16 bg-neutral-800 rounded-lg mb-3 flex justify-center items-center">
          <h2 className="heading-h3">Buy Pepe Coin</h2>
        </div>
        <div className="w-full h-24 bg-neutral-800 rounded-lg mb-3 p-4 ">
          <article className="flex items-center gap-4">
            <p
              className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl"
              id="days"
            ></p>
            <p
              className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl"
              id="hours"
            ></p>
            <p
              className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl"
              id="minutes"
            ></p>
            <p
              className="h-12 w-32 bg-black text-white flex justify-center items-center rounded-xl"
              id="seconds"
            ></p>
          </article>
          <p className="text-zinc-600 text-center text-base py-1">
            until next price will increased
          </p>
        </div>
      </article>
    );
}

export default PepeHeader
