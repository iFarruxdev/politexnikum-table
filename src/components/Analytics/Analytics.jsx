import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

// ✅ qo‘shimcha: CustomTooltip komponenti
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    const fillColor = item.payload.color;
    return (
      <div
        style={{
          background: '#fff',
          border: '1px solid #ccc',
          padding: '9px 12px',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}
      >
        <p style={{ margin: 0, fontWeight: 500, marginBottom:"7px" }}>{label}</p>
        <p
          style={{
            margin: 0,
            fontWeight: 500,
            color: fillColor,
          }}
        >
          soni: {item.value}
        </p>
      </div>
    );
  }

  return null;
};

// ✅ Data Base !!!

const data = [
  {
    name: 'Boshlang‘ich o‘qituvchilar',
    soni: 20,
    color: 'var(--decorative-color-1)',
  },
  {
    name: 'O‘rta o‘qituvchilar',
    soni: 30,
    color: 'var(--decorative-color-2)',
  },
  {
    name: 'Yuqori o‘qituvchilar',
    soni: 40,
    color: 'var(--decorative-color-3)',
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
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Bar dataKey="soni" stackId="a" fill="var(--decorative-color-1)">
        {data.map((item, index) => {
          return <Cell key={`cell-${index}`} fill={item.color} />;
        })}
      </Bar>
    </BarChart>
  );
};

export default StackedBarChart;