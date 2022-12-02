import { Button } from '@mui/material';
import React from 'react'
import Counter from "./Counter";
function A(props) {
    const {count,increment,name}=props //Object distructuring es6 concept
    return(
        <div>
            <Button variant="contained" onClick={increment}>A {name} {count} Times Clicked</Button>
        </div>
    );
}
export default Counter(A,3);