
// Application Component
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: {
                main : props.main,
                sub: props.sub
            },
            items: [1,2,3,4]
        }
    }

    render(){
        return(
            <div>
                <Title
                    main={this.state.title.main}
                    sub={this.state.title.sub}
                />
                <FindItems />
                <Items />
                <AddItem />

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
            <div>
                <button>
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
            <div>
                {
                    /*
                        TODO: The items list from the App's state
                    */
                }
            </div>
        )
    }
}

// Item Component
class Item extends React.Component {
    render(){
        return(
            <div>
                {
                    /*
                        TODO: Renders a single item
                    */
                }
            </div>
        )
    }
}

// Add Item Component
class AddItem extends React.Component {
    render() {
        return(
            <div>
                {
                    /*
                        TODO: Add item btn here
                    */
                }
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
