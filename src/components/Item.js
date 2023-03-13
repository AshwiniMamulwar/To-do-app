import { MdDelete, MdEdit } from 'react-icons/md'
import { useState, useEffect } from 'react'

const Item = ({ item, removeItem, updateItem }) => {
    const [editing, setEditing] = useState(false)
    const [completed, setCompleted] = useState(item.completed)
    const [_text, setText] = useState(item.text)
    const update = () => {
        var text = _text.trim()
        if (text.length > 0) {
            item = {
                ...item,
                text: _text,
                date: new Date().toLocaleString()
            }
            updateItem(item)
            setEditing(false)
        } else {
            alert('Please add something to update')
        }
    }
    useEffect(() => {
        setText(item.text)
    }, [editing]);
    useEffect(() => {
        item = {
            ...item,
            date: new Date().toLocaleString(),
            completed: completed
        }
        updateItem(item)
    }, [completed]);
    return (
        <div className='item' style={item.completed ? { backgroundColor: '#eaf7e9' } : null}>

            {
                editing ?
                    <>
                        <textarea className='' style={{ backgroundColor: '#eaf7e9' }}
                            rows='10'
                            id='textarea'
                            cols='25'
                            autoFocus='true'
                            value={_text}
                            onChange={(e) => setText(e.target.value)}>
                        </textarea>
                        <button className='item-footer save-button'
                            onClick={update} > Update </button>
                    </>
                    :
                    <>
                        <input type='checkbox' style={{ marginLeft: 'auto' }} checked={completed} onChange={() => setCompleted(!completed)} />
                        <span className='item-details'>{item.text}</span>
                        <div className='item-footer'>
                            <small className='item-date'>{item.date}</small>
                            {
                                !item.completed?
                                <MdEdit className='delete-item' color='dodgerblue'
                                    size='1.5rem'
                                    onClick={() => setEditing(true)} />
                                    :null
                            }
                            <MdDelete color='tomato'
                                size='1.5rem'
                                onClick={() => removeItem(item.id)} />
                        </div>
                    </>

            }
        </div>
    )
}

export default Item