function Select() {
  return (
    <form className=" mx-auto ">
      <select
        id="cryptocurrency"
        className="bg-[#333]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-white "
      >
        <option>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
          </svg> */}
          choose Wallet
        </option>
        <option value="0x38" className="cursor-pointer">
          Ethereum
        </option>
        <option value="0xA4B1">Arbitrum</option>
        <option value="0x7A">Base</option>
        <option value="BSC">Binance Smart Chain</option>
      </select>
    </form>
  );
}

export default Select;
