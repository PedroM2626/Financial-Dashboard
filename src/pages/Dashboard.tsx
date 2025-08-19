import { Card } from "@/components/ui/card";
import Sidebar from "@/components/dashboard/Sidebar";
import MetricsCards from "@/components/dashboard/MetricsCards";
import FinancialCharts from "@/components/dashboard/FinancialCharts";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import { EmailReport } from "@/components/dashboard/EmailReport";

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

        {/* Email Report */}
        <div className="mb-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Enviar Relatório</h2>
            <EmailReport 
              reportData={{
                title: 'Relatório Financeiro',
                content: 'Segue em anexo o relatório financeiro solicitado.',
                htmlContent: `
                  <h1>Relatório Financeiro</h1>
                  <p>Segue em anexo o relatório financeiro solicitado.</p>
                  <p>Data: ${new Date().toLocaleDateString('pt-BR')}</p>
                `
              }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
