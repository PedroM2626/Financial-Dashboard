import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  DollarSignIcon,
  PiggyBankIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

const MetricCard = (
  { title, value, change, icon }: MetricCardProps = {
    title: "Metric",
    value: "$0",
    change: 0,
    icon: <DollarSignIcon className="h-5 w-5" />,
  },
) => {
  const isPositive = change >= 0;

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">
              {title}
            </p>
            <h3 className="text-2xl font-bold">{value}</h3>
            <div className="flex items-center mt-2">
              <span
                className={`flex items-center text-xs font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {isPositive ? (
                  <ArrowUpIcon className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-3 w-3 mr-1" />
                )}
                {Math.abs(change)}%
              </span>
              <span className="text-xs text-muted-foreground ml-1">
                vs last period
              </span>
            </div>
          </div>
          <div className="p-2 rounded-full bg-primary/10">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const MetricsCards = () => {
  // Mock data - in a real app, this would come from an API
  const metrics = [
    {
      title: "Income",
      value: "$24,780",
      change: 12.5,
      icon: <DollarSignIcon className="h-5 w-5 text-primary" />,
    },
    {
      title: "Expenses",
      value: "$18,230",
      change: -4.3,
      icon: <WalletIcon className="h-5 w-5 text-primary" />,
    },
    {
      title: "Savings Rate",
      value: "26.4%",
      change: 8.2,
      icon: <PiggyBankIcon className="h-5 w-5 text-primary" />,
    },
    {
      title: "Investment Returns",
      value: "$3,456",
      change: 23.1,
      icon: <TrendingUpIcon className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <div className="w-full bg-background p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsCards;
