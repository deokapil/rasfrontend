import Link from "next/link"

import { siteConfig } from "@/config/site"
import BFeatures from "@/components/home/BFeatures"
import BFooter from "@/components/home/BFooter"
import BInstitutions from "@/components/home/BInstitutions"
import Base from "@/components/home/Base"
import Hero from "@/components/home/Hero"
import HomeAbout from "@/components/home/HomeAbout"

export default function IndexPage() {
  return (
    <section className="grid items-center gap-6">
      <Base>
        <Hero />
        <HomeAbout />
        <BFeatures />
        <BInstitutions />
        <BFooter />
      </Base>
    </section>
  )
}
