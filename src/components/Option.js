import React from 'react';

const Option = (props) => (
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
);

export {Option as default}