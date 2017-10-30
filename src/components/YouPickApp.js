import React from 'react';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import Form from './Form.js';

class YouPickApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeOptions = this.removeOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.removeIndividual = this.removeIndividual.bind(this);
        this.state = {
            options: [],
            error: undefined
        }
    }
    addOption(newOption) {
        if(!newOption){
            this.setState(() => (
                {error: 'Enter a restaurant.'}
            ))
        } else if (this.state.options.indexOf(newOption) >= 0){
            this.setState(() => (
                {error: 'This restaurant is already an option'}
            ))
        } else {
            this.setState((prevState) => (
                {options: prevState.options.concat([newOption]),
                    error: undefined,}
            ))
        }
    }
    removeOptions(){
        this.setState(() => {
            return {
                options: [],
                error: undefined
            }
        })
    }
    removeIndividual(option) {
        this.setState((prevState) => (
            {
                options: prevState.options.filter((element) => {
                    return element !== option
                })
            }
        ))
    }
    pickOption() {
        let choice = Math.floor(Math.random() * this.state.options.length);
        alert(`You should eat at ${this.state.options[choice].toLowerCase().split(' ').map((word) => {
            return word.replace(word[0], word[0].toUpperCase())}).join(' ')}!`)
    }
    render() {
        return (
            <div>
                <Header/>
                <Action numOptions={this.state.options.length} options={this.state.options} removeOptions={this.removeOptions} pickOption={this.pickOption}/>
                <Options numOptions={this.state.options.length} options={this.state.options} removeIndividual={this.removeIndividual} />
                <Form addOption={this.addOption} error={this.state.error}/>
            </div>
        )
    }
}

export {YouPickApp as default}