import React from 'react';

const Form = (props) => (
    <div>
        <form
            className="form"
            onSubmit={(e) => {
                e.preventDefault();
                let newOption = e.target.elements.option.value.trim();
                props.addOption(newOption);
                e.target.elements.option.value = '';
            }
        }>
            <input className="" type="text" name="option" placeholder="Enter a restaurant.."/>
            <button>
                Add a restaurant
            </button>
        </form>
        <p>{props.error}</p>
    </div>
);

export {Form as default}