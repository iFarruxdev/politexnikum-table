import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: 'Boshlang‘ich o‘qituvchilar',
    soni: 20,
    amt: 2400,
  },
  {
    name: 'O‘rta o‘qituvchilar',
    soni: 30,
    amt: 2210,
  },
  {
    name: 'Yuqori o‘qituvchilar',
    soni: 40,
    amt: 2290,
  },
];

const StackedBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="soni" stackId="a" fill="var(--decorative-color-1)" />
    </BarChart>
  );
};

export default StackedBarChart;