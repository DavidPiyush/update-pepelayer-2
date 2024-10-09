"use client";
import { useState } from "react";
import { useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import toast, { Toaster } from "react-hot-toast"; // Ensure correct import

import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import { calculatePepeCoinAmount } from "@/app/_utlis/convertEtherToPepe";

function Exchange() {
  const [inputValue, setInputValue] = useState("");
  const [pepeCoinAmount, setPepeCoinAmount] = useState(null);
  const [loading, setLoading] = useState(false); // Track loading state
  const { sendTransaction, isPending, isSuccess, error } = useSendTransaction();

  // Handle input change for ETH amount
  function handleInputChange(e, name) {
    const { value } = e.target;
    setInputValue(value);

    if (name === "amount") {
      const validNumber = value !== "" && !isNaN(Number(value));

      if (validNumber) {
        const pepeAmount = calculatePepeCoinAmount(Number(value));
        setPepeCoinAmount(pepeAmount);
      } else {
        setPepeCoinAmount(null);
      }
    }
  }

  // Handle sending the transaction
  async function handleSendTransaction() {
    try {
      setLoading(true); // Start loading

      const transaction = sendTransaction({
        to: "0xD53f30a45Bb3F338e6a0Cf1ee6E6Fb0303FCAb70",
        value: parseEther(inputValue),
      });
      if (isSuccess) {
        toast.success("Transaction successful!"); // Show success toast
      }
    } catch (err) {
      // Check if the user rejected the transaction
      toast.error("Transaction failed. Please try again.");

      console.error("Transaction failed:", err);
    } finally {
      setLoading(false); // End loading
    }
  }

  
  return (
    <article className="mt-4 bg-[#000] p-4 rounded-lg">
      <div className="flex flex-row flex-1 mb-2 gap-4 bg-black p-2 rounded-lg">
        <div className="w-full h-10 bg-[#047857] rounded-lg text-center flex items-center justify-center">
          Crypto
        </div>
        <div className="w-full h-10 rounded-lg text-center text-white flex items-center justify-center">
          <p>Card</p>
        </div>
      </div>
      <Select />
      <div className="grid grid-cols-2 mt-2 gap-4 mb-4 rounded-lg bg-[#333] p-4">
        <div className="flex bg-[#000] rounded-lg p-4 flex-col">
          <label htmlFor="" className="text-[#ccc] text-sx text-left mb-2">
            You pay
          </label>
          <Input
            placeholder="00"
            name="amount"
            type="text"
            value={inputValue}
            handleChange={handleInputChange}
          />
        </div>
        <div className="flex bg-[#000] rounded-lg p-4 flex-col">
          <label htmlFor="" className="text-[#ccc] text-sx text-left mb-2">
            You get
          </label>
          <p
            className="text-base bg-[#333] rounded-sm h-10 text-white p-2 py-2"
            id="pepe-coin"
          >
            {Number(pepeCoinAmount) > 0
              ? Number(pepeCoinAmount).toFixed(2)
              : ""}
          </p>
        </div>
      </div>

      {/* Display error message directly in case of any issues */}
      {/* {error && toast.error("Transaction rejected by the user.")} */}

      <Button
        type="button"
        className="w-full focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={handleSendTransaction}
        disabled={loading || isPending} // Disable button when loading
      >
        {loading || isPending ? (
          <span className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Buy And Stake Pepe Coin"
        )}
      </Button>

      {/* Include the Toaster component to display notifications */}
      <Toaster />
    </article>
  );
}

export default Exchange;
