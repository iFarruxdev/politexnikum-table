import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

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
        <p style={{ margin: 0, fontWeight: 500, marginBottom: '7px' }}>{label}</p>
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

const data = [
  { name: 'Katta o‘qituvchilar', "umumiy: 90": 20, color: 'var(--decorative-color-1)' },
  { name: 'Yetakchi o‘qituvchilar', "umumiy: 90": 30, color: 'var(--decorative-color-2)' },
  { name: 'Oliy o‘qituvchilar', "umumiy: 90": 40, color: 'var(--decorative-color-3)' },
];

const CustomLegendBelow = ({ items }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
      }}
    >
      {items.map((it, idx) => (
        <div
          key={`legend-${idx}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '4px 8px',
            borderRadius: 8,
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              background: it.color,
              borderRadius: 3,
              display: 'inline-block',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.05) inset',
            }}
          />
          <span style={{ fontSize: 14, fontWeight: 500 }}>{it.name}</span>
        </div>
      ))}
    </div>
  );
};

const StackedBarChart = () => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '700px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Bar dataKey="umumiy: 90" stackId="a" fill="#192336">
            {data.map((item, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <CustomLegendBelow items={data} />
    </div>
  );
};

export default StackedBarChart;