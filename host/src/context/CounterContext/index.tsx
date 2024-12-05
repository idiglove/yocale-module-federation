import { createContext } from "react";

type CounterContextType = {
  count?: number;
  setCount?: (count: number) => void;
};

export const CounterContext = createContext<CounterContextType>({});

// @ts-ignore
window.CounterContext = CounterContext;