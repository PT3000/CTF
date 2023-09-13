import React from 'react';
import Modal from '../components/Modal/modal'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const register = ({open,onClose}) => {

const style = {
  height: 500,
}

return (
        <Modal
        open={open}
        onClose={onClose}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2" align="center">
              Register
            </Typography>
          </Box>
        </Modal>
    )
}

export default register;