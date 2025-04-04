
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

type AssetChartProps = {
  data: Array<{ value: number }>;
  isPositive: boolean;
  className?: string;
}

export function AssetChart({ data = [], isPositive, className = "chart-container" }: AssetChartProps) {
  // Ensure we have valid data before rendering the chart
  if (!data || data.length === 0) {
    return <div className={className}>No data</div>;
  }

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#05c48a" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#05c48a" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ea384d" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#ea384d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke={isPositive ? "#05c48a" : "#ea384d"} 
            fillOpacity={1} 
            fill={isPositive ? "url(#colorPositive)" : "url(#colorNegative)"} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
