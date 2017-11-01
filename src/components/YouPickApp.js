import React from 'react';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import Form from './Form.js';
import Modal from './Modal.js'

class YouPickApp extends React.Component {
    state = {
        options: [],
        error: undefined,
        restaurant: undefined,
        modalActive: undefined
    };
    addOption = (newOption) => {
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
    };
    removeOptions = () => {
        this.setState(() => {
            return {
                options: [],
                error: undefined
            }
        })
    };
    removeIndividual = (option) => {
        this.setState((prevState) => (
            {
                options: prevState.options.filter((element) => {
                    return element !== option
                })
            }
        ))
    };
    pickOption = () => {
        let choice = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({modalActive: true,
                              restaurant: this.state.options[choice].toLowerCase().split(' ').map((word) => {
                                  return word.replace(word[0], word[0].toUpperCase())}).join(' '),
                              error: undefined
                            }));
    };
    closeModal = () =>{
      this.setState(() => ({modalActive: false}))
    };
    render() {
        return (
            <div className="centered">
                <Header/>
                <div>
                    <Action options={this.state.options} removeOptions={this.removeOptions} pickOption={this.pickOption}/>
                    <Options options={this.state.options} removeIndividual={this.removeIndividual} />
                </div>
                <Form addOption={this.addOption} error={this.state.error}/>
                <Modal restaurant={this.state.restaurant} modalActive={this.state.modalActive} closeModal={this.closeModal} />
            </div>
        )
    }
}

export {YouPickApp as default}