import React, {Component} from 'react'
import { Header, FindItems, AddItem, Items } from './Components'
import ItemModal from './ItemModal'

// Application Component
export default class App extends Component{

    state = {
        title: {
            main : 'EK - Warehouse',
            sub: 'Kolimitras Warehouse Software'
        },
        items: [],
        selectedItem : undefined
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

    // Opening modal
    randomItemPicker = () => {
        const random = Math.round(Math.random() * this.state.items.length)
        const item =this.state.items[random]
        this.setState( () => {
            return {
                selectedItem : item
            }
        })
    }

    // Closing modal
    closeModalHandler = () => {
        this.setState( () => ({
            selectedItem : undefined
        }) )
    }

    render(){
        return(
            <>
                <Header
                    main={this.state.title.main}
                    sub={this.state.title.sub}
                />

                <div className="main">
                    <div className="container">
                        <div className="main__container">
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
                    </div>
                </div>

                <ItemModal
                    selectedItem={this.state.selectedItem}
                    closeModalHandler={this.closeModalHandler}
                />
            </>

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
