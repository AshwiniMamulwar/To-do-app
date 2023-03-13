import { useState } from "react"
import { nanoid } from "nanoid"

const AddItem = ({ addItem }) => {

    const [text, updateText] = useState('')

    const textHandler = (event) => {
        updateText(event.target.value)
    }

    const add = () => {
        var _text = text.trim()
        if (_text.length > 0) {
            addItem({
                id: nanoid(),
                text: _text,
                date: new Date().toLocaleString(),
                completed: false
            })
            updateText('')
            var textarea = document.getElementById('textarea')
            textarea.focus();
        } else {
            alert('Please add something to save')
        }
    }

    return (
        <div className='item add-item' >
            <textarea className='add-item-text'
                rows='10'
                id='textarea'
                cols='25'
                autoFocus='true'
                placeholder='Type here to add a new item...'
                value={text}
                onChange={textHandler} >
            </textarea>
            <button className='item-footer save-button'
                onClick={add} > Save </button>
        </div>
    )
}

export default AddItem