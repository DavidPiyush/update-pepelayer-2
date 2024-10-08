function ReferHeader() {
  return (
    <header class="header-el">
      <button id="connectMetaMaskButton" class="metamask-button">
        Connect With Metamask
      </button>
      <div id="walletAddress"></div>
      <div class="container-div flex justify-center items-center gap-12">
        <img
          src="/refers/refer-fluid.jpg"
          alt=""
          class="image-fluid"
        />
        <h1 class="">AIRDROP PEPE LAYER2</h1>
      </div>
    </header>
  );
}

export default ReferHeader;
