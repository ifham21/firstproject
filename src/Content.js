import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <main>
      {/* If the length is not empty then show the items if not (:) mention the text below */}
      {(items.length) ? (
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
        ) 
        : ( <p style={{marginTop: '2rem'}}>Your List is Empty</p> )
        }
    </main>
  )
}

export default Content