import { useState } from "react";

const InputAmtandCurrency = ({ currency, text, setText }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [respRates, setRespRates] = useState([]);
  const [resp, setResp] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const host = "api.frankfurter.app";
      const response = await fetch(
        `https://${host}/latest?amount=${text}&from=${from}&to=${to}`
      );
      const data = await response.json();
      setResp(data);
      setRespRates(data.rates);
      setErrorMessage("");
    } catch (error) {
      setRespRates("");
      setErrorMessage(error.message);
    }
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:flex-row sm:items-end"
      >
        <div className="flex flex-col">
          <label className="font-medium">Amount</label>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="border-current border-2 h-12 w-full rounded-md outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">From</label>
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
          <label className="font-medium">To</label>
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

        <button
          type="submit"
          className="border-2 border-current h-12 px-10 rounded-md outline-none"
        >
          Convert
        </button>
      </form>

      <div className="pt-10 text-4xl text-center">
        {errorMessage && <div>{errorMessage}</div>}
        {Object.keys(respRates).map((key, index) => (
          <p key={index}>
            {respRates[key]} {key}
          </p>
        ))}
      </div>
    </section>
  );
};

export default InputAmtandCurrency;
