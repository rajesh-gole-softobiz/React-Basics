### What is memo?
React Memo is a higher-order component that wraps around a component to memoize the rendered output and avoid unnecessary renderings

### How to use Memo() ?
Method-1:
It is either you wrap the actual component directly without having to create a new variable to store the memoized component:
```
const myComponent = React.memo((props) => {
    /* render using props */
});

export default myComponent;
```

Method-2:
create a new variable to store the memoized component and then export the new variable:
```
const myComponent = (props) => {
    /* render using props */
};

export const MemoizedComponent = React.memo(myComponent);
```

-------------------------------------------------------------
### What is useMemo() ?
The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. 

### Example:
```

    let number = 0;
    for(let i=0;i<500000000;i++){
        number++;
    }
    return number
    },[])
```

### Difference between memo() and useMemo()
👉 1.
memo is a higher-order component to memoize an entire functional component. 
useMemo is a react hook to memoize a function within a functional component.

