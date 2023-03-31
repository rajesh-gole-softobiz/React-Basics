#  What is useContext()

React Context is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

## How to create context?
```
import React from 'react';
import { isContext } from 'vm';
export const UserContext = React.createContext([]);
```
UserContext returns provider and consumer

### How to use Context ?
```
1. create context
2. wrap chields with context provider
3. state access useContext hook
```

💡What is Props Drilling ?

Prop drilling in react is the process of passing data from one component via several interconnected components to the component that needs it.









🔴Credits :[💡RAJESH GOLE](https://www.youtube.com/@InputOutputCampus/)
