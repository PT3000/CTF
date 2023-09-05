import React,{useState} from 'react';
import Modal from '../components/Modal/modal'

const login = ({open,onClose}) => {

return (
        <Modal
        open={open}
        onClose={onClose}>
            <p>hello world</p>
        </Modal>
    )
}

export default login;