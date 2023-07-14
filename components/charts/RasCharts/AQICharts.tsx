import React from "react"
import Highcharts from "highcharts"

import { BarData } from "@/types/reports"

import BarChartComponent from "../BarChartComponent"

type Props = {
  data: BarData[]
  title?: string
}

const AQICharts = ({ data }: Props) => {
  console.log(data)
  const options: Highcharts.Options = {
    chart: {
      type: "column",
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: "{value:%H:%M}",
      },
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        type: "column",
        data: data.map((item) => [item.name, item.y]),
      },
    ],
    colorAxis: {
      min: 0,
      max: 500,
      stops: [
        [0, "#00B050"], // Red color for values 0 to 10
        [0.1, "#92d050"], // Green color for values 10 to 20
        [0.2, "#ffff00"], // Blue color for values 20 to 30
        [0.4, "#ff9900"], // Blue color for values 20 to 30
        [0.6, "#ff0000"], // Blue color for values 20 to 30
        [0.8, "#c00000"], // Blue color for values 20 to 30
      ],
    },
    title: {
      text: "AQI for",
    },
  }

  return <BarChartComponent data={options} title="AQI" />
}

export default AQICharts
