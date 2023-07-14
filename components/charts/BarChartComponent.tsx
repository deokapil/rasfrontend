"use client"

import React from "react"
import * as Highcharts from "highcharts"
import { HighchartsReact } from "highcharts-react-official"

import { BarData } from "@/types/reports"

export type BarChartProps = {
  data: Highcharts.Options
  title?: string
}

const defaultOptions: Highcharts.Options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Bar Chart",
  },
}

const BarChartComponent: React.FC<BarChartProps> = ({ data, title }) => {
  const options: Highcharts.Options = data

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default BarChartComponent
