import { useState } from "react";

const InputAmtandCurrency = ({ currency, text, setText }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFromChange = (e) => {
    setFrom(e.target.value);
    console.log(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const host = "api.frankfurter.app";
      const response = await fetch(
        `https://${host}/latest?amount=${text}&from=${from}&to=${to}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-col">
          <label>Amount</label>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="border-current border-2 h-12 w-full rounded-md outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label>From</label>
          <select
            value={from}
            onChange={handleFromChange}
            className="border-current border-2 h-12 w-full rounded-md outline-none"
          >
            <option value="">None</option>
            {Object.keys(currency).map((key, index) => (
              <option key={index} value={key}>
                {key}- {currency[key]}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>To</label>
          <select
            value={to}
            onChange={handleToChange}
            className="border-current border-2 h-12 w-full rounded-md outline-none"
          >
            <option value="">None</option>
            {Object.keys(currency).map((key, index) => (
              <option key={index} value={key} onChange={handleFromChange}>
                {key}- {currency[key]}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
};

export default InputAmtandCurrency;
