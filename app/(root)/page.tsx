import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Navbar from "@/components/navbar";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Maggie",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={loggedIn?.firstName || "Guest"}
            subtext="Set, access and manage your finances efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        SET UP FINANCIAL GOALS / RECENT FINANCIAL GOALS WILL APPEAR HERE
      </div>
    </section>
  );
};

export default Home;
