import React from 'react';

// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
    name: 'guest',
});

class ConsumingMultipleContexts extends React.Component {
    render() {
        //const { signedInUser, theme } = this.props;

        // App component that provides initial context values
        return (
            <div>
                {/* directly use context */}
                <ThemeContext.Consumer>
                {theme => (
                    <UserContext.Consumer>
                    {user => (
                        <div>
                            <div>START</div>
                            <p>theme = {theme}</p>
                            <p>user = {user.name}</p>
                            <div>END</div>
                            <hr/>
                        </div>
                    )}
                    </UserContext.Consumer>
                )}
                </ThemeContext.Consumer>

                {/* change context into another value */}
                <ThemeContext.Provider value='If had provider must put value'>
                    <UserContext.Provider value={{name:'somebody i used to know'}}>
                        <ThemeContext.Consumer>
                        {theme => (
                            <UserContext.Consumer>
                            {user => (
                                <div>
                                    <div>START</div>
                                    <p>theme = {theme}</p>
                                    <p>user = {user.name}</p>
                                    <div>END</div>
                                    <hr/>
                                </div>
                            )}
                            </UserContext.Consumer>
                        )}
                        </ThemeContext.Consumer>
                    </UserContext.Provider>
                </ThemeContext.Provider>

                <ThemeContext.Provider value='Green'>
                    <UserContext.Provider value={{name:'Adelle'}}>
                        <Layout />
                    </UserContext.Provider>
                </ThemeContext.Provider>
            </div>
        );
    }
}

function Layout() {
    return (
        <div>
            <Sidebar />
            <Content />
        </div>
    );
}

function Sidebar() {
    return (
        <div>THIS IS SIDEBAR</div>
    );
}

function ProfilePage(props) {
    return (
        <div>
            <p>B Theme={props.theme}</p>
            <p>B User={props.user.name}</p>
        </div>
    );
}

// A component may consume multiple contexts
function Content() {
    return (
        <ThemeContext.Consumer>
        {theme => (
            <UserContext.Consumer>
            {user => (
                <div>
                    <div>START</div>
                    <p>A Theme={theme}</p>
                    <p>A User={user.name}</p>
                    <ProfilePage user={user} theme={theme} />
                    <div>END</div>
                    <hr/>
                </div>
            )}
            </UserContext.Consumer>
        )}
        </ThemeContext.Consumer>
    );
}

export default ConsumingMultipleContexts;
