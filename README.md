1. What is JSX, and why is it used? => It lets us write HTML-like code inside JavaScript in React.  
Why we use JSX:

It makes code easy to read

We can design UI easily

2. Difference between State and Props

=>State

Data inside a component

Can change over time

Controlled by the component itself

Props

Data passed from parent to child

Read-only (cannot change inside child component)

3. What is useState and how does it work?

=>useState is a React Hook used to store and update data in a component.

Example:

const [count, setCount] = useState(0);

count → current value

setCount → function to update the value

0 → starting value

When state changes, the component re-renders automatically.

4. How can you share state between components?

=>State can be shared by lifting the state to the parent component.

Steps:

Create state in the parent

Pass it to child components using props

5. How is event handling done in React?

=>Events in React are handled using functions. 
React uses camelCase event names like:

onClick

onChange

onSubmit