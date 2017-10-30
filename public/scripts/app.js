'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeOptions = _this.removeOptions.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.pickOption = _this.pickOption.bind(_this);
        _this.removeIndividual = _this.removeIndividual.bind(_this);
        _this.state = {
            title: '"I dont know, ' + ' you pick"',
            subtitle: 'Let a computer decide where you go to eat!',
            options: [],
            error: undefined
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'addOption',
        value: function addOption(newOption) {
            if (!newOption) {
                this.setState(function () {
                    return { error: 'Enter a restaurant.' };
                });
            } else if (this.state.options.indexOf(newOption) >= 0) {
                this.setState(function () {
                    return { error: 'This restaurant is already an option' };
                });
            } else {
                this.setState(function (prevState) {
                    return { options: prevState.options.concat([newOption]),
                        error: undefined };
                });
            }
        }
    }, {
        key: 'removeOptions',
        value: function removeOptions() {
            this.setState(function () {
                return {
                    options: [],
                    error: undefined
                };
            });
        }
    }, {
        key: 'removeIndividual',
        value: function removeIndividual(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (element) {
                        return element !== option;
                    })
                };
            });
        }
    }, {
        key: 'pickOption',
        value: function pickOption() {
            var choice = Math.floor(Math.random() * this.state.options.length);
            alert('You should eat at ' + this.state.options[choice].toLowerCase().split(' ').map(function (word) {
                return word.replace(word[0], word[0].toUpperCase());
            }).join(' ') + '!');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Action, { numOptions: this.state.options.length, options: this.state.options, removeOptions: this.removeOptions, pickOption: this.pickOption }),
                React.createElement(Options, { numOptions: this.state.options.length, options: this.state.options, removeIndividual: this.removeIndividual }),
                React.createElement(Form, { addOption: this.addOption, error: this.state.error })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        { className: 'banner' },
        React.createElement(
            'h1',
            null,
            '"I don\'t know.. You pick"'
        ),
        React.createElement(
            'h3',
            null,
            React.createElement(
                'em',
                null,
                props.subtitle
            )
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.pickOption,
                disabled: props.numOptions <= 0 },
            'Where should I eat?'
        ),
        React.createElement(
            'button',
            {
                onClick: props.removeOptions },
            'Remove all restaurants'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        { className: 'options' },
        props.numOptions > 0 ? React.createElement(
            'ol',
            null,
            props.options.map(function (element) {
                return React.createElement(Option, { removeIndividual: props.removeIndividual, key: element, optionText: element });
            })
        ) : React.createElement(
            'h2',
            { className: 'getStarted' },
            'Enter some restaurant that you like'
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        { className: 'list' },
        React.createElement(
            'li',
            null,
            props.optionText
        ),
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    e.preventDefault();
                    props.removeIndividual(props.optionText);
                },
                className: 'delete' },
            'x'
        )
    );
};

var Form = function Form(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'form',
            { onSubmit: function onSubmit(e) {
                    e.preventDefault();
                    var newOption = e.target.elements.option.value.trim();
                    props.addOption(newOption);
                    e.target.elements.option.value = '';
                } },
            React.createElement('input', { className: 'textfield', type: 'text', name: 'option', placeholder: 'Enter a restaurant..' }),
            React.createElement(
                'button',
                null,
                'Add a restaurant'
            )
        ),
        React.createElement(
            'p',
            null,
            props.error
        )
    );
};

var renderDOM = function renderDOM() {
    var JSX = React.createElement(IndecisionApp, null);
    ReactDOM.render(JSX, document.getElementById('app'));
};

renderDOM();
