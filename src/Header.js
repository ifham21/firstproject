import React from 'react'

const Header = ({title = "To do List"}) => {
  return (
    <header>
        <h1>
            {title}
        </h1>
    </header>
  )
}

// New Method for defaultProps ->  
// -> if we use arrow functions in functional components 
// then we should mention the default values in the 
// functional parameters like mentioned above

// Old method of defaultProps:
// Header.defaultProps = {
//   title: "To do List"
// }
export default Header