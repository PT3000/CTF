import React from 'react';
import Modal from '../components/Modal/modal'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const crypto = ({open,onClose}) => {

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
                Crypto
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="grid">
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                    <div className="CardContainer">
                        fdfdssd
                    </div>
                </div>
            </Typography>
        </Box>
        </Modal>
    )
}

export default crypto;