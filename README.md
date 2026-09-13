1.My Project Name is Devstack.
2.It's Tools Shop, That Help Build a Website/Webapp.
3.I Use Vscode App, It's Handle All Tools, And It's Help Build a Website/Webapp.
4.Its Safe, Its Easy use , And Easy Way to Purchese.




<!-- Answer -->
1.JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. I used JSX to create the UI of my ProductCard and AddStack components.
2.props can passed data from parent to child, child not change it. state data managed inside a component, and its can change any time.  
3.useState is a React Hook used to manage state in a component. When the state changes, React re-renders the UI.I used useState in ProductCard to manage the selected technologies.
4.useEffect is a React Hook used to handle side effects, such as fetching data. But in my project, I used the use hook to load the JSON data from a Promise. I did not use useEffect in ProductCard.
5.A unique key helps React identify each item in a list. It helps React efficiently update the UI when items are added or removed.
6.Conditional rendering means displaying different UI based on a condition.
I used conditional rendering on the Add to Stack button. If a technology is already selected, the button is disabled and shows "Added to Stack".
7.In React, we pass data from parent to child using props. A child can send data back to the parent by calling a function passed through props.In my project, ProductCard is the parent and AddStack is the child.