'use client';

type Props = {};

const Hero = (_props: Props) => {
  return (
    <div className="pt-24 bg-hero-pattern bg-no-repeati bg-cover">
      <div className="container mx-auto">
        <div className="px-2 mx-auto flex flex-wrap flex-col md:flex-row items-center relative z-0">
          <div className="w-full md:w-3/6 py-6 text-center"></div>
          <div className="flex flex-col w-full md:w-3/6 justify-center items-start text-center md:text-left">
            <h1 className="my-6 md:text-5xl text-3xl font-bold leading-tight">
              Real-time Advanced Air Source Management Network
            </h1>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
