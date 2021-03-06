import React, {Component} from 'react'
// Add Item Component
export class AddItem extends Component {

    state = {
        e : undefined
    }

    addItemHandler = event => {
        event.preventDefault()
        const item = event.target.elements.i.value
        const e = this.props.addItemHandler(item)

        this.setState( () => e )
        event.target.elements.i.value = ""
    }

    render() {
        return (
            <div className="AddItem">
                {this.state.e && <p>{this.state.e}</p>}
                <form autoComplete='off' onSubmit={this.addItemHandler}>
                    {/* below i = item */}
                    <input type="text" name="i" placeholder="Add an item here" autoFocus />
                    {/* <button> Add</button> */}
                </form>
            </div>
        )
    }
}

export default AddItem
