import React from 'react';

export default class Click extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            count: 0,
            date: new Date(),
            show: true,
            clients: [
                {id: 1, name: "taoufiq benmessaoud"},
                {id: 2, name: "Moad banayadi"},
                {id: 3, name: "elhoussein oufkir"}
            ],
            inputValue: ''
        }

        setInterval(() => this.dateState(), 1000);
    }

    incrementCount() {
        this.setState((state) => {
            return {count: state.count + 1}
        });
    }

    dateState () {
        this.state.date = new Date();
        this.setState(() => this.state);
    }

    deleteRow(index) {
        this.state.clients.splice(index, 1);
        this.setState(() => this.state);
    }

    pushRow() {
        this.state.clients.push({id: 10, name: this.state.inputValue});
        this.state.inputValue = '';
        this.setState(() => this.state);
    }

    handleChange = event => {
        this.setState({ inputValue: event.currentTarget.value });
    };

    render() {
        return (
            <div>
                <h1>Bonjour, monde !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>

                <button onClick={() => this.setState({show: !this.state.show})}>Cacher le Bloc</button>

                <div className={this.state.show ? '' : 'hidden'}>
                    <p>
                        Vous avez clicke {this.state.count} fois
                    </p>
                    <button onClick={() => this.incrementCount()}>Clicker ICI</button>
                    <br/>
                    <br/>

                    
                    <input type="text" 
                        onChange={this.handleChange} 
                        onKeyPress={(event) => event.key === 'Enter' ? this.pushRow() : ''} />
                    <br/>
                    <button onClick={() => this.pushRow()}>Inserer</button>
                    <ul>
                    {this.state.clients.map((value, index) => (
                        <li key={index}>{value.name} <button onClick={() => this.deleteRow(index)}>X</button></li>
                    ))}
                    </ul>
                </div>
            </div>
        );
    }
}
