
// Application Component
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: {
                main : props.main,
                sub: props.sub
            },
            options: [1,2,3,4]
        }
    }

    render(){
        return(
            <div>
                <Title main={this.state.title.main} sub={this.state.title.sub}/>
                <FindItems />
                <Options />
                <AddOption />

            </div>
        )
    }
}

// Title Component
class Title extends React.Component{
    constructor(props){
        super(props)
    }
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

// Options Component
class Options extends React.Component{
    render() {
        return(
            <div>
                {
                    /*
                        TODO: The options list from the App's state
                    */
                }
            </div>
        )
    }
}

// Option Component
class Option extends React.Component {
    render(){
        return(
            <div>
                {
                    /*
                        TODO: Renders a single option
                    */
                }
            </div>
        )
    }
}

// Add option Component
class AddOption extends React.Component {
    render() {
        return(
            <div>
                {
                    /*
                        TODO: Add option btn here
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
