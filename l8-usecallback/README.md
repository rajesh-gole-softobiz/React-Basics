# What is useCallback()

✅useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed. 

✅Memoization is a way to cache a result so that it doesn't need to be computed again. This can boost performance.


😮 why to use useCallback()? 

When we update data from child to parent, an unnecessary render to other child component occurs due to define callback function and it is call unnecessarily, to stop that unnecessary render we use useCallback.
```
<Message countNo={count} onHandleInc={handleIncrementMsg}/>
```
So we want that if `count` value not update, it is not necessary to call `handleIncrementMsg`. so to stop that we will use useCallback

### How to use useCallback()
👉Before useCallback()
```
const handleIncrementMsg = () => {
    setCount(count+1)
  }
```

✅after useCallback()⬇️
```
const handleIncrementMsg = useCallback(() => {
    setCount(count+1)
  },[count])
```

🔴Credits :[💡RAJESH GOLE](https://www.youtube.com/@InputOutputCampus/)
