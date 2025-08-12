import React from "react";
import { Card } from "@/components/ui/card";
import Sidebar from "@/components/dashboard/Sidebar";
import MetricsCards from "@/components/dashboard/MetricsCards";
import FinancialCharts from "@/components/dashboard/FinancialCharts";
import TransactionsTable from "@/components/dashboard/TransactionsTable";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Financial Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor your financial health and track your progress.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="mb-8">
          <MetricsCards />
        </div>

        {/* Financial Charts */}
        <div className="mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
            <FinancialCharts />
          </Card>
        </div>

        {/* Transactions Table */}
        <div className="mb-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <TransactionsTable />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
