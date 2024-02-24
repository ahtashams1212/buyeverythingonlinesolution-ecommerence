import Image from 'next/image';
import home1 from '../../public/Image/home1.jpeg';
import home2 from "../../public/Image/home2.png";
import home3 from "../../public/Image/home3.jpeg";
import home4 from "../../public/Image/home4.webp";
import home5 from "../../public/Image/home5.jpeg";
import home6 from "../../public/Image/home6.webp";
import home7 from "../../public/Image/home7.webp";

export default function Hero() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              An Industrial Take on Streetwear
              </h1>
              <p className="mt-4 text-xl text-gray-500">
              Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image className="h-full w-full object-cover object-center"
                            src={home1}
                            alt="" 
                            width={10000}
                            height={100}
                             />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={home2}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={10000}
                            height={100}
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={home3}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={10000}
                            height={100}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={home4}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={10000}
                            height={100}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={home5}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={10000}
                            height={100}
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={home6}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={10000}
                            height={100}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={home7}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={10000}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  