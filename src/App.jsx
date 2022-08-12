import { useState, useEffect } from "react";
import InputAmtandCurrency from "./components/InputAmtandCurrency";

function App() {
  const [currency, setCurrency] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const host = "api.frankfurter.app";
    fetch(`https://${host}/currencies`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setCurrency(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setCurrency, text]);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <InputAmtandCurrency text={text} setText={setText} currency={currency} />
    </div>
  );
}

export default App;
