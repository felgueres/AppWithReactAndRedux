import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

// when importing user created files, they need to be imported with the relative path.

const API_KEY = 'AIzaSyAVIbuvBVeNzCLbMeXh6Vt0I6jTsCD3zQk';

// Create new component to produce some html. That what react does.
// A component is a function that generates html.
// const means that is a constant in that it will not be reassingeable.
// Previous Syntax 1.0
// const App = function(){
//     return <div>Hi!</div>;
// }

// ALWAYS CREATE ONE COMPONENT PER FILE!

// To use the YouTube API, the YTSearch takes an object that has a key and term, and a function as second argument.

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
});


// ES6 syntax 2.0
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}



// 
// Note both syntaxes are basically the same, there is only a distinction in terms of Javascript's "this".

// Components don't put them directly in the DOM. Take the component that generates HTML and put it in the DOM.

// Note that calling App is just calling the class App. You need JSX to create an instance of the class -- eg. <App />

ReactDOM.render(<App />, document.querySelector('.container'));

// Notice that when you pass the app instance to the dom, you need to specify where to render it. That is the second argument of
// the function render; in this case we are selecting the class container that is in the index html file.
