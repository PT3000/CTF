import React from 'react';
import Modal from '../components/Modal/modal'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Team = ({open,onClose}) => {

const style = {
    width: 1000,
    height : 700,
    overflowY: 'auto',
}

return (
        <Modal
        open={open}
        onClose={onClose}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2" align="center">
              Team
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
            </Typography>
          </Box>
        </Modal>
    )
}

export default Team;