import React from 'react';

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

export {Action as default}