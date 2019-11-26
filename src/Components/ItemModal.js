import React from 'react'
import Modal from 'react-modal';

// Modal for random icon picker
const ItemModal = props => (
    <Modal
        isOpen = {!!props.selectedItem}
        onRequestClose={props.closeModalHandler}
        contentLabel="Selected item"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="Modal"
    >
        <h3 className="Modal__title">Selected item</h3>
        {
            props.selectedItem && <p className="Modal__body">{props.selectedItem}</p>
        }
        <button className="Modal__btn" onClick={props.closeModalHandler}>Close</button>
    </Modal>
)

export default ItemModal
