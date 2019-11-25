// Items Component
import React from 'react'
import Item from './Item.component'

const Items = props => (
    <>
        <div>
            { props.items.length === 0
                ? null
                : <button
                    className="btn__deleteAll"
                    onClick={ props.deleItemsHandler }
                    disabled={ props.items.length === 0 }
                > Thrash
                </button>
            }
        </div>
        <div className="main__items">

            {
                props.items.length === 0
                    ? <p className="noItemsP">No items in the warehouse</p>
                    :   <ul> {
                            props.items.map(
                                item => (
                                    <Item
                                        key={Math.random()}
                                        deleteItemHandler={props.deleteItemHandler}
                                        item={item}
                                    />
                                )
                            )
                    }</ul>
            }
        </div>
    </>
)

export default Items
