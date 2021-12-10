import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [usd, setUsd] = useState(0);
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onChangeUsd = (event) => {
    let value = event.target.value;
    if (isNaN(value)) {
      value = 0;
    }
    setUsd(value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onChangePrice}>
            <option key="" value="0" />
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <br />
          USD:
          <input
            value={usd}
            onChange={onChangeUsd}
            type="text"
            placeholder="usd"
          />
          <br />
          <span>{usd === 0 || price === 0 ? 0 : usd / price}</span>
        </div>
      )}
    </div>
  );
}

export default App;
