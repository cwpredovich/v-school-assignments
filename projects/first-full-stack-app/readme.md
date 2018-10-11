// STEPS TO BUILD A FULL STACK APPLICATION
    // Build the backend first

// Backend:
    // In your project directory, create a package.json - `npm init -y`
    // Create `.gitignore` file - add `/node_modules`
    // Install needed dependencies - (you may add more as you develop more features):
                    `express morgan mongoose body-parser (body-parser not needed if you use express.json() instead)`
                 User Auth with jwt:
                    `json-webtoken bcrypt expressjwt`
    // Create `server.js` file as top-level server file 
    // Create `models` and `routes` directories
        // Build models needed for app
            // models are build as `const carSchema = new mongoose.Schema({})`
            // models are exported as `module.exports = mongoose.model('Car', carSchema)`
        // Develop routes needed for app
            // routes are build as `const carRouter = express.Router()`
            // routes are exported as `module.exports = carRouter`


    * MAKE SURE YOUR API WORKS IN POSTMAN BEFORE STARTING YOUR FRONT-END *
    * THIS MEANS YOU TEST EACH ENPOINT IN POSTMAN, ALONG WITH ALL OF 
        THE REQUEST TYPES YOU HAVE ENABLED THAT ROUTE TO HANDLE (GET, POST, PUT, DELETE) *

    * WITH THE PEACE OF MIND THAT COMES FROM KNOWING YOUR REQUESTS WORK, YOU CAN DEVELOP YOUR FRONT-END *
    * WHEN AN ERROR OCCURS ON A SERVER REQUEST, YOU CAN REST ASSURED ITS SOMETHING IN YOUR FRONT-END 
        CAUSING THE PROBLEM, SO YOU WILL MOSTLY BE CHECKING YOUR SERVER TO SEE MORE INFORMATION ON AN ERROR WHEN NEEDED *





// Frontend:
    // In same folder as the server.js file, create a `client` directory
    // Install `create-react-app` into client directory
    // Install needed dependencies - (you may add moreas you develop more features):
                    `axios react-router-dom`
                If using redux: 
                    `redux react-redux redux-thunk`
    // Set up client(front-end) folder structure
        - Delete contents of src folder
        - Create components ( & redux ) subfolders in `src`
        - Create index.js and App.js in `src`

        // If using redux or react-router-dom
            - Create index.js in redux folder
                - Imports for redux index.js: `createStore applyMiddleware redux-thunk axios combineReducers - (if using multiple reducers)` 
            - In the index.js, import `BrowserRouter` and `Provider` to wrap `<App/>`.
                - Imports for react-router-dom(where needed): `Switch Route Link withRouter`
            
    // Add "proxy" to package.json file
        // ex: 
             },
            "scripts": {
                "start": "react-scripts start",
                "build": "react-scripts build",
                "test": "react-scripts test --env=jsdom",
                "eject": "react-scripts eject"
            },
            "proxy": "http://localhost:5858" - The port number is whichever port your local server is running
        } 
        
        // Once you've added the proxy, your axios requests will be send directly to the endpoints
        // you have set up on your backend.
            // ex:
                Instead of sending a request to: `axios.get('http://localhost:5858/bounty')`
                You would just put: `axios.get('/bounty')`

