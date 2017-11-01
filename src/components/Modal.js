import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(86, 86, 86, 0.7)'
    }
};


const Modal = (props) => (
    <ReactModal
        className="modal"
        isOpen={props.modalActive}
        contentLabel="Where you should eat"
        onRequestClose={props.closeModal}
        style={customStyles}>
        <h2>{`You should eat at..`}</h2>
        <h1>{`${props.restaurant}!`}</h1>
        <button onClick={props.closeModal}>Okay</button>
    </ReactModal>
);

export {Modal as default}