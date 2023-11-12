import React, { useState } from 'react';

export const Index: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const onClick = {
    increment: () => {
      setCount((prevCount) => prevCount + 1);
    },
    decrement: () => {
      setCount((prevCount) => prevCount - 1);
    },
    reset: () => {
      setCount(0);
    },
  };

  // useEffect(() => {
  //   let a = 0;
  //   a = 1;

  //   console.log(count);
  //   const draftState = { a: '' };
  //   draftState.a = '';
  //   const arr = [''];
  //   arr.sort();

  //   const unused = 100;

  // }, []);

  return (
    <div>
      <input type="text" value={count} disabled />
      <div>
        <button onClick={onClick.decrement}>Decrement</button>
        <button onClick={onClick.increment}>Increment</button>
      </div>
      <button onClick={onClick.reset}>Reset</button>
      {/* {0 && <div />} */}
    </div>
  );
};
