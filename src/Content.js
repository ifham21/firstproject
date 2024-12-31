import React from 'react'
import ItemsList from './ItemsList'



const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <main>
      {/* If the length is not empty then show the items if not (:) mention the text below */}
      {(items.length) ? (
          <ItemsList 
            items = {items}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
          />
        ) 
        : ( <p style={{marginTop: '2rem'}}>Your List is Empty</p> )
        }
    </main>
  )
}

export default Content