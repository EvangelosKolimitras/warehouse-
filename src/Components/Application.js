import React from 'react'
import { Title, FindItems, AddItem, Items } from './Components'

// Application Component
export default class App extends React.Component{
    constructor(props) {
        super(props)
        this.addItemHandler = this.addItemHandler.bind(this)
        this.deleItemsHandler = this.deleItemsHandler.bind(this)
        this.randomItemPicker = this.randomItemPicker.bind(this)
        this.deleteItemHandler = this.deleteItemHandler.bind(this)
        this.state = {
            title: {
                main : 'EK-Warehouse',
                sub: 'An Evangelos Kolimitras warehouse'
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
        })
        )


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
                    deleteItemHandler={this.deleteItemHandler}
                />

                <AddItem
                    addItemHandler={this.addItemHandler}
                />

            </div>

        )
    }
}
