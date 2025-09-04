"use client";
import { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const reset = () => setCount(0);

  const customHtml = () => {
    if (count > 10) {
      return <h2 className="text-xl font-bold">Hai superato 10!!</h2>;
    }
    return null;
  };

  return (
    <>
      <h1>Test Component</h1>
      {customHtml()}
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
}
