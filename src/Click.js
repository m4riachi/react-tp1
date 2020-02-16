import React from 'react';

export default class Click extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            emailValide: 1,
            valueName:'',
            valueEmail:'',
            searchValue:'',
            clients:[
                {name: "taoufiq benmessaoud"},
                {name: "Moad banayadi"},
                {name: "elhoussein oufkir"}
            ],
            clone:[
                {name: "taoufiq benmessaoud"},
                {name: "Moad banayadi"},
                {name: "elhoussein oufkir"}
            ]
        }
    }

    handleChange = event => {
        this.setState({ emailValide: this.validateEmail(event.currentTarget.value) });
    };

    handleChangeName = event => {
        this.setState({ valueName: event.currentTarget.value });
    };

    handleChangeEmail = event => {
        this.setState({ valueEmail: event.currentTarget.value });
    };

    handleSearch = event => {
        var ar = [];
        if (event.currentTarget.value == '') {
            this.state.clients = this.state.clone;
        }
        else {
            this.state.clone.map(value => {
                if ((value.name).indexOf(event.currentTarget.value) !== -1) {
                    ar.push(value);
                }
            });

            this.state.clients = ar;
        }

        this.setState({clients: this.state.clients});
    };

    validateEmail (email) {
        const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
    }

    showValues () {
        alert(this.state.valueName + ' ' + this.state.valueEmail);
        this.setState({ valueName: '', valueEmail: '' });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}  />
                {!this.state.emailValide ? 'email invalide' : ''}
                <br/><br/>
                Name<input type="text" onChange={this.handleChangeName} /><br/>
                Email<input type="text" onChange={this.handleChangeEmail}  /><br/>
                <button onClick={() => this.showValues()}>Submit</button>

                <br/><br/><br/>
                <input type="text" onChange={this.handleSearch}  /><br/>
                <ul>
                    {this.state.clients.map((value, index) => (
                        <li key={index}>{value.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
