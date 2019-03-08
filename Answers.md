1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map(), .filter(), .concat(), Object.assign() or {...oldObject, property: updateval }

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    the `store` holds the global state of the application which can be accessed by any component witht the `connect()` method. `actions` describe events that happen in the app which would be consumed by `reducers` then update the state. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state are data that can be accessed by multiple components and component state are data in a component. Data should be stored in the app state if it needs to be accessible to multiple components (eg userdata) and store data in component state if the data is only used in the specific component and not anywhere else.

1.  What is middleware?

    Functions/code that extend functionality to a system by adding them in the logic of the app/software.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk is a middleware that handles action creators that return a function and call that function with dispatch() redux method as an argument. It allows us to make asychronous operations since we can call dispatch independent of other actions not stopping the application when fetching data.

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect()
