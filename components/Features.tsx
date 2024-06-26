import Structure from '../images/Organized.svg';
import Rating from '../images/rating.svg';
import Variety from '../images/variety.svg';
import Market from '../images/market.svg';
import Img from 'next/image';
import "@fontsource/ubuntu"
const Features = () => {
  return (
<main>
<div className="relative w-screen overflow-hidden bg-gray-800 h-min">
  <div className="relative z-20 flex items-center overflow-hidden bg-gray-800">
    <div className="container relative flex p-10 mx-auto">
      <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
        <span className="w-20 h-2 mb-12 bg-white"> </span>
        <h1 className="flex flex-col text-5xl font-black leading-none text-white uppercase font-bebas-neue dark:text-white sm:text-6xl">
          Organised structure
        </h1>
        <p className="mt-5 text-2xl text-white sm:text-base sm:text-2xl">Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.</p>
      </div>
      <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
        <Img src={Structure} layout='fill' className="max-w-xs m-auto md:max-w-sm" alt="image"/>
      </div>
    </div>
  </div>
</div>

<div className="relative w-screen overflow-hidden bg-gray-800 h-min">
  <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
    <div className="container relative flex px-6 py-16 mx-auto">
      <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
        <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"> </span>
        <h1 className="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase dark:text-white sm:text-6xl">
        Reviews and rating system
        </h1>
        <p className="mt-5 text-2xl text-gray-900 sm:text-base sm:text-2xl">Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.</p>
      </div>
      <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
        <Img src={Rating} layout="fill" className="max-w-xs m-auto md:max-w-sm" alt="image"/>
      </div>
    </div>
  </div>
</div>

<div className="relative w-screen overflow-hidden bg-gray-800 h-min">
  <div className="relative z-20 flex items-center overflow-hidden bg-gray-800">
    <div className="container relative flex px-6 py-16 mx-auto">
      <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
        <span className="w-20 h-2 mb-12 bg-white"> </span>
        <h1 className="flex flex-col text-5xl font-black leading-none text-white uppercase font-bebas-neue dark:text-white sm:text-6xl">
        Providing varitey
        </h1>
        <p className="mt-5 text-2xl text-white sm:text-base sm:text-2xl">Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.</p>
      </div>
      <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
        <Img src={Variety} layout="fill" className="max-w-xs m-auto md:max-w-sm" />
      </div>
    </div>
  </div>
</div>

<div className="relative w-screen overflow-hidden bg-gray-800 h-min">
  <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
    <div className="container relative flex px-6 py-16 mx-auto">
      <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
        <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"> </span>
        <h1 className="flex flex-col text-5xl font-black leading-none text-gray-800 uppercase font-bebas-neue dark:text-white sm:text-6xl">
        Providing a better market
        </h1>
        <p className="mt-5 text-2xl text-gray-900 sm:text-base sm:text-2xl">Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.</p>
      </div>
      <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
        <Img src={Market} layout="fill" className="max-w-xs m-auto md:max-w-sm" />
      </div>
    </div>
  </div>
</div>
</main>
  )
}

export default Features
