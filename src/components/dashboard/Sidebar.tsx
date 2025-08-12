import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  PieChart,
  TrendingUp,
  Wallet,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem = ({ icon, label, href, isActive = false }: NavItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      <div className="w-5 h-5">{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex h-full w-[250px] flex-col border-r bg-background p-4">
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="rounded-md bg-primary p-1">
          <Wallet className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-xl font-bold">FinDash</h1>
      </div>

      <nav className="mt-8 flex flex-col gap-2">
        <NavItem
          icon={<Home className="h-5 w-5" />}
          label="Dashboard"
          href="/"
          isActive={currentPath === "/" || currentPath === "/dashboard"}
        />
        <NavItem
          icon={<TrendingUp className="h-5 w-5" />}
          label="Investments"
          href="/investments"
          isActive={currentPath === "/investments"}
        />
        <NavItem
          icon={<PieChart className="h-5 w-5" />}
          label="Expenses"
          href="/expenses"
          isActive={currentPath === "/expenses"}
        />
        <NavItem
          icon={<Wallet className="h-5 w-5" />}
          label="Budgets"
          href="/budgets"
          isActive={currentPath === "/budgets"}
        />
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <NavItem
          icon={<Settings className="h-5 w-5" />}
          label="Settings"
          href="/settings"
          isActive={currentPath === "/settings"}
        />
        <button className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
