import dynamic from "next/dynamic"

const DynamicMapCard = dynamic(() => import("./DynamicMapCard"), {
  ssr: false,
})

type Props = {}
// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const MapCard = (props: Props) => {
  return (
    <div className="w-full h-128">
      <DynamicMapCard {...props} />
    </div>
  )
}

export default MapCard
