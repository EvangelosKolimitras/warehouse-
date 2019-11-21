
// Application Component
class App extends React.Component{
    constructor(props) {
        super(props)
        this.addItemHandler = this.addItemHandler.bind(this)
        this.deleItemsHandler = this.deleItemsHandler.bind(this)
        this.state = {
            title: {
                main : props.main,
                sub: props.sub
            },
            items: [1]
        }
    }

    addItemHandler(item) {

        this.setState( prevState => {
            return {
                items : [...prevState.items, item]
            }
        } )

    }

    deleItemsHandler() {
        const items = [...this.state.items]
        this.setState( () => {
            return {
                items: []
            }
        } );
    }

    render(){
        return(
            <div>
                <Title
                    main={this.state.title.main}
                    sub={this.state.title.sub}
                />
                <FindItems items={this.state.items} />
                <Items deleItemsHandler={this.deleItemsHandler} items={this.state.items} />
                <AddItem addItemHandler={this.addItemHandler}/>
            </div>
        )
    }
}

// Title Component
class Title extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className="title">
                <h1>{this.props.main}</h1>
                <h5>{this.props.sub}</h5>
            </div>
        )
    }
}

// FindItems action btn Component
class FindItems extends React.Component {
    render() {
        return(
            <div className="finditems">
                <button disabled={this.props.items.length === 0} >
                    Find an Item
                </button>
            </div>
        )
    }
}

// Items Component
class Items extends React.Component{
    render() {
        return(
            <div className="items">
                <button
                    onClick={this.props.deleItemsHandler}
                    disabled={this.props.items.length === 0}
                >
                    Delete All items
                </button>
                <ul>
                {
                    /*
                        TODO: The items list from the App's state
                    */
                   this.props.items.map( item => {

                       return( <Item key={Math.random()} item={item} /> )
                   })
                }
                </ul>
            </div>
        )
    }
}

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
    }

    addItemHandler(event){
        event.preventDefault()
        // event.target.elements.item.value
        const item = event.target.elements.i.value
        if(item){
            this.props.addItemHandler(item)
            event.target.elements.i.value = ""
        }
    }

    render() {
        return(
            <div className="additem">
                {
                    /*
                        TODO: Add item form here
                    */
                }
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
