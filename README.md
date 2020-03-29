# Twitch Clone
A simplified clone of the [Twitch](https://twitch.tv) web application. Twitch is a video streaming web application with a focus on the gaming community. Because this app does not need a backend, this project allowed me to further develop my React/Redux, React Router, CRUD, authentication, and error handling skills.

This app is different from Twitch. With Twitch every user has one stream/channel that they can stream to. In this app, every user can create unlimited channels/streams that they can stream to.

This README includes my thought process and skills learned throughout the project. 

This is an ongoing project.

## To Run
npm install
npm start 

## Tools Used
[Create-React-App](https://github.com/facebook/create-react-app)
[React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
[Redux](https://redux.js.org/)
[React-Redux](https://react-redux.js.org/)
[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
[redux-form](https://github.com/erikras/redux-form/releases) `npm install redux-form@8.1.0`
[json-server](https://www.npmjs.com/package/json-server)
[Stephen Grider](https://www.udemy.com/share/100YAOAksaeFdaQ3g=/)

## App Challenges
1. Need to be able to navigate around to separate pages in out app
    - Solution - React Router 
2. Need to allow a user to log in and out (authentication)
    - Solution - Google OAuth
3. Need to hand forms in Redux
    - Solution - practice
4. Need to master CRUD operations in React/Redux
    - Create, Read, Update, Destroy
5. Errors will occur! Need good error handling
     - User errors
        - Create Stream name already exists
        - Search for stream does not exist
    - Failed load of video

## App Flow
### Information/Data Flow
1. Streamer’s Computer  records video with  Open Broadcaster Software (OBS) →
    - Video stream + stream key →
2. API - Real Time Messaging Protocol (RTMP) Server →
    - Separate Web Server that knows which streams are currently broadcasting → 
3. Broadcast Video Feed → Multiple Viewers’ Browser →
4. Viewers request to get video from RTMP → viewer…

### User Functions
1. Not logged in
    - User can view a list of all stream/channels
    - User can view video for a single stream
2. Logged in
    - User can create a new stream/channel
    - User can **edit** a stream/channel they have created
    - User can **delete** a stream/channel they have created

### NavBar
1. Streamer (index page)
2. Streams (stream page)
3. Login/Logout

### Index Page
1. Streams Header 
2. Card - Someone elses Stream + description
3. Card - My Stream + description 
    - Delete button
        - Route to Delete stream page
            - Card - Delete Stream
                - “Are you sure you want to delete this stream?”
                - Button - Delete
                - Button - Cancel
    - Edit button
        - Route to Edit Stream Page
            - Form - Edit a Stream
            - Input - Title
            - Input - Description
            - Submit button
4. Create Stream button
    - Route to Create Stream Page
        - Form - Create Stream
        - Input - Title
        - Input - Description
        - Submit button

## React-Router
### 4 Options
1. react-router
    - core navigation lib - this is not installed manually
2. react-router-dom
    - Navigation for dom-based apps
3. react-router-native
    - navigation for react native apps
4. react-router-redux
    - bindings with Redux and React Router (not necessary for most apps)
### Different Router Types:
1. BrowserRouter
    - uses everything after the TLD or port as the 'path
2. HashRouter
    - uses everything after the `#` as the 'path'
3. MemoryRouter
    - Doesn't use the URL to track navigation
### Flow
1. history - keeps track of the address bar in your browser -->
2. `<BrowserRouter/>` - listens to 'history' for changes in URL -->
3. `<Route path="" component={}/>`
    - path = "/" exact || "/path" || "path/path/..."
        - first page the app should load
    - component = { componentNameToLoad }
### What NOT to Do
1. put href in anchor tags
2. Bad navigation:
    - You add an `<a/>` tag to app with href='/' and click it
    - your browser maked a request to localhost:3000
    - development server responds iwth index.html file
    - **PROBLEM:** Browser receives index.html file, dumps old HTML file it is showing *(incl all of React/Redux state data!)*
    - index.html file lists JS files in sript tags - browser downloads and executes these scipts
    - App starts up
### What TO do   
1. **SOLUTION** - use `<Link to=""/>` instead
    - User wants to navigate to another page in app
    - user click 'Link' tag
    - **GOOD**: React Router prevents the browser from navigating to the new page and fetching new index.html file!
    - URL still changes
    - 'History' sees updated URL, takes URL and sends it to `BrowserRouter`
    - `BrowserRouter` communicates URL to `Route` components
    - `Route` components rerender to show new set of components
## Wiring up Components to Routes
1. Create components
2. import to App
3. Create Routes within BrowserRouter:
```
const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path='/' exact component={component1}/>
                <Route path='/folder1/name1' component={component2} />
                <Route path='/folder1/name2' component={component3} />
            </div>
            </BrowserRouter>
        </div>
    );
}
```
4. Test routes in browser by manually entering routes in browser input

### Always Visible Components
Put the component inside the App component -- inside BrowserRouter if it has `<Link/>` in it

## Handling Authentication
### Email/Password Authentication with Server
#### Flow
1. Store a record in a database with the user's email and password
2. When the user tries to login, compare email.ps with what is stored in database
3. A user is "logged in" when they enter the correct email/pw
#### Other info
1. Results in a 'token' that the server can use to make requests on behalf of the user
2. *Usually* used when an app needs to access user data **when they are not logged in**
3. Difficult to setup because a lot of information about the user needs to be stored

### OAuth Authentication with 3rd party
#### Flow
1. User authenitcates with outside service provider (Google, Linkedin, Facebook, etc.)
2. User authorizes the app to access their information
3. Outside provider tells us about the user
#### Other info
1. Use a provider that is trusted to correctly handle identification of a user
2. OAuth can be used for:
    - user identification in the app
    - the app making action on the behalf of the user
3. API Scopes - limit the amount of information OAuth has on behalf of the user
4. Results in a 'token' that a *browser app* can use to make requests on behalf of the user
5. *Usually* used when an app only needs access to user data **while they are logged in**
6. Very easy to set up because of automated flow

#### Steps for setting up Google OAuth
1. Create a new project at `console.developers.google.com/`
2. Set up an OAuth confirmation screen
3. [Generate an OAuth Client ID](https://developers.google.com/identity/protocols/OAuth2?hl=en_US)
4. Install Google's API library, initialize it with the OAuth Client ID
    - add to <head> in index.html :`<script src="https://apis.google.com/js/api.js"></script>`
        - gives access to [gapi](https://developers.google.com/api-client-library/javascript/reference/referencedocs)
5. Make sure the lib gets called any time the user clicks on the 'Login with Google' button

#### Hook OAuth to Redux
1. Create Redux folders/files
    - src/actions/index.js
    - src/reducers/index.js
        - import {combineReducers} from 'redux'; export default combineReducers({ replaceMe: ()=> 'xyz'})
2. update src/index.js
    - Provider form react-redux
    - createStore from redux
## Redux General
1. **BEST PRACTICE**:src > actions > types.js ==> Put all types of action names here to preven typo errors

## redux-devtools-extension
### Setup
- Root index.js - add this:
```
// add applyMiddleware, compose to import
import {createStore, applyMiddleware, compose} from 'redux';

...

// set const after imports
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

...

// add this to your store function; after reducers
    composeEnhancers(applyMiddleware())
```

### Degug tools
- The circle icon at the top for the GUI
- `localhost:XXXX/?debug_session=logged_in=yourNameOfChoiceHere` will save your info in GUI between reloads

## Redux-Form
[docs](https://redux-form.com) -- redux-form is TRICKYYY
this app uses the: Synchronous Application Form 
### Set Up
- the maintainer made an oopsie and rolled this back to an out dated version
- use `npm install redux-form@8.1.0` to install the latest known good release
- reducers > index.js add:
    - `import { reducer as formReducer } from 'redux-form';`
    - `combineReducers({...form: formReducer})`
- components > StreamCreator
    - `import { Field, reduxForm } from 'redux-form';`
    - change to class StreamCreator
    - see code for
        - add reduxForm to export 
        - create <form></form> 
        - create renderInput() 
        - create onSubmit()
        - **BEST PRACTICE:** Form Validation; Security and Accuracy

### What does Redux Form do?
```
Redux Form Reducer --> Redux Form mapStateToProps --> props -->   
                ^                                                {DOM stuff handled by react}
                ^-----Redux Form Action Creator <-- handler <--
```

## REST-ful Conventions
**Naming Convention: GET, POST, PUT, DELETE (CRUD)**
### What this app is doing:
|Actions                     |Method  |Route          |
|----------------------------|:-------|:--------------|
|List all records            | GET    |/streams       |
|Get one particular record   | GET    |/streams/:id   |
|Create record               | POST   |/streams       |
|Update a record             | PUT    |/streams/:id   |
|Delete a record             | DELETE |/streams/:id   |
