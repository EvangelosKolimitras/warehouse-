import React from 'react'

// FindItems action btn Component
const FindItems = props => (
    <div>
        <button
            disabled={props.items.length === 0}
            onClick={props.randomItemPicker}
        >
            Find an Item
        </button>
    </div>
)

export default FindItems
