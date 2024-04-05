import React, { useRef } from 'react';

import Bitcoin from './LiveData/Bitcoin';
import Litecoin from './LiveData/Litecoin';
import Solana from './LiveData/Solana';
import Binance from './LiveData/Binance';
import Fil from './LiveData/Fil';

interface Card {
  name: string;
  text: string;
  path: string;
}

function Predict(): JSX.Element {
  const cards: Card[] = [
    {
      name: 'Liquidity',
      text: 'Deep order book liquidity in all market conditions',
      path: 'M19.3788 15.1057C20.9258 11.4421 19.5373 7.11431 16.0042 5.0745C13.4511 3.60046 10.4232 3.69365 8.03452 5.0556L7.04216 3.31879C10.028 1.61639 13.8128 1.4999 17.0042 3.34245C21.4949 5.93513 23.2139 11.4848 21.1217 16.112L22.4635 16.8867L18.2984 19.1008L18.1334 14.3867L19.3788 15.1057ZM4.62961 8.89968C3.08263 12.5633 4.47116 16.8911 8.00421 18.9309C10.5573 20.4049 13.5851 20.3118 15.9737 18.9499L16.9661 20.6867C13.9803 22.389 10.1956 22.5055 7.00421 20.663C2.51357 18.0703 0.794565 12.5206 2.88672 7.89342L1.54492 7.11873L5.70999 4.90463L5.87505 9.61873L4.62961 8.89968ZM8.50421 14.0027H14.0042C14.2804 14.0027 14.5042 13.7788 14.5042 13.5027C14.5042 13.2266 14.2804 13.0027 14.0042 13.0027H10.0042C8.6235 13.0027 7.50421 11.8834 7.50421 10.5027C7.50421 9.122 8.6235 8.00271 10.0042 8.00271H11.0042V7.00271H13.0042V8.00271H15.5042V10.0027H10.0042C9.72807 10.0027 9.50421 10.2266 9.50421 10.5027C9.50421 10.7788 9.72807 11.0027 10.0042 11.0027H14.0042C15.3849 11.0027 16.5042 12.122 16.5042 13.5027C16.5042 14.8834 15.3849 16.0027 14.0042 16.0027H13.0042V17.0027H11.0042V16.0027H8.50421V14.0027Z',
    },
    {
      name: 'Speed',
      text: '2.7m TPS matching engine 50 micro second core latency',
      path: 'M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22063L7.53238 13H13V17.3944L17.263 11H11Z',
    },
    {
      name: 'Security',
      text: 'ISO/IEC 27001:2024, Level 1 compliance. Cryptocurrency Sequerity Standard',
      path: 'M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434Z',
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Scroll one container width to the left
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Scroll one container width to the right
    }
  };

  return (
    <div className="relative first-letter:min-h-screen  overflow-hidden">
      <div className="flex justify-between px-36 items-center">
        <div className="text-4xl font-medium text-white tracking-light">
          <span className="text-green-500">Predict</span> changes and<br></br>{' '}
          signal to sell or buy.
        </div>
        <div className="text-md text-zinc-400 tracking-tighter leading-6 font-normal">
          Analyze thousands of trading transactions and revert patterns using my
          <br></br> machine learning algorithms. Then I predict changes in
          certain points<br></br> and signal to sell or buy currency.
        </div>
      </div>
      {/*Crypto pice and graph card */}
      {/* Horizontal scrolling card  */}
      <div
        className="flex  h-[38vh]  items-center mt-24 overflow-hidden py-11 bg-inherit m-8 pt-[8vh]"
        ref={containerRef}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <Bitcoin />
        <Litecoin />
        <Solana />
        <Binance />
        <Fil />
      </div>

      <div className="flex justify-center px-96 mx-40 py-4">
        <div className="flex w-full justify-between ">
          <div
            className="flex items-center hover:bg-white rounded-xl"
            onClick={scrollLeft}
          >
            {/* Left button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="32"
              fill="green"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </div>
          <div
            className="flex items-center hover:bg-white rounded-xl"
            onClick={scrollRight}
          >
            {/* Right button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="32"
              fill="green"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto mt-8 bg-inherit p-20 overflow-container pt-[8vh]">
        {cards.map((ele, index) => (
          <div
            key={ele.name}
            className="flex w-[36vw] mr-8 rounded-lg p-2 justify-center items-center shadow-md"
          >
            <div className="flex flex-col">
              <div className="text-green-500 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentcolor"
                >
                  <path d={ele.path}></path>
                </svg>
                <div className="text-white font-medium text-xl ml-2">
                  {ele.name}
                </div>
              </div>

              <div className="text-zinc-400 mt-3">{ele.text}</div>
            </div>

            {(index === 0 || index === 1) && (
              <div className="w-0 h-24 border border-dashed m-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Predict;
