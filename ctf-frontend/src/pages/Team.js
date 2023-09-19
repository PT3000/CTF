import React from 'react';
import Modal from '../components/Modal/modal'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Team = ({open,onClose}) => {

const style = {
  width: 420,
  height: 540,
}

const TextForm = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: '10vh',
  marginTop:'0.1vh',
}

const InputDesign = {
  width:'41vh',
  height:'5vh',
  borderRadius:'30px',
  border:'0',
}

const ButtonDesign = {
  fontSize:"20px",
  color:"white",
  backgroundColor:"black",
  padding:'15px 60px',
  display:'flex',
  margin:'auto',
  marginTop:'15px'
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