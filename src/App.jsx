import { useState, useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import InputAmtandCurrency from "./components/InputAmtandCurrency";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-screen justify-center items-center bg-[#ffe9d6]">
        <InputAmtandCurrency />
      </div>
    </QueryClientProvider>
  );
}

export default App;
