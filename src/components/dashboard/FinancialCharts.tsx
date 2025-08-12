import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface FinancialChartsProps {
  data?: {
    daily?: DataPoint[];
    weekly?: DataPoint[];
    monthly?: DataPoint[];
    yearly?: DataPoint[];
  };
}

interface DataPoint {
  name: string;
  income: number;
  expenses: number;
  savings: number;
}

const FinancialCharts: React.FC<FinancialChartsProps> = ({
  data = {
    daily: [
      { name: "Mon", income: 1200, expenses: 900, savings: 300 },
      { name: "Tue", income: 1400, expenses: 1000, savings: 400 },
      { name: "Wed", income: 1300, expenses: 950, savings: 350 },
      { name: "Thu", income: 1500, expenses: 1100, savings: 400 },
      { name: "Fri", income: 1800, expenses: 1200, savings: 600 },
      { name: "Sat", income: 900, expenses: 800, savings: 100 },
      { name: "Sun", income: 700, expenses: 600, savings: 100 },
    ],
    weekly: [
      { name: "Week 1", income: 8000, expenses: 6000, savings: 2000 },
      { name: "Week 2", income: 8500, expenses: 6200, savings: 2300 },
      { name: "Week 3", income: 9000, expenses: 6500, savings: 2500 },
      { name: "Week 4", income: 9200, expenses: 6800, savings: 2400 },
    ],
    monthly: [
      { name: "Jan", income: 35000, expenses: 25000, savings: 10000 },
      { name: "Feb", income: 32000, expenses: 24000, savings: 8000 },
      { name: "Mar", income: 38000, expenses: 26000, savings: 12000 },
      { name: "Apr", income: 36000, expenses: 27000, savings: 9000 },
      { name: "May", income: 40000, expenses: 28000, savings: 12000 },
      { name: "Jun", income: 42000, expenses: 29000, savings: 13000 },
    ],
    yearly: [
      { name: "2019", income: 420000, expenses: 300000, savings: 120000 },
      { name: "2020", income: 450000, expenses: 320000, savings: 130000 },
      { name: "2021", income: 480000, expenses: 340000, savings: 140000 },
      { name: "2022", income: 520000, expenses: 360000, savings: 160000 },
      { name: "2023", income: 550000, expenses: 380000, savings: 170000 },
    ],
  },
}) => {
  const [chartType, setChartType] = useState<"line" | "bar">("line");
  const [timeFrame, setTimeFrame] = useState<
    "daily" | "weekly" | "monthly" | "yearly"
  >("monthly");

  const currentData = data[timeFrame] || [];

  return (
    <Card className="w-full bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">Financial Trends</CardTitle>
        <div className="flex space-x-2">
          <Button
            variant={chartType === "line" ? "default" : "outline"}
            size="sm"
            onClick={() => setChartType("line")}
          >
            Line Chart
          </Button>
          <Button
            variant={chartType === "bar" ? "default" : "outline"}
            size="sm"
            onClick={() => setChartType("bar")}
          >
            Bar Chart
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="monthly"
          value={timeFrame}
          onValueChange={(value) => setTimeFrame(value as any)}
        >
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "line" ? (
                <LineChart
                  data={currentData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#4ade80"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#f87171"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    stroke="#60a5fa"
                    strokeWidth={2}
                  />
                </LineChart>
              ) : (
                <BarChart
                  data={currentData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill="#4ade80" />
                  <Bar dataKey="expenses" fill="#f87171" />
                  <Bar dataKey="savings" fill="#60a5fa" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FinancialCharts;
