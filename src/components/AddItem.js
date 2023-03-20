import { useState } from "react"
import { nanoid } from "nanoid"

const AddItem = ({ addItem }) => {

    const [text, setText] = useState('')

    const textHandler = (event) => {
        setText(event.target.value)
    }

    const add = () => {
        var inputText = text.trim()
        if (inputText.length > 0) {
            addItem({
                id: nanoid(),
                text: inputText,
                date: new Date().toLocaleString(),
                completed: false
            })
            setText('')
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