import React, { useEffect, useState } from 'react'

const Counter=(WrappedComponent,num)=>{ // Full component is given  in Wrapped Component
function Counter(props) {
    const [count, setCount]=useState(0)
    function increment(){
        setCount(count+num);
    }
    useEffect(()=>{
        setCount(count+1);
    },[])
    return(
        <div>
            <WrappedComponent count={count} increment={increment} {...props}/>
        </div>
    );
} return Counter
}
export default Counter;