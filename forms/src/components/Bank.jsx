import React, { Component } from 'react';
import Currency from './currency.json';
import { Link } from 'react-router-dom'

export default class Bank extends Component {

    constructor() {
        super();
        this.findValue = this.findValue.bind(this);
        this.state = {
            optionSelected: '',
        }
    }

    findCurrency = () => {
        const currency = Currency;
        let currencyValue;
        currency.forEach(currencies => {
            if (currencies.name === this.state.optionSelected) {
                currencyValue = currencies.currency;
            }
        });
        console.log('currency', currencyValue);
        return currencyValue;
    }

    findValue = (e) => {
        this.setState({ optionSelected: e.target.value });

    }

    displayValues = () => {
        const currency = Currency;
        let mapRow = currency.map(currencies => (
            <React.Fragment key={currencies.id}>
                <option>{currencies.name}</option>
            </React.Fragment>
        ));
        return mapRow;
    }

    render() {
        console.log('value clicked', this.state.optionSelected);
        return (
            <div className="bank-details">
                <h1>Bank Details</h1>
                <form>
                    <select onChange={this.findValue}><option hidden>Choose Country</option>{this.displayValues()}</select><br/><br/>
                    <label>Currency:    {this.findCurrency()}</label><br/><br/>
                    <input type="text" placeholder="Enter Account Number" />
                    <button className="prev-btn"><Link to='/'> PREVIOUS</Link></button>
                    <button className="next-btn"><Link to='/address'> NEXT</Link></button>
                </form>
            </div>
        )
    }
}