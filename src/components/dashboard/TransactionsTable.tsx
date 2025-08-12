import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { format } from "date-fns";
import { CalendarIcon, ArrowUpDown, Search, Filter } from "lucide-react";

interface Transaction {
  id: string;
  date: Date;
  description: string;
  category: string;
  amount: number;
  status: "completed" | "pending" | "failed";
}

interface TransactionsTableProps {
  transactions?: Transaction[];
}

const TransactionsTable = ({
  transactions: propTransactions,
}: TransactionsTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [dateRange, setDateRange] = useState<Date | undefined>(undefined);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Transaction;
    direction: "asc" | "desc";
  } | null>(null);

  // Default transactions if none are provided
  const defaultTransactions: Transaction[] = [
    {
      id: "1",
      date: new Date("2023-05-15"),
      description: "Grocery Shopping",
      category: "Food",
      amount: 125.65,
      status: "completed",
    },
    {
      id: "2",
      date: new Date("2023-05-14"),
      description: "Monthly Rent",
      category: "Housing",
      amount: 1200.0,
      status: "completed",
    },
    {
      id: "3",
      date: new Date("2023-05-13"),
      description: "Electricity Bill",
      category: "Utilities",
      amount: 85.2,
      status: "pending",
    },
    {
      id: "4",
      date: new Date("2023-05-12"),
      description: "Online Subscription",
      category: "Entertainment",
      amount: 15.99,
      status: "completed",
    },
    {
      id: "5",
      date: new Date("2023-05-11"),
      description: "Gas Station",
      category: "Transportation",
      amount: 45.75,
      status: "completed",
    },
    {
      id: "6",
      date: new Date("2023-05-10"),
      description: "Restaurant Dinner",
      category: "Food",
      amount: 78.5,
      status: "failed",
    },
    {
      id: "7",
      date: new Date("2023-05-09"),
      description: "Mobile Phone Bill",
      category: "Utilities",
      amount: 60.0,
      status: "completed",
    },
  ];

  const transactions = propTransactions || defaultTransactions;

  // Handle sorting
  const requestSort = (key: keyof Transaction) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Apply filters and sorting
  const filteredAndSortedTransactions = useMemo(() => {
    let filtered = [...transactions];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (transaction) =>
          transaction.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          transaction.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Apply category filter
    if (categoryFilter && categoryFilter !== "all") {
      filtered = filtered.filter(
        (transaction) => transaction.category === categoryFilter,
      );
    }

    // Apply date filter
    if (dateRange) {
      filtered = filtered.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
          transactionDate.getDate() === dateRange.getDate() &&
          transactionDate.getMonth() === dateRange.getMonth() &&
          transactionDate.getFullYear() === dateRange.getFullYear()
        );
      });
    }

    // Apply sorting
    if (sortConfig !== null) {
      filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return filtered;
  }, [transactions, searchTerm, categoryFilter, dateRange, sortConfig]);

  // Get unique categories for filter dropdown
  const categories = useMemo(() => {
    return Array.from(new Set(transactions.map((t) => t.category)));
  }, [transactions]);

  // Status badge color mapping
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default";
      case "pending":
        return "secondary";
      case "failed":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Recent Transactions</CardTitle>
        <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div className="relative flex w-full max-w-sm items-center">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="w-[240px] justify-start text-left font-normal"
              onClick={() => setDateRange(dateRange ? undefined : new Date())}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange ? format(dateRange, "PPP") : <span>Pick a date</span>}
            </Button>

            {(searchTerm ||
              (categoryFilter && categoryFilter !== "all") ||
              dateRange) && (
              <Button
                variant="ghost"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setDateRange(undefined);
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  onClick={() => requestSort("date")}
                  className="cursor-pointer"
                >
                  Date
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
                <TableHead
                  onClick={() => requestSort("description")}
                  className="cursor-pointer"
                >
                  Description
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
                <TableHead
                  onClick={() => requestSort("category")}
                  className="cursor-pointer"
                >
                  Category
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
                <TableHead
                  onClick={() => requestSort("amount")}
                  className="cursor-pointer text-right"
                >
                  Amount
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
                <TableHead
                  onClick={() => requestSort("status")}
                  className="cursor-pointer"
                >
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4 inline" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedTransactions.length > 0 ? (
                filteredAndSortedTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      {format(new Date(transaction.date), "MMM dd, yyyy")}
                    </TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell className="text-right">
                      ${transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={getStatusBadgeVariant(transaction.status)}
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    No transactions found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsTable;
