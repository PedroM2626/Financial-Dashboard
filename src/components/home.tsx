import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to FinDash</h1>
        <p className="text-muted-foreground mb-8">
          Your Financial Control Dashboard
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Home;
