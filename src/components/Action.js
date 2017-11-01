import React from 'react';

const Action = (props) => (
    <div>
        <button
            onClick={props.pickOption}
            disabled={props.options.length <= 0}>
            You Pick!
        </button>
        <button
            onClick={props.removeOptions}>
            Remove all
        </button>
    </div>
);

export {Action as default}