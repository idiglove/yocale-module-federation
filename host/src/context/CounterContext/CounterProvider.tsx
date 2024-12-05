import { ReactNode, useState } from "react";
import { CounterContext } from ".";

interface CounterProviderProps {
  children: ReactNode;
}

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider
      value={{
        count,
        setCount: () => setCount((prevCount) => prevCount + 1),
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
export default CounterProvider;
