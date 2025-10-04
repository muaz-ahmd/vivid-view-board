import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useEffect, useState } from "react";

const TestDashboard = () => {
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  useEffect(() => {
    const storedResult = localStorage.getItem("trafficAnalysisResult");
    if (storedResult) {
      setAnalysisResult(JSON.parse(storedResult));
    }
  }, []);

  // Default data when no analysis has been run
  const trafficSignals = analysisResult ? [
    {
      id: `TS-A0${analysisResult.signal_id}`,
      time: `${analysisResult.t_clear} sec`,
      trafficScore: analysisResult.traffic_score,
      safetyPenalty: analysisResult.safety_penalty,
      greenWaveBonus: analysisResult.priority_bonus,
      cps: analysisResult.cps_score,
    }
  ] : [
    {
      id: "TS-A01",
      time: "-- sec",
      trafficScore: 0,
      safetyPenalty: 0,
      greenWaveBonus: 0,
      cps: 0,
    },
  ];

  const barChartData = [
    { name: "Signal 1", "TS-A01": 18 },
    { name: "Signal 2", "TS-A02": 20 },
    { name: "Signal 3", "TS-A03": 12 },
    { name: "Signal 4", "TS-A04": 26 },
  ];

  const pieChartData = [
    { name: "TS-A01", value: 22 },
    { name: "TS-A02", value: 24 },
    { name: "TS-A03", value: 26 },
    { name: "TS-A04", value: 28 },
  ];

  const violationData = [
    { name: "Tailgating", value: 45 },
    { name: "Hard-Braking", value: 25 },
  ];

  const COLORS = {
    "TS-A01": "hsl(var(--chart-teal))",
    "TS-A02": "hsl(var(--chart-red))",
    "TS-A03": "hsl(var(--chart-green))",
    "TS-A04": "hsl(var(--chart-blue))",
  };

  const VIOLATION_COLORS = ["hsl(var(--chart-red))", "hsl(var(--destructive))"];

  return (
    <div className="min-h-screen bg-background p-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Test Dashboard</h1>
        <Select defaultValue="intersection-a">
          <SelectTrigger className="w-64 bg-card border-2 border-foreground">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="intersection-a">Intersection A</SelectItem>
            <SelectItem value="intersection-b">Intersection B</SelectItem>
            <SelectItem value="intersection-c">Intersection C</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {trafficSignals.map((signal) => (
            <Card key={signal.id} className="p-6 bg-card border border-border shadow-sm">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">{signal.id}</h2>
                <div className="text-5xl font-bold mb-4">{signal.time}</div>
                <div className="space-y-1 text-sm">
                  <p>Traffic Score = {signal.trafficScore}</p>
                  <p>Safety Penalty = {signal.safetyPenalty}</p>
                  <p>Green wave bonus = {signal.greenWaveBonus}</p>
                  <p>Comprehensive Priority Score = {signal.cps}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="p-6 bg-card border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-center">Traffic Signal Score Analysis</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barChartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="TS-A01" fill={COLORS["TS-A01"]} />
                <Bar dataKey="TS-A02" fill={COLORS["TS-A02"]} />
                <Bar dataKey="TS-A03" fill={COLORS["TS-A03"]} />
                <Bar dataKey="TS-A04" fill={COLORS["TS-A04"]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-card border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-center">Traffic Signal Score Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-card border border-border shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-center">Violation Counts</h3>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={violationData} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="value" fill={VIOLATION_COLORS[0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>

      <Card className="mt-6 p-8 bg-card border border-border shadow-sm">
        <div className="text-center">
          <p className="text-lg leading-relaxed">
            According to Congestion Priority Score & Green Time Bonus Algorithms we can prioritize the order of flow of traffic on an Intersection A is
          </p>
          <p className="text-xl font-semibold mt-4">
            TS-A04 {">>"} TS-A03 {">>"} TS-A02 {">>"} TS-A01
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TestDashboard;
