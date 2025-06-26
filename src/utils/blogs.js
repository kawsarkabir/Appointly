export const blogs = [
  {
    id: 1,
    title: 'What is useState and how does it work in React?',
    content:
      '`useState` is a React hook used to manage state in functional components. It returns a state value and a function to update it. When the state changes, React re-renders the component to reflect the updated state.',
  },
  {
    id: 2,
    title: 'What is the purpose of useEffect in React?',
    content:
      '`useEffect` is a React hook that lets you perform side effects in your components. It is commonly used for fetching data, setting up subscriptions, and manually changing the DOM.',
  },
  {
    id: 3,
    title: 'What is a custom hook in React and when should you use one?',
    content:
      'A custom hook is a reusable JavaScript function that starts with “use” and uses built-in React hooks inside. You should use one when you have logic shared across multiple components, like form handling, API fetching, or authentication.',
  },
  {
    id: 4,
    title:
      'Difference between controlled and uncontrolled components. Which one is better?',
    content:
      'Controlled components are controlled by React state while uncontrolled components manage their own state internally using refs. Controlled is better for predictable behavior and validation, while uncontrolled is simpler for quick forms.',
  },
  {
    id: 5,
    title: 'Tell us something about useFormStatus() in React.',
    content:
      '`useFormStatus` is a React hook introduced in React 18. It gives access to the status of a form submission, like whether it’s pending or not. It is useful for showing loading indicators or disabling buttons during submission.',
  },
];
