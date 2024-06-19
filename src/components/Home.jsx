import starIcon from "../assets/star-yellow.png";
import arrowRightIcon from "../assets/arrow-right-icon.png";
import groupCreditCard from "../assets/imgCardGroup.png";
import padlockIcon from "../assets/padlock-black-icon.png";
import checkImg from "../assets/check-green.png";
import checkBlueIcon from "../assets/check-blue.png";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="w-full h-14 justify-center text-center gap-4 mt-10">
        <h1 className="text-4xl">Wait ! Your Order In Progress.</h1>
        <h3 className="font-light text-base md:text-xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h3>
      </div>

      <div className="w-full flex justify-center text-center gap-4 py-4 mt-20 md:mt-0">
        <ul
          role="list"
          className="flex flex-row mt-8 gap-4 text-sm leading-6 text-gray-600 sm:gap-56"
        >
          <li className="flex flex-col items-center gap-x-2 md:flex-row md:items-start">
            <svg
              className="h-6 w-6 p-1 flex-none text-white bg-lime-500 rounded-full"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="hidden md:block">Step 1 : Cart Review</p>
            <p className="block md:hidden">Card Review</p>
          </li>
          <li className="flex flex-col items-center gap-x-2 md:flex-row md:items-start">
            <svg
              className="h-6 w-6 p-1 flex-none text-white bg-lime-500 rounded-full"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd"
              />
            </svg>
            <p className="hidden md:block">Step 2 : Checkout</p>
            <p className="block md:hidden">Checkout</p>
          </li>
          <li className="flex flex-col items-center gap-x-2 md:flex-row md:items-start">
            <svg
              className="h-6 w-6 p-1 flex-none text-white bg-blue-500 rounded-full"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <text
                x="50%"
                y="60%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-size="16"
                font-family="Arial, sans-serif"
              >
                3
              </text>
            </svg>
            <p className="hidden md:block">Step 3: Special Offer</p>
            <p className="block md:hidden font-bold ">Special Offer</p>
          </li>
          <li className="flex flex-col items-center gap-x-2 md:flex-row md:items-start">
            <svg
              className="h-6 w-6 p-1 flex-none bg-white border border-blue-500 rounded-full"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <text
                x="50%"
                y="60%"
                dominant-baseline="middle"
                text-anchor="middle"
                font-size="17"
                font-family="Arial, sans-serif"
                className="text-blue-500"
              >
                4
              </text>
            </svg>
            <p className="hidden md:block">Step 4 : Confirmation</p>
            <p className="block md:hidden">Confirmation</p>
          </li>
        </ul>
      </div>

      <div className="container mx-auto bg-gray-100 p-6 mt-6 rounded-lg">
        <div className="flex flex-col md:flex-row gap-6">
          {/* PRIMERA SECCION */}
          <div className="hidden md:flex flex-1 bg-white">
            <div className="flex flex-col gap-6 bg-gray-100">
              <img
                src="https://s3-alpha-sig.figma.com/img/ae69/c276/4b81b2e6a429f79dc3a06643582245fb?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lpVPxUvb3jFgynxpofATi-7zO-L1MOaI~iHvYlzR0ZLGxUwGD9PPx7SVJADvjzw0rsaJvTnSMhepn0stm1JQi~B-~0u5z0gKqq7HlNpBph2HxLW5G97DTCwTrMVY38sflTjQ8L-EzFg2lQx4D7G3TzzNGvT2HTcz7VMdUamVJ3wbQVq-WmEXWBpQHx9yJs2-iyd-dEWDuANqxD7U2tm7oX~93AKWRcNxtG3qFzPd3IVQhIfJzTBagiOTb9ku9AX~NoQVRtLl37sibWm-D-ejjLxbre3DUAN9EtCkeuhPV79snpZ~7kTxz2u4G9zAnyogSIy2oqylHVKaegGvsfuNCw__"
                alt="imgClarifion"
                className="w-full rounded-lg"
              />
              <div className="container bg-white rounded-lg">
                <div className="flex flex-row gap-5 p-3">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/ab94/948c/bfe5570b6db010c23b8479919f8ba436?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akLPDY2P-qwB176D4a32Nywl3bs2wRuFTJn1xQmY1khaf-YTSV7cCfW2zq7xoURj~12f1Bc7KU2h80ukWeuXnwKFjfyNvBWQEhNsi3E8LTZ6MdwAg9zWrPQJMbJCTq0khLwMzqpdXXYibPMlpwhcylh3sktW6PdUz0DqAcxRbJFks6Bow1uxf0oCsdDVIQ-ZwLFE1-8npgeav0OeRxM4DFfu4ANpjtzJfwunvQrRqoCs-Dcm46j26ahn-LPfnUpuRLv3HzLAMAAbzlzAZoHFsRDUKX754t~9vvAUnislY9GW7XxCyM1EC9~daYxNpG0mNTvVwXWLTY99rH34fG5CPw__"
                    alt="imgAvatar"
                    className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
                  />
                  <div className="flex flex-col justify-center">
                    <div className="w-full flex flex-row">
                      <img className="w-6" src={starIcon} />
                      <img className="w-6" src={starIcon} />
                      <img className="w-6" src={starIcon} />
                      <img className="w-6" src={starIcon} />
                      <img className="w-6" src={starIcon} />
                    </div>
                    <div className="flex flex-row items-center">
                      <h4 className="font-bold text-xl w-16">Ken T.</h4>
                      <div className="flex flex-row ml-5 gap-2">
                        <img
                          src={checkImg}
                          alt="imgCheck"
                          className="w-5 h-5"
                        />
                        <span className="text-emerald-500">
                          Verified Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  “As soon as the Clarifions arrived I put one in my bedroom.
                  This was late in the afternoon. When I went to the bedroom in
                  the evening it smelled clean. When I went to bed I felt I
                  could breathe better. Wonderful.”
                </p>
              </div>
            </div>
          </div>

          {/* SEGUNDA SECCION */}
          <div className="flex-1 bg-gray-100">
            {/* title */}
            <h2 className="font-bold mb-4 text-xl md:text-4xl">
              <span className="text-blue-500">ONE TIME ONLY</span> special price
              for 6 extra Clarifion for only{" "}
              <span className="text-blue-500">$14 each</span>($84.00 total!)
            </h2>
            {/* Card */}
            <div className="flex w-full  flex-row rounded-xl bg-gray-100  text-gray-700 h-28">
              <div className="relative m-0 w-1/3 shrink-0 overflow-hidden rounded-lg bg-blue-500 bg-clip-border text-gray-700">
                <img
                  src="https://s3-alpha-sig.figma.com/img/d7dc/d812/be356da38eef349d3173d8e6588e7d74?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OBgoTTYgFQHF30k-OabDfq5y5BXf~a5nKvZTpLKzOwTgxPrbo2MoRCBFQbQi~yCcjRaQ7SlYtzBZ6w2seUae2o0gkvXemiUi3l-fChz4wDJvMcd3k~nvQSMZjy3gflX5DYDzd~DERQI0tCtdSxZNGdZ2xDy2v5SCy3zb6V0r1FjkIf-wt2p5SYaG8qUmYwnplj0cI1GsJugOLux~-nFXLP66vUcFlnfaVD2RNgevwHQbqDdVNwCeUPXGPuD3YZAzIuNSLz9-IWdF27ekyfDfis6AYv2FPZRIlpdvF3losrB3BsaYP1DuAZ75APOiOk9q3oa1bxnTqeJLZt7o1aw~ww__"
                  alt="image"
                  className=" md:w-24  md:h-full md:ml-14 object-cover"
                />
              </div>
              <div className="px-6">
                <div className="flex flex-row items-end gap-5 md:gap-20">
                  <h4 className="mb-2 block font-sans text-base md:text-2xl">
                    Clarifion Air Ionizer
                  </h4>
                  <div className="flex flex-row gap-1">
                    <p className="text-gray-500 line-through">$180</p>
                    <h4 className="text-blue-500 text-base md:text-2xl">$84</h4>
                  </div>
                </div>
                <div className="w-full flex flex-row">
                  <img className="w-6" src={starIcon} />
                  <img className="w-6" src={starIcon} />
                  <img className="w-6" src={starIcon} />
                  <img className="w-6" src={starIcon} />
                  <img className="w-6" src={starIcon} />
                </div>
                <ul>
                  <li className="flex gap-x-3 mt-1">
                    <svg
                      className="h-3 w-3 mt-1 p-1 flex-none text-white bg-blue-500 rounded-full"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    ></svg>
                    12 left in Stock
                  </li>
                </ul>
                <p className="hidden md:block mt-4 font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
            </div>
            <p className="block md:hidden mt-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
            {/* items */}
            <ul class="text-lg space-y-3 grow mt-4 md:mt-20">
              <li class="flex items-center gap-4">
                <img
                  src={checkBlueIcon}
                  alt="checkBlueicon"
                  className="w-6 h-6"
                />
                <p>
                  Negative Ion Technology may{" "}
                  <span className="font-semibold">help with allergens</span>
                </p>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src={checkBlueIcon}
                  alt="checkBlueicon"
                  className="w-6 h-6"
                />
                <p>
                  Designed for{" "}
                  <span className="font-semibold">air rejuvenation</span>
                </p>
              </li>
              <li class="flex items-center gap-4">
                <img
                  src={checkBlueIcon}
                  alt="checkBlueicon"
                  className="w-6 h-6"
                />
                <p>
                  <span className="font-semibold">Perfect for every room</span>{" "}
                  in all types of places.
                </p>
              </li>
            </ul>
            {/* blue button */}
            <div className="w-full h-16 rounded-lg bg-blue-100 p-1 justify-center text-center flex flex-row gap-2 mt-4 items-center">
              <svg
                className="h-6 w-6 p-1 flex-none text-white bg-blue-500 rounded-full"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <text
                  x="50%"
                  y="60%"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  font-size="16"
                  font-family="Arial, sans-serif"
                >
                  %
                </text>
              </svg>
              <h1>
                Save <span className="text-blue-500">53%</span> and get{" "}
                <span className="text-blue-500">6 extra Clarifision</span> for
                only <span className="text-blue-500">$14 Each</span>.
              </h1>
            </div>
            {/* green button */}
            <div
              className="w-full h-16 rounded-3xl p-1 justify-center text-center flex flex-row gap-2 mt-5 md:mt-14 items-center"
              style={{ background: "#59ae43" }}
            >
              <h3 className="text-white bold text-lg md:text-2xl">
                Yes - Claim my discount
              </h3>
              <img
                className="w-6 fill-white"
                src={arrowRightIcon}
                alt="arrow-icon"
              />
            </div>
            {/* section credit card*/}
            <div className="container w-full text-sm p-1 mt-5 items-center rounded">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center text-center h-20 md:h-12 border-2 border-zinc-300 rounded-lg text-zinc-500">
                <div className="col-span-1 md:col-span-1">Free shipping</div>
                <div className="col-span-1 md:col-span-1 flex flex-row gap-1 justify-center items-center">
                  <img
                    className="w-3 h-3"
                    src={padlockIcon}
                    alt="padlockIcon"
                  />
                  <p>Secure 256-bit SSL encryption.</p>
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                  <img
                    className="w-40 md:w-48"
                    src={groupCreditCard}
                    alt="group-credit-card"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center text-center items-center mt-5 md:mt-12 md:mt-0">
              <h3 className="text-red-500 bold text-lg md:text-2xl underline decoration-red-500">
                No thanks, I don’t want this.
              </h3>
            </div>

            <div className="container w-full flex flex-rox pt-4 text-base md:text-lg">
              <img
                className="w-20 h-20 md:w-24 max-w-20"
                src="https://s3-alpha-sig.figma.com/img/0003/461b/9ab77b5d839615855b972dedd4310061?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lONpfkRNatzadmHH5JYU2g990KfOD-SlVh5qBGCsvRq4-wxyve4B4dgAvaXflMKOvpAgr1vidHY3GyK-pGTkRowYIcD-XmN7vGs1~X8KZc2xxQ3yChmTkhnL6-xWXu-t2AtA9OeTQV0IOs0eN-SaDxKORFBidgABtcNCpblGF2Ii1Szw0V2gzdtDafWs~rsgshB38WLELtfdWkZWuH32VtOg0yvZBAGSQn53aUfJFveyR4OzdEhkvhrJagPC52Yz8aNMF2WIiIfEnpCifsZOn-nw3V3CtIZzSpL~OAngPRUVD-tZFipYqHu73AmQIV2V9w5aCpWkTUgA1ehPMDQ8Fw__"
                alt="imgGuarante"
              />
              <p className="mt-2">
                If you are not completely thrilled with your Clarifion - We have
                a{" "}
                <span className="font-semibold">
                  30 day satisfaction guarantee
                </span>
                . Please refer to our return policy at the bottom of the page
                for more details. Happy Shopping!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
