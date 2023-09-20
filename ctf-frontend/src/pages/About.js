import React from 'react';
import Modal from '../components/Modal/modal'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const About = ({open,onClose}) => {

    const style = {
        width: 800,
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
                About
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            https://codepen.io/danielwaltz/pen/DZOEdN
            </Typography>
        </Box>
        </Modal>
    )
}

export default About;