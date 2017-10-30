class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeOptions = this.removeOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.removeIndividual = this.removeIndividual.bind(this);
        this.state = {
            title: '"I dont know, ' + ' you pick"',
            subtitle: 'Let a computer decide where you go to eat!',
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
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action numOptions={this.state.options.length} options={this.state.options} removeOptions={this.removeOptions} pickOption={this.pickOption}/>
                <Options numOptions={this.state.options.length} options={this.state.options} removeIndividual={this.removeIndividual} />
                <Form addOption={this.addOption} error={this.state.error}/>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div className="banner">
            <h1>"I don't know.. You pick"</h1>
            <h3><em>{props.subtitle}</em></h3>
        </div>
    )
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.pickOption}
                disabled={props.numOptions <= 0}>
                Where should I eat?
            </button>
            <button
                onClick={props.removeOptions}>
                Remove all restaurants
            </button>
        </div>
    )
};

const Options = (props) => {
    return (
        <div className="options">
            {props.numOptions >0? <ol>
                {props.options.map((element) => <Option removeIndividual={props.removeIndividual} key={element} optionText={element}/>)}
            </ol> : <h2 className="getStarted">Enter some restaurant that you like</h2>}
        </div>
    )
};

const Option = (props) => {
    return (
        <div className="list">
            <li>{props.optionText}</li>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    props.removeIndividual(props.optionText)
                }}
                className="delete">
                x
            </button>
        </div>
    )
};

const Form = (props) => {
    return (
        <div>
            <form onSubmit={(e) => {
                        e.preventDefault();
                        let newOption = e.target.elements.option.value.trim();
                        props.addOption(newOption);
                        e.target.elements.option.value = '';
                    }
                }>
                <input className="textfield" type="text" name="option" placeholder="Enter a restaurant.."/>
                <button>
                    Add a restaurant
                </button>
            </form>
            <p>{props.error}</p>
        </div>
    )
};


const renderDOM = () => {
    const JSX = (
        <IndecisionApp/>
    );
    ReactDOM.render(JSX, document.getElementById('app'));
};

renderDOM();