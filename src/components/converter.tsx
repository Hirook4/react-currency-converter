import { useState } from "react";
import "./converter.css";

type Props = {
  currencyA: string;
  currencyB: string;
};

export const Converter = ({ currencyA, currencyB }: Props) => {
  const [currencyAValue, setCurrencyAValue] = useState(0);
  const [currencyBValue, setCurrencyBValue] = useState(0);

  const handleConverter = async () => {
    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${currencyA}`,
      );
      const data = await response.json();
      const rate = data.rates[currencyB];
      const convertedValue = currencyAValue * rate;
      setCurrencyBValue(convertedValue);
    } catch (error) {
      console.error("api error: ", error);
      return;
    }
  };

  return (
    <div className="converter">
      <h2>
        {currencyA} para {currencyB}
      </h2>
      <div className="center">
        <input
          type="text"
          placeholder="Value"
          onChange={(event) => {
            setCurrencyAValue(parseFloat(event.target.value));
          }}
        ></input>
        <button className="button" onClick={handleConverter}>
          Convert
        </button>
      </div>
      <h2>
        {currencyBValue.toFixed(2)} {currencyB == "BRL" ? "Reais" : "Dólares"}
      </h2>
      Rates By
      <a href="https://www.exchangerate-api.com" target="_blank">
        &nbsp;Exchange Rate API
      </a>
    </div>
  );
};
