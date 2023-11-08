import React, { useEffect } from "react";
import { useGeceModu } from "./hooks/useGeceModu";
import { useAxios } from "./hooks/useAxios";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

const App = () => {
  const [geceModu, setGeceModu] = useGeceModu(false);
  const [coinData, error, loading, getData] = useAxios(
    "get",
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
  );

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={geceModu ? "dark-mode App" : "App"}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      {loading ? "loading " : <Charts coinData={coinData} />}
    </div>
  );
};

export default App;
