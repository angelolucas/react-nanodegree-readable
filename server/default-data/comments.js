module.exports = {
  'd8c38226-f760-4578-ae8d-649118da1a70': {
    id: 'd8c38226-f760-4578-ae8d-649118da1a70',
    timestamp: 1533092400000,
    body:
      'Good post, the biggest obstacle for programmer usually lack of communication, some of them keep their own problem until it’s too late for other people to realize.\n\nSome of them also have “ego” that keep saying that if I don’t create this code, noone can and business will fail, this kind of person fail to notice that there will be someone better than him/her in both code and attitude.',
    author: 'Kang Dels',
    parentId: '655a0b95-dce4-41f8-a38c-bf62027258b0',
    voteScore: 134,
    deleted: false,
    parentDeleted: false,
  },
  'fbe383d0-3522-42a9-8aa0-b5f27fdc3ba2': {
    id: 'fbe383d0-3522-42a9-8aa0-b5f27fdc3ba2',
    timestamp: 1533178800000,
    body:
      'im sorry if i’m being rude but the GIFs are EXTREMELY annoying !\n\ni was trying to read the article at work [open space] and i found my self scrolling up an down so ppl will think i’m reading senescence . so i stopped reading and scrolled down to write you this comment.\n\nvery childish very annoying , thou the half i have read seemed good.',
    author: 'Harry log',
    parentId: '655a0b95-dce4-41f8-a38c-bf62027258b0',
    voteScore: 50,
    deleted: false,
    parentDeleted: false,
  },
  '3ad1a749-b7df-4ffa-bab4-0044118d09ef': {
    id: '3ad1a749-b7df-4ffa-bab4-0044118d09ef',
    timestamp: 1536008316513,
    body:
      'Nice article!\n\nI’d add what someone asked on one of your comments, how to solve this when you have dynamic keys. To do that, you’d do something like this\n```\nlet key = ‘z’;\nlet {[key]: foo, …rest} = {z: ‘bar’, a: “rr”, b: “jj”};\n\n// foo = ‘bar’\n// rest = { a: “rr”, b: “jj”}\n```',
    author: 'Jonathan Tafel',
    parentId: '563505f0-7ea0-4a56-9cbe-32a08dcc6b8a',
    voteScore: 0,
    deleted: false,
    parentDeleted: false,
  },
  '8tu4bsun805nccun4ave89': {
    id: '8tu4bsun805nccun4ave89',
    parentId: '563505f0-7ea0-4a56-9cbe-32a08dcc6b8a',
    timestamp: 1511575200000,
    body:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
    author: 'Lipsum',
    voteScore: 0,
    deleted: false,
    parentDeleted: false,
  },
  '3ea06840-eb5b-40b2-b713-bee6fc4d4b2a': {
    id: '3ea06840-eb5b-40b2-b713-bee6fc4d4b2a',
    timestamp: 1515376800000,
    body:
      'truly a great article and cleanly presented, job well done! Thanks for the info',
    author: 'NewJack WebbDesign',
    parentId: 'aeb2d297-a45b-482b-83c3-236bb57d7542',
    voteScore: 0,
    deleted: false,
    parentDeleted: false,
  },
  '6e521a76-f317-4e85-93f2-38cf150c9990': {
    id: '6e521a76-f317-4e85-93f2-38cf150c9990',
    timestamp: 1525921200000,
    title: 'Learn React.js in 5 minutes',
    summary: 'A quick introduction to the popular JavaScript library.',
    body:
      'This tutorial will give you a basic understanding of React.js through building a **very**  simple application. I’ll leave out **everything** which I don’t think is core.\n\nIf you like my teaching style, and want to be notified when we launch to our free upcoming React.js course, you can leave your email [here.](http://eepurl.com/dqOLRT)\n\n> Once you’ve read this article, I’d recommend you to check out my [free React course](https://scrimba.com/g/greactchatkit) on Scrimba, where I teach it through building a chat app.\n\n### The setup\n\nWhen getting started with React, you should use the simplest setup possible: an HTML file which imports the `React` and the `ReactDOM` libraries using script tags, like this:\n```\n<html>  \n<head>  \n<script src="https://unpkg.com/react@15/dist/react.min.js"> </script><script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js">  \n</script>  \n<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>  \n</head>  \n<body>  \n    <div id="root"></div>  \n    <script type="text/babel">  \n      \n    /\\*   \n    ADD REACT CODE HERE   \n    \\*/  \n      \n    </script>  \n</body>  \n</html>\n```\nWe’ve also imported Babel, as React uses something called JSX to write markup. We’ll need to transform this JSX into plain JavaScript, so that the browser can understand it.\n\nThere are more two things I want you to notice:\n\n1.  The `<div>` with the id of `#root`. This is the entry point for our app. This is where our entire app will live.\n2.  The `<script type="text/babel">` tag in the body. This is where we’ll write our React.js code.\n\nIf you want to experiment with the code, check out [this Scrimba playground.](https://scrimba.com/c/cmGe8Cp)\n\n### Components\n\nEverything in React is a component, and these usually take the form of JavaScript classes. You create a component by extending upon the `React-Component` class. Let’s create a component called `Hello`.\n```\nclass Hello extends React.Component {  \n    render() {  \n        return <h1>Hello world!</h1>;  \n    }  \n}\n```\nYou then define the methods for the component. In our example, we only have one method, and it’s called `render()`.\n\nInside `render()` you’ll return a description of what you want React to draw on the page. In the case above, we simply want it to display an `h1` tag with the text _Hello world!_ inside it.\n\nTo get our tiny application to render on the screen we also have to use `ReactDOM.render()`:\n```\nReactDOM.render(  \n    <Hello />,   \n    document.getElementById("root")  \n);\n```\nSo this is where we connect our `Hello` component with the entry point for the app (`<div id="root"></div>`). It results in the following:\n\n![](https://cdn-images-1.medium.com/max/1600/1*T-bmSzg0KlijyB3dG1M-ow.png)\n\nThe HTML’ish syntax we just looked at (`<h1>` and `<Hello/>`) is the JSX code I mentioned earlier. It’s not actually HTML, though what you write there does end up as HTML tags in the DOM.\n\nThe next step is to get our app to handle data.\n\n### Handling data\n\nThere are two types of data in React: props and state. The difference between the two is a bit tricky to understand in the beginning, so don’t worry if you find it a bit confusing. It’ll become easier once you start working with them.\n\nThe key difference is that state is private and can be changed from within the component itself. Props are external, and not controlled by the component itself. It’s passed down from components higher up the hierarchy, who also control the data.\n\n**A component can change its internal state directly. It can not change its props directly.**\n\nLet’s take a closer look at props first.\n\n### Props\n\nOur `Hello` component is very static, and it renders out the same message regardless. A big part of React is reusability, meaning the ability to write a component once, and then reuse it in different use cases — for example, to display different messages.\n\nTo achieve this type of reusability, we’ll add props. This is how you pass props to a component (highlighted in bold):\n```\nReactDOM.render(  \n    <Hello **message="my friend"** />,   \n    document.getElementById("root")  \n);\n```\nThis prop is called `message` and has the value “my friend”. We can access this prop inside the Hello component by referencing `this.props.message`, like this:\n\nclass Hello extends React.Component {  \n    render() {  \n        return <h1>Hello {**this.props.message**}!</h1>;  \n    }  \n}\n\nAs a result, this is rendered on the screen:\n\n![](https://cdn-images-1.medium.com/max/1600/1*M0-2Ct0K3SARZLSwIzgdJw.png)\n\nThe reason we’re writing `{this.props.message}` with curly braces is because we need to tell the JSX that we want to add a JavaScript expression. This is called **escaping**_._\n\nSo now we have a reusable component which can render whatever message we want on the page. Woohoo!\n\nHowever, what if we want the component to be able to change its own data? Then we have to use state instead!\n\n### State\n\nThe other way of storing data in React is in the component’s state. And unlike props — which can’t be changed directly by the component — the state can.\n\nSo if you want the data in your app to change — for example based on user interactions — it must be stored in a component’s state somewhere in the app.\n\n#### Initializing state\n\nTo initialize the state, simply set `this.state`  in the `constructor()` method of the class. Our state is an object which in our case only has one key called `message`.\n```\nclass Hello extends React.Component {  \n      \n    constructor(){  \n        super();  \n        this.state = {  \n            message: "my friend (from state)!"  \n        };  \n    }  \n      \n    render() {  \n        return <h1>Hello {this.state.message}!</h1>;  \n    }  \n}\n```\nBefore we set the state, we have to call `super()` in the constructor. This is because `this` is uninitialized before `super()` has been called.\n\n#### Changing the state\n\nTo modify the state, simply call **this.setState(),** passing in the new state object as the argument. We’ll do this inside a method which we’ll call `updateMessage`.\n```\nclass Hello extends React.Component {  \n      \n    constructor(){  \n        super();  \n        this.state = {  \n            message: "my friend (from state)!"  \n        };  \n **this.updateMessage = this.updateMessage.bind(this);**   }\n\n **updateMessage() {  \n        this.setState({  \n            message: "my friend (from changed state)!"  \n        });  \n    }** \n\n    render() {  \n        return <h1>Hello {this.state.message}!</h1>;  \n    }  \n}\n```\n> Note: To make this work, we also had to bind the `this` keyword to the `updateMessage` method. Otherwise we couldn’t have accessed `this` in the method.\n\nThe next step is to create a button to click on, so that we can trigger the `updateMessage()` method.\n\nSo let’s add a button to the `render()` method:\n```\nrender() {  \n  return (  \n     <div>  \n       <h1>Hello {this.state.message}!</h1>  \n       <button **onClick={this.updateMessage}**\\>Click me!</button>  \n     </div>     \n  )  \n}\n```\nHere, we’re hooking an event listener onto the button, listening for the **onClick** event. When this is triggered, we call the **updateMessage** method.\n\nHere’s the entire component:\n```\nclass Hello extends React.Component {  \n      \n    constructor(){  \n        super();  \n        this.state = {  \n            message: "my friend (from state)!"  \n        };  \n        this.updateMessage = this.updateMessage.bind(this);  \n    }\n\n    updateMessage() {  \n        this.setState({  \n            message: "my friend (from changed state)!"  \n        });  \n    }\n\n    render() {  \n         return (  \n           <div>  \n             <h1>Hello {this.state.message}!</h1>  \n             <button **onClick={this.updateMessage}**\\>Click me!</button>  \n           </div>     \n        )  \n    }  \n}\n```\nThe **updateMessage** method then calls **this.setState()** which changes the `this.state.message` value. And when we click the button, here’s how that will play out:\n\n![](https://cdn-images-1.medium.com/max/1600/1*D1_y0QiLHFcrwKo56C7VWg.png)\n\nCongrats! You now have a very basic understanding of the most important concepts in React.\n\nIf you want to learn more, [be sure to sign up on the waiting list for my upcoming free React course](http://eepurl.com/dqOLRT).\n\nAlso, check out this article to learn how to build a chat app in React:\n\n[**How to build a React.js chat app in 10 minutes**  \n_In this article I’ll show you the easiest way possible to create a chat application using React.js. It’ll be done…_medium.freecodecamp.org](https://medium.freecodecamp.org/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b "https://medium.freecodecamp.org/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b")[](https://medium.freecodecamp.org/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b)',
    author: 'Per Harald Borgen',
    category: 'react',
    voteScore: 30,
    deleted: false,
    commentCount: 0,
  },
}
