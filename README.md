# Learning js

# parcel

-Dev Build
-Local Server
-HMR-Hot Module Replacement
-Use File Watching Algo written in cpp
-cashing-builds faster for users
-Image Optimization
-Bundling
-Minimisation
-Compression
-Consistent Hashing
-Differential Bundling
-code splitting
-supports older browers
-Diagonstics(beautiful error handling)
-Tree Shaking-Removes unused code

# Food Ordering

Header
-Logo
-Nav items
Body
-Search
-RestaurantContainer
-Restaurant Card
-Img
-Name of res,Star Rating,cuisine,delivery tie

Footer
-Copyright
-LInks
-address
-contact

# Export/Import

/\*

Two types of Import/Export
-Default Import/Export
export default Component
import Component from "path"

-Named Import/Export
export const COMPONENT
import {COMPONENT} from "Paths"

\*/

# HOOKS

-Hooks are utility functions that give superpowers
-react hooks keep ui layer in sink with data layer(config driven UI)
1.useState-Whenever a state variables updates, react re-renders the component
2.useEffect-It is called after the component has been rendered.

# React is fast why?

-Effective DOM manipulation(React fibre,React conciliation,Virual DOM,Diff Algo)
-Has Vitual DOM(Object representation of html tags)
-Diff ALgo is used to find difference btw old and new virtual dom and hence updates the UI

# useEffect cases

1.No dependancy Array ie => useEffect(()=>{})
-In this case useEffect will be called on "every" render ie whenever the page refreshes.
2.Empty Dependancy Array ie=> useEffect(()=>{},[])
-In this case useEffect() will ONLY be called on INITIAL RENDER and not everytime.
3.Filled dependancy Array ie=>useEffect(()=>{},[dependancy])
-In this case useEffect() is called whenever dependanct inside array changes.

# Types of Routing and React is single page website

1.Client Side Routing(eg. React as it doesnot reloads the page while navigating but just switches the component=> Hence it is fast=>Single page applications)
2.Server Side Routing- Traditonal way of making websites.Anchor tag was used to navigate and hence it reloads everytime the page by making server calls.

# Life Cycle of React class components(For SIngle child)

-Parent Constructor()
-Parent Render()
-child Constructor()
-child render()
-child componentDidMount()
-parent componentDidMount()

Note:-Api calls are written in componentDidMount() in class based Components.Similar to useEffect()hook.
because in React => Component is rendered(without any data)=>Api call(fetched data)=> Component Re-rendered with data(config driven UI)

# Life Cycle of React class components(For multiple childs)

-Parent Constructor()
-Parent Render()

-firstchild Constructor()
-firstchild render()
-secondchild constructor()  
 -secondchild render() //optimization of react(bundles/BATCHES all the "render phase" of its child)->DOMManipulat

-firstchild componentDidMount() //Second phase-Commit phase where component is mounted of the childs
-secondchild componentDidMount()

-parent componentDidMount()

# Life cycle componentDidUpdate() and componentWillUnmount()

-contructor()
-render(renders with default data)
-componentDidMount()//api calls and has "this.setState()"->updates state variables and re-renders render() method
-render(renders with data fetched from api)
-componentDidUpdate()
-componentWillUnMount()//called when component is removed from the page.

# Lazy loading and Suspense component

-Used to dynamically load components and divides the code into smalled chunks or bundles so that large scale applications are efficient and fast.

    -import Grocery from "./components/Grocery";(normal import)
    -const Grocery = lazy(() => import("./components/Grocery")); (lazy import)

-by using lazy we separte grocery from main bundle.It will be in differnt bundle ie. differ js file and code will be splitted in smaller chunks

-<Suspense fallback={<h1>Loading..</h1>}> -Suspense component is used is used otherwise it will show error
-meaning lazy is importing react will render jsx inside fallback
<Grocery />
</Suspense>

These are used when we build large scale application,all names are synonmous :-
-chunking->loads component only when its clicked
-Dynamic Bundling
-lazy loading
-chunking
-code splitting
-on demand loading

# How to style ,use of css

-normal css
-sass,scss
----VARIOUS LIB AND FRAMEWORKS ARE:-
-bootstap
-ant design
-material ui
-styled components
-tailwind css(used in app) 
# Higher Order Component(function)
- Takes in function as an input and returns component as output
-acts as an enhancer