import React from 'react';

export const themefromoutside = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const students = {
    ali: {
        age: 20,
        hobby: 'games'
    }
};

export const subjects = [
    'English', 'Math'
];

//Dynamic Context
//https://reactjs.org/docs/context.html#dynamic-context
export const ThemeContext = React.createContext(
    themefromoutside.dark
);

//Updating Context from a Nested Component
//https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
// export const ThemeContext = React.createContext({ //notice the curly bracket to encapsulate the data
//     theme: themefromoutside.dark,
//     toggleTheme: () => { },
// });
