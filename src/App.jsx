import { useEffect } from "react";
import InputAmtandCurrency from "./components/InputAmtandCurrency";

function App() {
  const host = "api.frankfurter.app";
  useEffect(() => {
    fetch(`https://${host}/latest`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <InputAmtandCurrency />
    </div>
  );
}

export default App;
