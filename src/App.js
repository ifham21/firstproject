import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react'
import SearchItem from './searchItem';

function App() {

  const [items, setItems] = useState(
    JSON.parse(
      localStorage.getItem('todo_list')
    )
  )

  // create a state for adding items
  const [newItem, setNewItem] = useState('')

  // create a state for search the items
  const [search, setSearch] = useState('')

  //adding the variable created via the state, to the items array
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id, checked: false, item}
    const listItems = [...items, addNewItem]
    //set the new item to the state of lists
    setItems(listItems)
    // Storing the data into a local storage
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

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


  //submit event for adding new items
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log(newItem)

    // addItem to the list
    addItem(newItem)
    // to make the field empty
    setNewItem('')
  }

  return (
    <div className="App">
      {/* Sending tite using props */}
        <Header title = "My Todo"/>
        <AddItem 
          newItem = {newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}
        /> 
        <SearchItem 
          search = {search}
          setSearch = {setSearch}
        />
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
