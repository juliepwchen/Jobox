# Jobox

## Slice 

### Instructions

1. Type "npm start" under /slice/server directory. Server starts at "http://localhost:8081".
2. Type "npm start" under /slice/client directory.  App starts at "http://localhost:3000".

### Technologies

1.  I chose to showcase my skills in Client-Side/Browser Rendering instead of Server-Side Rendering (SSR)/Isomorphic/Universal because, based on my conversation with Jim Cai, Jobox' Web App is mainly for internal use as an Administration Management system.  Thus, SEO Support, which is one of the main functions of SSR, should not be a concern.  

2. Single Page Application (SPA)
  - React: although it can be argued that more boilerplate needs to be written upfront comparing to other UI framework, React is considered easier to maintain as the codebase grows while company scales.  The Modularization concept is well designed for organizing file structutures, and vDOm is said to be a fast technology.
  - Redux
  - NodeJS
  - Redux-Thunk
  - Axios
  - Semantic-UI CSS

### Architecture and Design Considerations

1. Moblie-Friendly Design 
  - this project is designed to be Responsive depending on the screen size of the devices.
2. Reusability 
  - An exmple Component (Layout.js) is designed to be reusable for any panels that requires a header.
3. CSS Modules 
  - each component has its own local scope of CSS styles, and thus, eliminates the complex CSS scope issues.
4. Performance 
  - use PurComponent's shallow comparison when update Components to elminate redundant Components updates.
  - use Stateless Functional-based components to eliminate excess life-cycle methods.

### Challenges

1. Cross Origin Resource Sharing (CORS)
  - Browser has a default Security machanism to prevent HTTP Requests issuing from one Domain (http://localhost:3000) to another Domain Server (http://localhost:8081).  This is resolved by adding cors library in Server.
  
