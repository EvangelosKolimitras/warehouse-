import React from 'react'

// Item Component
const Item = props => (
    <li>
        { props.item }
        <button
            onClick={
                e => {
                    props.deleteItemHandler(props.item)
                }
            }>
                x
            </button>
    </li>

)

export default Item
