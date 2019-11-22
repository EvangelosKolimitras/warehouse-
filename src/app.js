
// Application Component
class App extends React.Component{
    constructor(props) {
        super(props)
        this.addItemHandler = this.addItemHandler.bind(this)
        this.deleItemsHandler = this.deleItemsHandler.bind(this)
        this.randomItemPicker = this.randomItemPicker.bind(this)
        this.state = {
            title: {
                main : props.main,
                sub: props.sub
            },
            items: []
        }
    }

    addItemHandler(item) {
        if(!item) {
            const msg = "Enter a valid item!"
            console.log(msg);
            return msg
        }else if (this.state.items.indexOf(item) > -1) {
            const msg = "This item already exists!"
            console.log(msg);
            return msg
        }

        this.setState( prevState => ({
            items: [...prevState.items, item]
        }) )



    }

    deleItemsHandler() {
        this.setState( () => {
            return {
                items: []
            }
        } );
    }

    randomItemPicker() {
        const item = this.state.items[Math.round(Math.random() * this.state.items.length)]
        console.log(item)
    }

    render(){
        return(

            <div>
                <Title
                    main={this.state.title.main}
                    sub={this.state.title.sub}
                />

                <FindItems
                    randomItemPicker={this.randomItemPicker}
                    items={this.state.items}
                />

                <Items
                    deleItemsHandler={this.deleItemsHandler}
                    items={this.state.items}
                />

                <AddItem
                    addItemHandler={this.addItemHandler}
                />

            </div>

        )
    }
}

// Title Component
const Title = props => (
    <div className="title">
        <h1>{props.main}</h1>
        <h5>{props.sub}</h5>
    </div>
)

// FindItems action btn Component

const FindItems = props => (
    <div className="finditems">
        <button
            disabled={props.items.length === 0}
            onClick={props.randomItemPicker}
        >
            Find an Item
        </button>
    </div>
)


// Items Component
const Items = props => (
    <div className="items">
        <button
            onClick={this.props.deleItemsHandler}
            disabled={this.props.items.length === 0}
        >
            Delete All items
        </button>
        {
            this.props.items.length === 0 ?
                <p>No items in the warehouse</p> :
                <ul>
        {
           this.props.items.map( item => {

               return( <Item key={Math.random()} item={item} /> )
           })
        }
        </ul>
        }
    </div>
)

// Item Component
class Item extends React.Component {
    render(){
        return (
            <li className="item" > { this.props.item } </li>
        )
     }
}

// Add Item Component
class AddItem extends React.Component {

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
            <div className="additem">
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

ReactDOM.render(
    <App
        main="Warehouse"
        sub="A super warehouse "
    />,
    document.getElementById('root')
)
