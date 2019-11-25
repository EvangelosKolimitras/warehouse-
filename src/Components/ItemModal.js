import React from 'react'
import Modal from 'react-modal';

// Modal for random icon picker
const ItemModal = props => (
    <Modal
        isOpen = {!!props.selectedItem}
        onRequestClose={props.closeModalHandler}
        contentLabel="Selected item"
    >
        <h3>Selected item</h3>
        {
            props.selectedItem && <p>{props.selectedItem}</p>
        }
        <button onClick={props.closeModalHandler}>Close</button>
    </Modal>
)

export default ItemModal
