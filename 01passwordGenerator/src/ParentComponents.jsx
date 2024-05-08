import  { useState, } from 'react';
//import ChildComponent from './ChildComponent';
import ChildComponent from './ChildComponetns';

function ParentComponent() {
  const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log('handleclick is called',Math.random());
//     setCount(count + 1);
//   }, [count]);

function handleClick(){
    console.log('the handle click is called');
    setCount(count + 1);
}

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
