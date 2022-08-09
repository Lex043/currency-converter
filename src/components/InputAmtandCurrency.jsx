import { useState, useEffect } from "react";

const InputAmtandCurrency = () => {
  const [currency, setCurrency] = useState([]);

  const host = "api.frankfurter.app";
  useEffect(() => {
    fetch(`https://${host}/currencies`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCurrency(data);
      })
      .catch((error) => console.log(error));
  }, [setCurrency]);

  console.log(currency);

  for (const key in currency) {
    if (currency.hasOwnProperty(key)) {
      console.log(`${key}`);
    }
  }

  return (
    <div>
      <form action=""></form>
    </div>
  );
};

export default InputAmtandCurrency;
