// @ts-nocheck

const Counter = ({ CounterContext }) => {
  return (
    <CounterContext.Consumer>
      {({ count }: { count: number }) => {
        return <p>This is a react 16 app. This count from context: {count}</p>;
      }}
    </CounterContext.Consumer>
  );
};

export default Counter;
