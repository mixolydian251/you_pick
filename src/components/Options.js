import React from 'react';
import Option from './Option.js';

const Options = (props) => (
    <div className="options">
        {props.options.length > 0 ? <ol>
            {props.options.map((element) => <Option
                                            removeIndividual={props.removeIndividual}
                                            key={element}
                                            optionText={element}/>
            )}
        </ol> : <h2>Enter some restaurants that you like</h2>}
    </div>
);

export {Options as default}