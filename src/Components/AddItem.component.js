import React from 'react'

// Add Item Component
export class AddItem extends React.Component {

    constructor(props){
        super(props)
        this.addItemHandler = this.addItemHandler.bind(this)
        this.state = {
            e : undefined
        }

    }

    addItemHandler(event){
        event.preventDefault()
        const item = event.target.elements.i.value
        const e = this.props.addItemHandler(item)

        this.setState( () => e )
        event.target.elements.i.value = ""
    }

    render() {
        return(
            <div>
                {this.state.e && <p>{this.state.e}</p>}
                <form onSubmit={this.addItemHandler}>
                    {/* below i = item */}
                    <input type="text" name="i" />
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}


export default AddItem