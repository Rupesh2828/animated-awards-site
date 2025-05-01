import { useMemo, useState } from 'react';

import { initialItems } from '../utils/ids';

interface DemoProps {}

function MemoProps({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count],
  );

    
  return (
    <div className='ok'>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default MemoProps;