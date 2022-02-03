import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/pages/login";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewSignalProviderPage from "./pages/signal-provider/view-signal-provider";
import { PagesLayout } from "./components/layouts/PagesLayout";
import { useState } from "react";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import JoinCopyTraderPage from "./pages/copy-trading/join-copy-trader";
import { ViewCopyTraderListPage } from "./pages/copy-trading/view-copy-trader-list";
import { ViewCopyTraderSignalPage } from "./pages/copy-trading/view-copy-trader-signal";
import JoinSignalProviderPage from "./pages/signal-provider/join-signal-trader";
import { CreateNewSignalPage } from "./pages/signal-provider/create-signal";
import { PriceComparisonPage } from "./pages/price-comparison";
import { TradeTerminalPage } from "./pages/trade-terminal";
import { PortfolioPerformancePage } from "./pages/portfolio-performance";
import { ExchangeAccountPage } from "./pages/exchange-account/exchange-account";

function App() {
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Login />
            </DefaultLayout>
          }
        />
        <Route
          path="/favourites"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewSignalProviderPage />
            </PagesLayout>
          }
        />
        {/* copy trading */}
        <Route
          path="/copy-trading/join-copy-trader"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <JoinCopyTraderPage />
            </PagesLayout>
          }
        />
        <Route
          path="/copy-trading/view-copy-trader-list"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewCopyTraderListPage />
            </PagesLayout>
          }
        />
        <Route
          path="/copy-trading/view-copy-trader-signal"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewCopyTraderSignalPage />
            </PagesLayout>
          }
        />
        {/*  */}
        {/* Signal Provider */}
        {/*  */}
        <Route
          path="/signal-provider/join-signal-trader"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <JoinSignalProviderPage />
            </PagesLayout>
          }
        />
        <Route
          path="/signal-provider/view-signal-provider"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewSignalProviderPage />
            </PagesLayout>
          }
        />
        <Route
          path="/signal-provider/view-provider-signal"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewCopyTraderSignalPage />
            </PagesLayout>
          }
        />
        <Route
          path="/signal-provider/create-signal"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <CreateNewSignalPage />
            </PagesLayout>
          }
        />
        {/*  */}
        {/* Price Comparison */}
        {/*  */}
        <Route
          path="/price-comparison"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <PriceComparisonPage />
            </PagesLayout>
          }
        />
        {/*  */}
        {/* Trade Terminal */}
        {/*  */}
        <Route
          path="/trade-terminal"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <TradeTerminalPage />
            </PagesLayout>
          }
        />
        {/*  */}
        {/* Portfolio Performance */}
        {/*  */}
        <Route
          path="/portfolio-performance"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <PortfolioPerformancePage />
            </PagesLayout>
          }
        />
        {/*  */}
        {/* Reports */}
        {/*  */}
        <Route
          path="/reports/trade-signals"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewCopyTraderSignalPage />
            </PagesLayout>
          }
        />
        <Route
          path="/reports/my-trades"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ViewCopyTraderSignalPage />
            </PagesLayout>
          }
        />
        {/*  */}
        {/* Exchange Account */}
        {/*  */}
        <Route
          path="/exchange-account/exchange-account"
          element={
            <PagesLayout
              collapseSidebar={collapseSidebar}
              handleHamburguerClick={() => setCollapseSidebar(!collapseSidebar)}
            >
              <ExchangeAccountPage />
            </PagesLayout>
          }
        />
        {/*  */}
      </Routes>
    </Router>
  );
}
export default App;
