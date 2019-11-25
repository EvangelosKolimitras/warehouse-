// Items Component
import React from 'react'
import Item from './Item.component'

const Items = props => (
    <div>
        <button
            onClick={props.deleItemsHandler}
            disabled={props.items.length === 0}
        >
            Delete All items
        </button>
        {
            props.items.length === 0 ?
                <p>No items in the warehouse</p> :
                <ul>
        {
           props.items.map( item => {

               return(
                    <Item
                        key={Math.random()}
                        deleteItemHandler={props.deleteItemHandler}
                        item={item} />
                )
           })
        }
        </ul>
        }
    </div>
)

export default Items
