import React from 'react';

function About() {
  return (
    <div className="flex p-11">
      <div>
        <div>
          <h1 className="heading text-6xl text-white tracking-tight font-medium">
            This is an{' '}
            <span className="text-green-500">
              intelligent<br></br>
            </span>{' '}
            trading Platform
          </h1>
        </div>
        <div className="about pt-[8vh]">
          <h4 className="text-zinc-400 text-lg">
            Buy and sell 100+ cryptocurrencies with 20+ fiat currencies.
            <br></br>Access, manage, and spend your funds anytime with Crypto
            <br></br>App
          </h4>
        </div>
        <div className="pt-[8vh] flex flex-row justify-between items-center  text-white ">
          <div className="flex flex-col justify-center items-center  font-medium">
            <div className="text-2xl">1M+</div>
            <div className="text-green-500  text-sm">Total User</div>
          </div>

          <div className="flex flex-col justify-center items-center  font-medium">
            <div className="text-2xl">360M</div>
            <div className="text-green-500 text-sm">Coverage</div>
          </div>
          <div className="flex flex-col justify-center items-center  font-medium">
            <div className="text-2xl">8.5%</div>
            <div className="text-green-500 text-sm">Intrest</div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-[80vh] h-[80vh] bg-cover bg-blend-darken p-4 ml-[36vh]"
          src="./hand.png"
          alt="Description of the image"
        />
      </div>
    </div>
  );
}

export default About;
