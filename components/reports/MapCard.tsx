"use client"

import dynamic from "next/dynamic"

const isBrowser = () => typeof window !== "undefined" //The approach recommended by Next.js
const DynamicMapCard = dynamic(() => import("./DynamicMapCard"), {
  ssr: false,
})

type Props = {}
// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const MapCard = (props: Props) => {
  return (
    <div className="w-full h-128">
      {!isBrowser() && <DynamicMapCard {...props} />}
    </div>
  )
}

export default MapCard
