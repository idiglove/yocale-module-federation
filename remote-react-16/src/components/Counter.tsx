// @ts-nocheck

const Counter = ({ CounterContext }) => {
  return (
    <CounterContext.Consumer>
      {({ count }: { count: number }) => {
        return (
          <p
            style={{
              backgroundColor: "lightblue",
              padding: "1rem",
              color: "black",
            }}
          >
            This is a React 16 Vite app. This is count from context: {count}
          </p>
        );
      }}
    </CounterContext.Consumer>
  );
};

export default Counter;
