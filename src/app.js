
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



ReactDOM.render(
    <App
        main="Warehouse"
        sub="A super warehouse "
    />,
    document.getElementById('root')
)
