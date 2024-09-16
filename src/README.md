## Atomic folder structure of React project: 
    Inventer : Brad Frost 
    Atomic Design, is crucial for the readability, scalability and flexibility of your application code.
    Nested component is "isolated" from other components that are not its direct ancestors. 
    This helps to keep the component architecture organized and prevents unintended usage of components outside of their intended scope.

## Components: atoms->molecules->organisms->templates->pages

1) Atoms
Atoms are the smallest basic UI components in React, like buttons, inputs, labels, and icons.
src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   │   ├── Delete/Button.jsx, styles.css,test.js
│   │   │   └── Submit/Button.jsx
│   │   ├── Input/
│   │   │   ├── Input.js
│   │   │   └── Input.css
│   │   └── Label/
│   │       ├── Label.js
│   │       └── Label.css


2) Molecules
Grouping atoms together, such as combining a button, input and form label to build functionality.Ex. Search bar containing input and button.
src/
├── components/
│   ├── molecules/
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.js
│   │   │   └── SearchBar.css
│   │   └── FormField/
│   │       ├── FormField.js
│   │       └── FormField.css

3)  Organisms
Combining molecules together to form organisms that make up a distinct interface (nav bar). Combination of molecules and atoms.
Organisms like website headers consist of smaller molecules like primary navigation, search forms, utility navigation, and logos.
src/
├── components/
│   ├── organisms/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   └── Card/
│   │       ├── Card.js
│   │       └── Card.css


4) Templates: specify the layout of a page but do not contain any real content.
Group of organisms to form a page- where client can see a final design in place.
Ex. Home Page Template: A template that arranges a header organism, a footer organism, and a content section.
src/
├── components/
│   ├── templates/
│   │   ├── HomePageTemplate/
│   │   │   ├── HomePageTemplate.js
│   │   │   └── HomePageTemplate.css
│   │   └── DashboardTemplate/
│   │       ├── DashboardTemplate.js
│   │       └── DashboardTemplate.css


5) Pages:
Pages represent distinct app screens or routes. They integrate templates, organisms, etc. to create complete views. 
The `<HomePage/>` and `<SettingsPage/>` are page-level components.
Pages are the final components that bring everything together. They use templates and replace placeholders with actual content. 
Pages represent what the user sees in the application.
Ex. Home Page: Uses the HomePageTemplate and provides content like text, images, and links.


# COMPLETE FOLDER STRUCTURE:
    src/
    ├── components/
    │   ├── atoms/
    │   ├── molecules/
    │   ├── organisms/
    │   ├── templates/
    ├── pages/


# CONS:
    Media queries do become a bit harder as when components in isolation you have no way to determine the size of parent containers. Components have no knowledge of their width so resizes happen in response to changes to the actual page sizes.This solution can be remedied by introducing layout components that would surround your components and resize them accordingly. These layout components would implement CSS layout properties like flex, grid, etc.
