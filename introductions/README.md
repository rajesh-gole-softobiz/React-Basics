# Folder Structure

package.json => The package.json is used for more than dependencies - like defining project properties, description, author & license information, scripts, etc
------------------------------------------

package-lock.json => The package-lock.json is solely used to lock dependencies to a specific version number.
------------------------------------------

.gitignore => which files we want to ignore while commit
------------------------------------------
src / 
App.css => write style of app component
------------------------------------------
App.tsx => the main component, the one that represents your entire application
------------------------------------------
App.test.tsx => We write unit test cases
------------------------------------------
index.css =>  usually define global styles in index.css (like body style)
------------------------------------------
index.tsx => where you would usually mount/render your main react component (App.tsx) onto your “root” element
------------------------------------------
logo.svg => it's a svg logo
------------------------------------------
reportWebVitals.ts => The web-vitals library is a tiny (~1.5K, brotli'd), modular library for measuring all the Web Vitals metrics on real users, in a way that accurately matches how they're measured by Chrome and reported to other Google tools (e.g. Chrome User Experience Report, Page Speed Insights, Search Console's Speed Report)
------------------------------------------
setupTests.ts => All the unit test case setup files are started from here
------------------------------------------
public / manifest.json => it is called meta files. it stores small icons, display, theme color, background color
------------------------------------------
public / robots.txt => Web crawlers typically review a file called robots.txt. This is to suggest to crawlers what should or should be crawled, what specific crawler bots are allowed. 

### Diference between App.tsx and index.tsx
1. App is really just another component! index.js is the canonical file
2. `index.js` is the traditional and actual entry point for all node apps. Here in React it just has code of what to render and where to render.

App.js on the other hand has the root component of the react app because every view and component are handled with hierarchy in React, where <App /> is the top most component in the hierarchy. This gives you the feel that you maintain hierarchy in your code starting from `App.js`. 




# Q1> Why don't we push node_modules in git?
1. git works bad with a lot of files in repository. 
2. Some packages are platform dependent. For example, development tools, such as `dart-sass`.
3. If you commit node_modules it means any developer can change any dependency with ease (it's called “monkey patching”), and this definitely will lead to a problem: when you will update this changed dependency, old changes will be lost, and you have to solve that. 