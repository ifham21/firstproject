import React, { useState } from 'react'

export const ReactBasics = () => {
 
        //Event Handling Example
        // click function 
        const handleClick = (e) => {
            console.log(e.target.innerText)
        }
        
        //useState Example
        const [count, setCount] = useState(99);
        function incrementCount(){
            setCount((prevCount) => (prevCount + 1))
        }
        function decrementCount(){
            setCount((prevCount) => (prevCount - 1))
        }


       //React Hooks First Challenge
       const [name, setName] = useState("Earn")
  
       function handleNameChange() {
         const names = ['Earn', 'Grow', 'Get'];
         const int = Math.floor(Math.random() * 3);
         setName(names[int])
       }
 
   return (
     <main>
       {/* ************* Event Handling Example ************ */}
       <p>Event Handling - Check console</p>
       <button onClick={(e) => handleClick(e)}> Event Handle Button </button>
       <br />
       <br />
 
       {/* ************* useState Example ************ */}
       <button onClick={decrementCount}>  -  </button>
       <span>{count}</span>
       <button onClick={incrementCount}>  +  </button>
       <br />
       <br />

        {/* ************* useState Practice ************ */}
        <p>Lets {name} Money </p>
       <button onClick={() => handleNameChange()}> Subscribe </button>
     </main>
   )
}
