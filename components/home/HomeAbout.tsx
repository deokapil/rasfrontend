import Image from "next/image"

import { Button } from "@/components/ui/button"

import SectionHeading from "../site/SectionHeading"
import aqPic from "/public/images/b1.jpeg"

type Props = {}

const HomeAbout = (_props: Props) => {
  return (
    <section className="py-8 bg-white-100">
      <div className="container max-w-6xl mx-auto m-8">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/6 p-6 text-slate-800">
            <SectionHeading title="About R-AASMAN" />

            <p className="mb-4">
              Air is the prime resource for the sustenance of life on earth. The
              very existence of life on the earth is because there exists an
              atmosphere. All types of vegetation and creatures including human
              beings thrive in the atmosphere in one form or another. For
              example, human beings need a continuous supply of air almost at
              the rate of 10-20 cubic meters per day. It can easily be conceived
              that air not suitable for breathing can make people sick.
            </p>
            <p className="mb-4">
              RAASMAN is an Initiative of Delhi Government to measure, forecast
              and help decrease air pollution.
            </p>
            <Button variant="default">Know More</Button>
          </div>
          <div className="w-full sm:w-3/6 p-6">
            <Image
              className="w-full  mx-auto"
              src={aqPic}
              alt="Air Quality Diagram"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
