import React from 'react';
import Modal from '../components/Modal/modal'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import '../css/card.css'

const web = ({open,onClose}) => {

    const style = {
        width: 1150,
        height : 700,
        overflowY: 'auto',
    }

    return (
        <Modal 
            open={open}
            onClose={onClose}
            scrollable={true}
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2" align="center">
                Web
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="grid">
                    <div className="CardContainer">
                        web1
                    </div>
                    <div className="CardContainer">
                        web2
                    </div>
                    <div className="CardContainer">
                        web3
                    </div>
                    <div className="CardContainer">
                        web4
                    </div>
                    <div className="CardContainer">
                        web5
                    </div>
                    <div className="CardContainer">
                        web6
                    </div>
                    <div className="CardContainer">
                        web7
                    </div>
                    <div className="CardContainer">
                        web8
                    </div>
                    <div className="CardContainer">
                        web9
                    </div>
                </div>
            </Typography>
        </Box>
        </Modal>
    )
}

export default web;