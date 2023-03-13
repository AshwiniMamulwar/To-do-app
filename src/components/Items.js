import AddItem from "./AddItem"
import Item from "./Item"

const Items = ({ items, addItem, removeItem, updateItem }) => {
    return (
        <div className='items'>
            <AddItem addItem={addItem} />
            {
                items.map((item) => (
                    <Item key={item.id} item={item}
                        removeItem={removeItem}
                        updateItem={updateItem} />
                ))
            }
        </div>
    )
}
export default Items;