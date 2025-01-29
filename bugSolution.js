```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: The dependency array includes 'count' 
    // This prevents the infinite loop, but will not run on mount
    // To fix that, you should include count as a dependency
    console.log("Count updated!");
  }, [count]);

  return <div>Count: {count}</div>;
}
```