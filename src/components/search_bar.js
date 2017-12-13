// import React from 'react';
import React, { Component } from 'react';


// This is called a functional component since it's based on a function.
// Like this.

// const SearchBar = () => {
//     return <input />
// };

// Another type is class component.
// Every class component needs a render method.
// Every method should return JSX.

// class SearchBar extends React.Component {
//     render(){
//         return <input />;
//     }
// };

// We can clean up the reference of React.Component we can refactor it with aliases.

// class SearchBar extends Component {
//     render(){
//         return <input onChange={this.onInputChange}/>;
//     }
//
//     onInputChange(event){
//         console.log(event);
//     }
// };

// Handling events in react has two steps.
// 1) Declaring an event handler: Function that will run whenever the event occurs.
// 2) Pass the event handler to element (Input in this case) you want to monitor for events.

// in this case, the syntax "onChange" actually react and triggers whenever the element has changed.
// onInputChange is user created and it's the event handler.

// class SearchBar extends React.Component <--- This is interpreted as 'create new class called SearchBar and give all the functionality from React.Component', much like inhering.

// A final refactor

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: 'Connected'};
    }

    render(){
        return (
        <div>
            <input
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value})} />
        </div>
    );
    }
};

// State is one of the hardest sutff to concentrate on react.
// State is a plain javascript object that is used to 1) record and, 2) react, to user events.
// Each class based component has it's own state object.
// When a component state changes, then the component re-renders along with all of it's children.

// You need to initialize the state component inside the class' constructor method.
// Only classes have constructor

// Constructor is the one and only function that is exectued automatically whenever a class is created.
// Component has already its own constructor
// super is used to call the parent constructor method -- so in this case super is calling the constructor method from Component

// the, this.state is whatever proporties we want to hold; like in a dict.
// the state is created once and then use this.set.state to update the dictionary.

// A control field is an element which value is set by the state!

export default SearchBar;
