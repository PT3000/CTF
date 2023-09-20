import React, {useState} from 'react';
import Modal from './modal'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const challengeModal = ({open,onClose}) => {

    const style = {
        width: 500,
        height : 400,
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
                Challenge Modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               
            </Typography>
        </Box>
        </Modal>
    )
}

export default challengeModal;