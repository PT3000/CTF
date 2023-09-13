import React from 'react';
import Modal from '../components/Modal/modal'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const register = ({open,onClose}) => {

const style = {
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
              Register
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div style={TextForm}>
                <p style={{marginRight:'350px'}}>email</p>
                <input style={InputDesign} type="text" />
              </div>
              <div style={TextForm}>
                <p style={{marginRight:'325px'}}>nickname</p>
                <input style={InputDesign} type="text" />
              </div>
              <div style={TextForm}>
              <p style={{marginRight:'320px'}}>password</p>
                <input style={InputDesign} type="text" />
              </div>
              <div style={TextForm}>
              <p style={{marginRight:'306px'}}>repassword</p>
                <input style={InputDesign} type="text" />
              </div>
              <button style={ButtonDesign}>Register</button>
            </Typography>
          </Box>
        </Modal>
    )
}

export default register;