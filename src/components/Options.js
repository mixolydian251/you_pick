import React from 'react';
import Option from './Option.js';

const Options = (props) => {
    return (
        <div className="options">
            {props.numOptions >0 ? <ol>
                {props.options.map((element) => <Option removeIndividual={props.removeIndividual} key={element} optionText={element}/>)}
            </ol> : <h2 className="getStarted">Enter some restaurant that you like</h2>}
        </div>
    )
};

export {Options as default}