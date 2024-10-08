
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

function Exchange() {
    return (
      <article className="mt-4 bg-[#000] p-4 rounded-lg">
        <div className="flex flex-row flex-1 mb-2 gap-4 bg-black p-2 rounded-lg">
          <div className="w-full h-10 bg-[#047857] rounded-lg text-center flex items-center justify-center">
            Cryto
          </div>
          <div className="w-full h-10 rounded-lg text-center text-white flex items-center justify-center">
            <p>card</p>
          </div>
        </div>

        <Select />

        <div className="grid grid-cols-2 mt-2 gap-4 mb-4 rounded-lg bg-[#333] p-4 ">
          <div className=" flex bg-[#000] rounded-lg p-4 flex-col">
            <label htmlFor="" className="text-[#ccc] text-sx text-left mb-2">
              you pay
            </label>

            <Input
              placeholder="00"
              name="amount"
              type="number"
              //   value={formData.amount}
              //   handleChange={handleInputChange}
            />
          </div>
          <div className=" flex bg-[#000] rounded-lg p-4 flex-col">
            <label htmlFor="" className="text-[#ccc] text-sx text-left mb-2">
              you get
            </label>
            <p
              className="text-base bg-[#333] rounded-sm h-10 text-white p-2 py-2"
              id="pepe-coin"
            >
              {/* {pepeCoinAmount} */}
            </p>
          </div>
        </div>

        <Button
          type="button"
          // onClick={handleSubmit}
          // disabled={currentAccount.length > 0 ? "disabled" : ""}
          className="w-full focus:outline-none text-white  focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Buy And Stake Pepe Coin
        </Button>
      </article>
    );
}

export default Exchange
