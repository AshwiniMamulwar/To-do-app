import Header from './components/Header';
import Search from './components/Search';
import Items from './components/Items';
import { nanoid } from 'nanoid';
import { ITEMS } from './components/utils';

import { useState } from 'react';

function App() {

  const [items, updateItems] = useState(ITEMS);
  const [searchText, updateSearchText] = useState('')

  const addItem = (item) => {
    const _items = [item, ...items]
    updateItems(_items)
  }

  const updateItem = (item) => {
    let id = item.id
    const _items = []
    Object.assign(_items, items)
    let _item = _items.filter(item=>item.id==id)[0]
    _item.text = item.text
    _item.date = item.date
    _item.completed = item.completed
    updateItems(_items)
  }

  const removeItem = (id) => {
    const _items = items.filter((item) => item.id != id)
    updateItems(_items)
  }

  const filterItems = (searchText) => {
    updateSearchText(searchText)
  }

  return (
    <div className="app" id='app'>
      <Header />
      <Search filterItems={filterItems} />
      <Items items={items.filter((item) =>
        item.text.toLowerCase().includes(searchText.toLowerCase()))}
        addItem={addItem}
        removeItem={removeItem}
        updateItem={updateItem} />
    </div>
  );
}

export default App;
