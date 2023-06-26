"use client"

import React from "react"
import * as Highcharts from "highcharts"
import { HighchartsReact } from "highcharts-react-official"

import { BarData } from "@/types/reports"

export type BarChartProps = {
  data: BarData[]
  title?: string
}

const BarChartComponent: React.FC<BarChartProps> = ({ data, title }) => {
  console.log(data.map((item) => item.y))
  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: title || "Bar Chart",
    },
    xAxis: {
      categories: data.map((item) => item.name),
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total Fruit Consumption",
      },
    },
    series: [
      {
        type: "column",
        data: data.map((item) => item.y),
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default BarChartComponent
