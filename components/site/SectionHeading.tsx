import React from "react"

type Props = {
  title: string
  [x: string]: any
}

const SectionHeading = (props: Props) => {
  return (
    <>
      <h2 className="w-full my-2 text-3xl md:text-4xl font-bold leading-tight text-center light:text-slate-800 dark:text-slate-200">
        {props.title}
      </h2>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
    </>
  )
}

export default SectionHeading
