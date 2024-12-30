import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";


const Content = () => {

  const [items, setItems] = useState(
    [
      {
        id: 1,
        checked: true,
        item: "Daily Coding"
      },
      {
        id: 2,
        checked: false,
        item: "Play Cricket"
      },
      {
        id: 3,
        checked: false,
        item: "Read a Book"
      }
    ]
  )

  const handleCheck = (id) => {
    const listItems = items.map((item) => 
      item.id === id ? {...item, checked: !item.checked} 
        : item
    )
    //set the item to the state
    setItems(listItems)
    // Storing the data into a local storage
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id )
    //set the item to the state
    setItems(listItems)
    // Storing the data into a local storage
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input 
                type="checkbox" 
                onChange={() => handleCheck(item.id)}
                checked = {item.checked} 
            />
            
            <label
              style={item.checked? {"text-decoration": "line-through"}: null}
              onDoubleClick={() => handleCheck(item.id)}
            > {item.item} </label>
            
            <FaTrashAlt 
                role="button" 
                tabIndex="0" 
                onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content