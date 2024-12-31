import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react'

function App() {

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
    <div className="App">
      {/* Sending tite using props */}
        <Header title = "My Todo"/>
        <AddItem />
        <Content 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
        <Footer 
          length = {items.length}
        />
    </div>
  );
}

export default App;
