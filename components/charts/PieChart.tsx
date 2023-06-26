'use client';
import React from 'react';

import Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';

import { PIData } from '@/types/index';
if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
}

export type PieChartProps = {
  data: PIData[];
  title: string;
};

const PieChart: React.FC<PieChartProps> = ({ data, title }: PieChartProps) => {
  const options: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: title,
    },
    series: [
      {
        name: title,
        data,
        type: 'pie',
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
