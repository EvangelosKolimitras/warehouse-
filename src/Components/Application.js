import React, {Component} from 'react'
import { Title, FindItems, AddItem, Items } from './Components'

// Application Component
export default class App extends Component{

    state = {
        title: {
            main : 'EK-Warehouse',
            sub: 'An Evangelos Kolimitras warehouse'
        },
        items: []
    }

    addItemHandler = i => {
        // i = item
        !i  ? "Enter a valid item!"
            : this.state.items.indexOf(i) > -1
            ? "This item already exists!"
            : this.setState( prevState => ({ items: [...prevState.items, i] }) )
    }

    deleItemsHandler = () => this.setState( () => ({ items: [] }) )

    deleteItemHandler = item => this.setState( prevState => ({
        items: prevState.items.filter(i => i !== item )
    }))

    randomItemPicker = () => console.log(this.state.items[Math.round(Math.random() * this.state.items.length)])

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

    // Locale storage added to simulate a database when the app is initialized
    componentDidMount() {
        try {
            const items = JSON.parse(localStorage.getItem('items'))
            if(items) this.setState( () => ( { items } ) )
            console.log('Mounted');

        } catch (error) { /* We error out nothing */ }
    }

    // Locale storage is being used to simulate the "adding data to a database"
    // when the component updates
    componentDidUpdate(prevProps, prevState) { if(prevState.items.length !== this.state.items.length) localStorage.setItem('items', JSON.stringify(this.state.items)) }

}
