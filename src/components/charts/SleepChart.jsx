import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
  { day: "Mon", hours: 6.5 },
  { day: "Tue", hours: 7.2 },
  { day: "Wed", hours: 6.8 },
  { day: "Thu", hours: 7.5 },
  { day: "Fri", hours: 8.1 },
  { day: "Sat", hours: 7.9 },
  { day: "Sun", hours: 7.3 },
];

export default function SleepChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={sampleData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="hours" stroke="#0d9488" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
