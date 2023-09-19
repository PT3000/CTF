import React from 'react';
import Modal from '../components/Modal/modal'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import kakao from '../assets/kakao-talk.png';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import github from '../assets/github.png';

const login = ({open,onClose}) => {

const style = {
  height : 420,
  width: 450,
}

const TextForm = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10vh',
  marginTop: '10px',
}

const InputDesign = {
  width:'41vh',
  height:'5vh',
  borderRadius:'30px',
  border:'0',
}

const AuthForm = {
  display: 'flex',
  justifyContent: 'space-around',
}

const AuthDesign = {
  display:'flex',
  width:'60px',
  height:'60px',
  backgroundColor:'white',
  borderRadius:'10vh',
}

const IconDesign = {
  width:"36px",
  height:"40px",
  margin:'auto'
}

const ButtonDesign = {
  fontSize:"20px",
  color:"white",
  backgroundColor:"black",
  padding:'15px 60px',
  display:'flex',
  margin:'auto'
}

return (
    <Modal 
      open={open}
      onClose={onClose}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h3" component="h2" align="center">
          Log-in
        </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div style={AuthForm}>
              <div style={AuthDesign}>
                <img style = {IconDesign} src={kakao} />
              </div>
              <div style={AuthDesign}>
                <img style = {IconDesign} src={google} />
              </div>
              <div style={AuthDesign}>
                <img style = {IconDesign} src={apple} />
              </div>
              <div style={AuthDesign}>
                <img style = {IconDesign} src={github} />
              </div>
            </div>
            <div style={TextForm}>
              <input style={InputDesign} type="text" />
            </div>
            <div style={TextForm}>
              <input style={InputDesign} type="password" />
            </div>
            <button style={ButtonDesign}>Login</button>
          </Typography>
          </Box>
    </Modal>
  )
}

export default login;