import React from 'react';

//controlled components, few ways of doing it

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            term1: '',
            term2: '',
            term3: '',
        };

        this.handleInputOnChange2 = (event) => {
            this.setState({ term2: event.target.value });
        };

        this.handleInputOnChange1 = this.handleInputOnChange1.bind(this);
    }

    render() {

        console.log("Term1: " + this.state.term1);
        console.log("Term2: " + this.state.term2);
        console.log("Term3: " + this.state.term3);

        return (
            <div>

                {/* call function created as normal. had to use bind() to pass the this */}
                <div>Term1 : <input 
                    value={this.state.term1}
                    onChange={this.handleInputOnChange1} 
                /></div>
                <div>Term1 is: {this.state.term1}</div>
                <br/>

                {/* call function created inside constructor */}
                <div>Term2 : <input 
                    value={this.state.term2}
                    onChange={ (event) => this.handleInputOnChange2(event) } 
                /></div>
                <div>Term2 is: {this.state.term2}</div>
                <br/>

                {/* straight away create the function inside the onchange */}
                <div>Term3 : <input 
                    value={this.state.term3}
                    onChange={ (event) => this.setState( {term3: event.target.value} ) } 
                /></div>
                <div>Term3 is: {this.state.term3}</div>
                <br/>
            </div>
        );
    }

    handleInputOnChange1(event) {
        this.setState({ term1: event.target.value });
    }
}

export default SearchBar;
