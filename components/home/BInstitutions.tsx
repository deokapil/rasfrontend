import Image from "next/image"

import SectionHeading from "../site/SectionHeading"
import IITKLogo from "/public/images/ii1.jpeg"
import IITDLogo from "/public/images/ii2.jpeg"
import TERILogo from "/public/images/ii3.jpeg"
import AirshedLogo from "/public/images/ii4.jpeg"

type Props = {}

const BInstitutions = (_props: Props) => {
  return (
    <div>
      <section className="mt-28 md:mt-20 relative bg-green-50 py-2">
        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <SectionHeading title="Institutions Involved" />
            <div className="m-auto grid lg:grid-cols-4 md:grid-cols-2 gap-2 content-center">
              <div className="bg-white p-4 shadow-md rounded-md flex justify-center">
                <Image src={IITKLogo} alt="IIT Kanpur" height={120} />
              </div>
              <div className="bg-white p-4 shadow-md rounded-md flex justify-center">
                <Image src={IITDLogo} alt="IIT Delhi" height={120} />
              </div>

              <div className="bg-white p-4 shadow-md  rounded-md flex justify-center">
                <Image src={TERILogo} alt="TERI" height={120} />
              </div>
              <div className="bg-white p-4 shadow-md rounded-md flex justify-center">
                <Image src={AirshedLogo} alt="Airshed" height={120} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BInstitutions
