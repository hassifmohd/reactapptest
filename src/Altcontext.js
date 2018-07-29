import React, { Component } from 'react';

/*export default function Page(props) {
    const user = props.user;
    return (
        <div>
            <div>{props.author}</div>
            <PageLayout user={props.author} />
        </div>
    );
}

function PageLayout() {
    return (<NavigationBar />);
}

function NavigationBar() {
    return (
        <div className="navigationbar">
            <div>Name</div>
            <Avatar />
        </div>
    );
}

function Avatar(props) {
    return (<div className="avatar">avatar={props.author}</div>);
}*/

//THIS DOES NOT WORK, DONT KNOW WHY

export default function Page(props) {
    const author = props.author;

    const topBar = (
        <NavigationBar>
        </NavigationBar>
    );

    return (
        <PageLayout
            topBar={topBar}
        />
    );
}

function PageLayout() {
    return (<div>PageLayout</div>);
}

function NavigationBar(props) {
    return (<div>NavigationBar</div>);
}
