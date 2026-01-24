import "./App.css";
import { Converter } from "./components/converter";

function App() {
  return (
    <div className="App">
      <h1> Currency Converter </h1>
      <div className="line">
        <Converter currencyA="USD" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="USD"></Converter>
      </div>
    </div>
  );
}

export default App;
