# react notes 
React applications is nothing more than a collection of components composed together to create a user interface.
In react there's 2 main types of components
## stateless functional components:
* Does not track any internal properties.
* Always render the same thing.
* Can't change unless given new props.

## stateful class components
* Maintain an internal set of properties.
* Properties are maintained in the state.
* Can change with user activity.
* Can take props (like stateless functional components) but only state can be updated
the state c

INSTALLATION
Terminal:
- npx create-react-app my-app --use-npm (3 tools, it's node, npm & npx)(git pod will use yarn by default if not adding "--use-npm")
- cd my-app/
- npm start

Note!
Everything I need will come with this installation. Anything I don't need I can delete later.

INSTALL (Chrome):
"React Developer Tools" then "add to chrome" (might need to re-open chrome after this).

Note!
When I'm on a site that uses react the icon will be lit up in either blue or orange.
Blue - site is running the production build of react (Optimized version)
Orange - Site is running the unoptimized develpment version.

* Create a folder in my-app's src named "components".
* in components create a file "FunctionalGreeting.js" (CamelCase important for react.)
* import React from "react"; in FunctionalGreeting.js (Not required in latest version of react)
* Create a function "FunctionalGreetin" & return a h1.
- We need to export it and import it in app.js
* In FunctionalGreeting.js, export default FunctionalGreeting;
* in app.js import FunctionalGreeting from "./components/FunctionalGreeting";
* in app.js, switch out the h1 with <FunctionalGreeting /> (This doesn't need a closing tag like h1 does. If you want to put stuff in it you can give it a closing tag, like this:
<FunctionalGreeting>
Other stuff goes here.
</FunctionalGreeting>)

# Create a ES6 arrow function that does the same thing as the function that's already there.
* in FunctionalGreeting.js create the new arrow function.
* Comment out the first function.
* const FunctionalGreeting = () => <h1>Hello from react!</h1>;

# Notes for components
- FunctionalGreeting.js (stateless functional components for components that are simple and don't need to change)
stateless functional greeting, basically a JavaScript function that returns HTML that you see in the browser preview.
A props.name is a jsx coming from "App.js" (line 9).

- StatefulGreeting.js (stateful class components when you want your component to have some kind of interactivity)

- HooksCounter.js (Allow functional components to behave like stateful components with a lot less complexity)
Built in react function that can be added to a stateless functional component, this will allow it to behave like a stateful component

Which is best?
It depends.
Generally it's best to use functional componets as much as you can.
only use class componets when you need to have some sort of interactivity.

Lesson 3:
https://github.com/Code-Institute-Org/ci-react-core-react-components/generate

# Props - properties
Parameters you pass into your React component in order to tell it what to render & how

* Duplicate FunctionalGreeting.js & name it FunctionalGreetingWithProps.js
* Update the name of the function and export name to match the file name.
* In app.js, import it just like we did to FunctionalGreeting.js
* Add <FunctionalGreetingWithProps /> in app.js function. 

* In app.js add a prop called greeting="Nice to meet you!", this will be inside the <FunctionalGreetingWithProps />
(That's all it takes to create a prop inside a react component, add multiple props by seperating them with a space between.)
- In order to retriev it in the component and render it as part of the JSX:
* In the arrow function FunctionalGreetingWithProps, add "props" as it's parameter (This parameter will excist as an object inside the function).
* Open the function up after => with {}.
* console.log(props) & return the h1;
- Inspect the site in console, Now you should see that props key value is "Nice to meet you!". Now we can access this code by injecting js code into our react component using JSX.
* Go to FunctionalGreetingWithProps.js, in the return h1, open up {props.greeting}


# Class components

* Create a file "StatefulGreeting.js"
* import React from "react"
* Create a class component like this:
class StatefulGreeting {

}
* Export default StatefulGreeting; so it can be imported in app.js

- To turn it in to a React-component we must extend the build in components class from React.
* in your class function, add "extends React.Component"

- Or import it like this:
* import React { Component }from "react";

- Classes don't have the ability to return anything, all class components must define a render() { Return whatever it is here;
}
* In class component define render and return h1.
* In app.js import the new class component "import StatefulGreeting from './components/StatefulGreeting'"
* Add the new class component in app, <StatefulGreeting />.
* Inside but after the component StatefulGreeting add "greeting='Stateful Class component here!'"
* In StatefulGreeting.js add inside the h1 {this.props.greeting}. "this" important for class components

- class components are able to change/update themselves at will or in respons to user actions. To do this we need to add state to the class component.
* Above render() add Constructor() {}.
* Inside the {} add an empty object => this.state = {};
* Above the empty object property add the superclass super()
* add props in super and in class's constructor
* In the empty object add introduction: "Hello", buttonText: "Exit",
* In render() return a div with h1 & {this.props.greeting} & replace hello with {this.props.introduction}.
* Add a button with {this.props.buttonText}
* Inspect components in browser window for website (not the preview).


# Conditional Rendering
* create a new file "ConditionalRenderingClass.js" & "ConditionalRenderingFunctional.js"
* rce for class, rfce for functional
* Include this in app.js <ConditionalRenderingClass/> etc.
* Add props in ConditionalRenderingFunctional.js
* In app.js ConditionalRenderingFunctional add "connected={true}"
* In ConditionalRenderingFunctional create a h1 inside the div. 
* Inside h1 with {props.connected ? "Connected" : "Not Connected"}
* Try changing true to false to test this works.

* In ConditionalRenderingClass add state (rconst)
* Add in state "isLoaded: false, isLoggedIn: false"
* In ConditionalRenderingClass create a h1 inside the div. 
* Inside h1 with {this.state.isLoaded ? "Data Loaded" : "Loading..."}
* change true & false here to try out.
* Inside div of ConditionalRenderingClass under h1.
* Add {this.state.isLoggedIn ? () : ()}
* Open up the first set of (), add a div with a p "Welcome to the site! Please complete the steps below:".
* Add orginized list with 3 list items, "Confirm Your Email", "Complete Your Profile", "Subscribe To The Newsletter"
* In the second (), add a p "Please sign in"


# Rendering lists
Render multiple components in a loop
* Create a file "RenderingLists.js"
* Import/export in app.js
* Create a function for RenderingLists with a return of a div.
* Const bookList "To kill a mockingbird", "the greate gatsby", "the catcher in the rye". ps. []
* Inside div, open {} for bookList.map()
* Create a for loop for "book" using arrowfunction inside map method
* Return a <h2>Book</h2>.
The map method is itterating each item in the booklist and returning each book. map is pretty much the same as a for loop here.

* Create a new variabel "books", give it three objects.
* Each one should have a title: "To kill a mockingbird", author: "harper lee, f. scott fitzgerald, j. d. salinger", pages: 281, 218, 234.
* Create an hr inside the div, under the map method. Open up with {books.map(book => { return div, h5{book.title}, p{book.author}, p{book.pages}})}

