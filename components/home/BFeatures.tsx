import Image from "next/image"

import SectionHeading from "../site/SectionHeading"
import AnalyserImage from "/public/images/a4.jpg"
import AQIImage from "/public/images/a7.jpg"

type Props = {}

const BFeatures = (_props: Props) => {
  return (
    <div>
      <section className="mt-38 md:mt-30 pb-35 relative">
        <div className="container mx-auto text-center bg-secondary py-2">
          <SectionHeading title="Features" />
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto mt-2">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <Image
                  alt="..."
                  src={AnalyserImage}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-slate-700">
                    REAL-TIME SOURCE APPORTIONMENT OF PM2.5 (RSA)
                  </h4>
                </blockquote>
              </div>
            </div>
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto mt-2">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <Image
                  alt="..."
                  src={AQIImage}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-slate-700">
                    AIR QUALITY FORECASTING (AQF)
                  </h4>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BFeatures
