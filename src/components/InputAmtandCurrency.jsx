import { useState, useEffect } from "react";

const InputAmtandCurrency = () => {
  const [currency, setCurrency] = useState([]);

  const host = "api.frankfurter.app";
  useEffect(() => {
    fetch(`https://${host}/currencies`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrency(data);
      })
      .catch((error) => console.log(error));
  }, [setCurrency]);

  console.log(currency);

  return (
    <section>
      <form action="">
        <div>
          <label>From</label>
          <select name="" id="">
            {Object.keys(currency).map((key, index) => (
              <option key={index} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>To</label>
          <select name="" id="">
            {Object.keys(currency).map((key, index) => (
              <option key={index} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
};

export default InputAmtandCurrency;
