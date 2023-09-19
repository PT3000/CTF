import './css/App.css';
import discord from './assets/discord.png';

function App() {

  const card = {
    width:"300px",
    height:"400px",
    backgroundColor:"black",
    borderRadius:'30px',
    color:"white"
  }

  const cardForm = {
    display:'flex',
    justifyContent: 'space-around',
    padding:'60px',
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style = {{marginBottom:"20px"}}>
          <p style = {{fontSize:"300px"}}>CTF</p>
          <p style = {{marginTop:"150px",fontSize:"40px"}}> Welcome to the CTF</p>
          <p> Start : 20xx-0x-xx xx:xx:xx</p>
          <p> End : 20xx-0x-xx xx:xx:xx</p>
          <img src={discord} style={{width:"250px",height:"250px",marginTop:"30px"}}></img>
          <p style={{fontSize:"25px",marginTop:"20px"}}>If you want to hint, join the Discord!</p>
        </div>
      </header>
      <div className="body">
        <h1 style={{color:"white",paddingTop:"50px"}}>You can solve a variety of problems</h1>
        <div style={cardForm}>
          <div style={card}>
              
          </div>
          <div style={card}>
              
          </div>
          <div style={card}>
              
          </div>
          <div style={card}>
              
          </div>
          <div style={card}>
              
          </div>
        </div>
      </div>
      <div className="body2">
        <h1 style={{padding:"40px",color:"white"}}>You Can Sumbit the Flag</h1>
      </div>
  </div>
      
  );
}

export default App;
