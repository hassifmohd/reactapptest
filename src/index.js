import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Testing from './Testing';
// import AppRouterLoadable from './AppRouterLoadable';
import registerServiceWorker from './registerServiceWorker';
import Nocontext from './Nocontext';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';
import Themecontextualv2 from './Themecontextualv2';

//How to load bootstrap from reactjs https://stackoverflow.com/questions/40037657/how-to-include-bootstrap-css-and-js-in-reactjs-app
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'chartist/dist/chartist.min.css';
import 'chartist/dist/chartist.min';



// ReactDOM.render(<App />, document.getElementById('root1'));
// ReactDOM.render(<Testing name="Stacy" />, document.getElementById('root2'));
// ReactDOM.render(<AppRouterLoadable />, document.getElementById('root3'));

//Context
// https://reactjs.org/docs/context.html
// ReactDOM.render(<Nocontext />, document.getElementById('no-context'));

// import Withcontext from './Withcontext'; ReactDOM.render(<Withcontext />, document.getElementById('with-context'));

// import Page from './Altcontext';
// ReactDOM.render(<Page author="hola" />, document.getElementById('alt-context'));

// import Themecontextual from './Themecontext'; ReactDOM.render(<Themecontextual />, document.getElementById('theme-context'));

// ReactDOM.render(<Themecontextualv2 />, document.getElementById('theme-contextual'));

//Consuming Multiple Contexts
//https://reactjs.org/docs/context.html#consuming-multiple-contexts
// import ConsumingMultipleContexts from './Contexts/ConsumingMultipleContexts'; ReactDOM.render(<ConsumingMultipleContexts />, document.getElementById('theme-usemultiplecontext'));

//Accessing Context in Lifecycle Methods
//https://reactjs.org/docs/context.html#accessing-context-in-lifecycle-methods
//not enough example dunno how to do
// import {justanotertest1} from './Contexts/AccessingInLifecycleMethods'; 
// const pipo = (
//     <div>HUJAN</div>
// );
// const props = (
//     <div>RENYAI</div>
// );
// function Anotherfunction2() {
//     return <div>PANAS</div>;
// }
// ReactDOM.render(<div>LOL = {Anotherfunction2()} || {pipo} = LOL</div>, document.getElementById('AccessingInLifecycleMethods-context'));

//Consuming Context with a HOC (higher-order component)
//https://reactjs.org/docs/context.html#consuming-context-with-a-hoc
// import {withTheme} from './Contexts/HOC';
// function Button1({ theme, ...rest }) {
//     return <button className={theme} {...rest}>BUTTON, theme={theme}</button>;
// }
// const ThemedButton1 = withTheme(Button1);
// ReactDOM.render(<p>=={withTheme(<Button1/>)}==</p>, document.getElementById('theme-hoc')); //dont know why not working
// ReactDOM.render(<ThemedButton1/>, document.getElementById('theme-hoc'));
// ReactDOM.render(<withTheme/>, document.getElementById('theme-hoc'));

//Introducing Error Boundaries
//https://reactjs.org/docs/error-boundaries.html#introducing-error-boundaries
//checout out the live demo here https://reactjs.org/docs/error-boundaries.html#live-demo
// import BuggyCounter from './ErrorBoundaries/BuggyCounter';
// import ErrorBoundary from './ErrorBoundaries/Introducing';
// ReactDOM.render((
//     <div>
//         <ErrorBoundary>
//             <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
//             <BuggyCounter />
//             <BuggyCounter />
//         </ErrorBoundary>
//         <hr />
//         <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
//         <ErrorBoundary><BuggyCounter /></ErrorBoundary>
//         <ErrorBoundary><BuggyCounter /></ErrorBoundary>
//     </div>
// ), document.getElementById('errorhandler-intro'));

//Refs and the DOM
//https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element
// import Creatingrefs from './Refdom/Creatingrefs';
// ReactDOM.render(<Creatingrefs/>, document.getElementById('refdom-reatingrefs'));

//Refs and Functional Components
//https://reactjs.org/docs/refs-and-the-dom.html#refs-and-functional-components
// import Reffunction from './Refdom/Reffunction';
// ReactDOM.render(<Reffunction />, document.getElementById('refdom-reffunction'));

//Callback Refs
//https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
// import Callbackrefs from './Refdom/Callbackrefs';
// ReactDOM.render(<Callbackrefs />, document.getElementById('refdom-callbackrefs'));

//Callback Refs : Cross component
// import Refcross from './Refdom/Refcross';
// ReactDOM.render(<Refcross />, document.getElementById('refdom-refcross'));

//Forwarding refs to DOM components
//https://reactjs.org/docs/forwarding-refs.html#forwarding-refs-to-dom-components
// const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//         {props.children}
//     </button>
// ));
// const ref = React.createRef();
// ReactDOM.render(<FancyButton ref={ref}><p>props.children will bring all value in inside the FancyButton</p></FancyButton>, document.getElementById('refdom-fancybutton'));

//UDEMY TUTORIAL
// import SearchBar from './UdemySection1/search_bar';
// ReactDOM.render(<SearchBar />, document.getElementById('udemysection1-searchbar'));

//UDEMY TUTORIAL: react with reducers
// import BookList from './Redux/Containers/book-list';
// import { Provider } from 'react-redux';
// import store from './Redux/Reducers/index';
// ReactDOM.render(<Provider store={store}><BookList books={[{title: 'Book 1', id: 1}]}/></Provider>, document.getElementById('redux-booklist'));

//RECAP REDUX
// import BookList from './Reduxrecap1/Booklist';
// import BookDetail from './Reduxrecap1/Bookdetail';

// import { Provider } from 'react-redux';
// import mysqldata from './Reduxrecap1/mysql';

// let bookdetailyes = {title: 'Redux for dummies', id: 1, page: 10};

// ReactDOM.render((
//     <div>
//         <p>BOOKLIST</p>
//         <Provider store={mysqldata}>
//             <div>
//                 <BookList />
//                 <BookDetail sendsomehelp='We here to help' whatyougiveyougetback='my world'/>
//             </div>
//         </Provider>
//     </div>
// ), document.getElementById('redux-booklist2'));

//WEATHER API
// import { Provider } from 'react-redux';
// import reducersStoreMiddleware from './Weatherapi/CombineReducers';

// import SearchBar from './Weatherapi/SearchBar';
// import WeatherList from './Weatherapi/WeatherList';

// ReactDOM.render((
//     <Provider store={reducersStoreMiddleware}>
//         <div>
//             <SearchBar />
//             <WeatherList />
//         </div>
//     </Provider>
// ), document.getElementById('weatherapi'));

//REACT ROUTER
import { Provider } from 'react-redux';
import reducersStoreMiddleware from './Reactrouter/CombineReducers';
import Routes from './Reactrouter/Routes';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

let global = {
    animal: 'ayam',
    color: 'red',
    Router: Router,
};

const Pompom = React.createContext(global);

const Home = () => (
    <div>
        <h2>Welcome</h2>
    </div>
);

class Popla extends React.Component {

    static contextTypes = {
        global: PropTypes.object
    };

    hupla() {
        console.log('HUPLA CLICKED');
        
    }

    render() {
        return (
            <Pompom.Consumer>
            { theme => (
                <div>
                    <div>zxczxczcz {theme.animal}</div>
                    <Router>
                        <div>
                            <h1>Blog post</h1>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/index">Post Index</Link></li>
                                <li><Link to="/add">Post add</Link></li>
                            </ul>
                            <hr />
                            <Route exact path="/">
                                <div onClick={this.hupla} >AYAM</div>
                            </Route>
                            <Route exact path="/index" component={Home} />
                            <Route exact path="/add" component={Home} />
                        </div>
                    </Router>
                </div>
            )}
            </Pompom.Consumer>
        );
    }
}

ReactDOM.render((
    

    <div>
        <div>HEADER</div>
            <Pompom.Provider value={global}>
                <Popla />
            </Pompom.Provider>
        <div>FOOTER</div>
    </div>

    
), document.getElementById('react-router'));


        {/* <Provider store={reducersStoreMiddleware}>
            <Routes />
        </Provider> */}

registerServiceWorker();
