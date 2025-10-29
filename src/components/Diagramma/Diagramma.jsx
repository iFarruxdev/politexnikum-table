import * as React from 'react';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { label: "O'g'il bololar", value: 700, color: '#0088FE' },
  { label: 'Qiz bolalar', value: 500, color: '#FF8042' },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function Diagramma() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 93,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 15,
        },
      }}
      {...sizing}
    />
  );
}