import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", hours: 6.5 },
  { day: "Tue", hours: 7.0 },
  { day: "Wed", hours: 5.8 },
  { day: "Thu", hours: 6.2 },
  { day: "Fri", hours: 7.4 },
  { day: "Sat", hours: 8.1 },
  { day: "Sun", hours: 7.6 },
];

export default function SleepChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="day" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="hours"
          stroke="#14b8a6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
