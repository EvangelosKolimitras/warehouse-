
// Application Component
class App extends React.Component{
    constructor(props) {
        super(props)
        this.addItemHandler = this.addItemHandler.bind(this)
        this.deleItemsHandler = this.deleItemsHandler.bind(this)
        this.randomItemPicker = this.randomItemPicker.bind(this)
        this.deleteItemHandler = this.deleteItemHandler.bind(this)
        this.state = {
            title: {
                main : props.main,
                sub: props.sub
            },
            items: []
        }
    }

    // Locale storage added to simulate a database when the app is initialized
    componentDidMount() {
        try {
            const items = JSON.parse(localStorage.getItem('items'))
            if(items) this.setState( () => ({items}) )

        } catch (error) {
            // We do nothing
        }
    }

    // Locale storage is being used to simulate the "adding data to a database"
    // when the component updates
    componentDidUpdate(prevProps, prevState) {
        if(prevState.items.length !== this.state.items.length){
            return localStorage.setItem('items', JSON.stringify(this.state.items))
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

    deleItemsHandler() { this.setState( () => ({ items: [] }) ); }

    deleteItemHandler(item) {
        this.setState( prevState => ({
            items: prevState.items.filter(i => i !== item )
        }))
    }

    randomItemPicker() {
        const item = this.state.items[Math.round(Math.random() * this.state.items.length)]
        console.log(item)
    }

    render(){
        return(
            <>
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
                    deleteItemHandler={this.deleteItemHandler}
                />

                <AddItem
                    addItemHandler={this.addItemHandler}
                />

            </>

        )
    }
}

// Title Component
const Title = props => (
    <>
        <h1>{props.main}</h1>
        <h5>{props.sub}</h5>
    </>
)

// FindItems action btn Component

const FindItems = props => (
    <>
        <button
            disabled={props.items.length === 0}
            onClick={props.randomItemPicker}
        >
            Find an Item
        </button>
    </>
)


// Items Component
const Items = props => (
    <>
        <button
            onClick={props.deleItemsHandler}
            // disabled={props.items.length === 0}
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
    </>
)

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
                rm
            </button>
    </li>

)

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
            <>
                {this.state.e && <p>{this.state.e}</p>}
                <form onSubmit={this.addItemHandler}>
                    {/* below i = item */}
                    <input type="text" name="i" />
                    <button>Add Item</button>
                </form>
            </>
        )
    }
}

ReactDOM.render(
    <App
        main="EK-Warehouse"
        sub="An Evangelos Kolimitras warehouse "
    />,
    document.getElementById('root')
)
