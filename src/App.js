import Header from './components/Header';
import Search from './components/Search';
import Items from './components/Items';
import { ITEMS } from './components/utils';

import { useState } from 'react';

function App() {

  const [items, setItems] = useState(ITEMS);
  const [searchText, setSearchText] = useState('')

  const addItem = (item) => {
    const itemsArray = [];
    Object.assign(itemsArray, items)
    itemsArray.unshift(item);
    console.log(itemsArray);
    setItems(itemsArray);
    // setItems([item, ...items]);
  }

  const updateItem = (item) => {
    let id = item.id
    const updatedItems = []
    Object.assign(updatedItems, items)
    let updatedItem = updatedItems.filter(item=>item.id==id)[0]
    updatedItem.text = item.text
    updatedItem.date = item.date
    updatedItem.completed = item.completed
    setItems(updatedItems)
  }

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id != id)
    setItems(updatedItems)
  }

  const filterItems = (searchText) => {
    setSearchText(searchText)
  }

  const filteredItems = () => items.filter((item) =>
  item.text.toLowerCase().includes(searchText.toLowerCase()))

  

  return (
    <div className="app" id='app'>
      <Header />
      <Search filterItems={filterItems} />
      <Items items={filteredItems()} addItem={addItem} removeItem={removeItem} updateItem={updateItem} />
    </div>
  );
}

export default App;
