import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginModal from '../pages/login';
import RegisterModal from '../pages/register';
import CryptoModal from '../pages/crypto';
import MiscModal from '../pages/misc';
import NetworkModal from '../pages/network';
import PwnableModal from '../pages/pwnable';
import WebModal from '../pages/web';
import ScoreboardModal from '../pages/Scoreboard';
import TeamModal from '../pages/Team';
import AboutModal from '../pages/About';

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [scoreboardOpen, setScoreboardOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [cryptoOpen, setCryptoOpen] = useState(false);
  const [webOpen, setWebOpen] = useState(false);
  const [miscOpen, setMiscOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [pwnableOpen, setPwnableOpen] = useState(false);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleRegisterClose = () => setRegisterOpen(false);

  const handleScoreboardOpen = () => setScoreboardOpen(true);
  const handleScorebaordClose = () => setScoreboardOpen(false);

  const handleTeamOpen = () => setTeamOpen(true);
  const handleTeamClose = () => setTeamOpen(false);

  const handleAboutOpen = () => setAboutOpen(true);
  const handleAboutClose = () => setAboutOpen(false);

  const handleCryptoOpen = () => setCryptoOpen(true);
  const handleCryptoClose = () => setCryptoOpen(false);

  const handleMiscOpen = () => setMiscOpen(true);
  const handleMiscClose = () => setMiscOpen(false);
  
  const handleNetworkOpen = () => setNetworkOpen(true);
  const handleNetworkClose = () => setNetworkOpen(false);

  const handlePwnableOpen = () => setPwnableOpen(true);
  const handlePwnableClose = () => setPwnableOpen(false);

  const handleWebOpen = () => setWebOpen(true);
  const handleWebClose = () => setWebOpen(false);

  return (
    <div>
      <Navbar className="fixed-top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CTF</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleScoreboardOpen}>Scoreboard</Nav.Link>
              <NavDropdown title="Challenges" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleWebOpen}>Web</NavDropdown.Item>
                <NavDropdown.Item onClick={handleCryptoOpen}>Crypto</NavDropdown.Item>
                <NavDropdown.Item onClick={handleNetworkOpen}>Network</NavDropdown.Item>
                <NavDropdown.Item onClick={handleMiscOpen}>Misc</NavDropdown.Item>
                <NavDropdown.Item onClick={handlePwnableOpen}>Pwnable</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={handleTeamOpen}>Team</Nav.Link>
              <Nav.Link onClick={handleAboutOpen}>About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={handleRegisterOpen}>Register</Nav.Link>
              <Nav.Link onClick={handleLoginOpen}>Login</Nav.Link>
              <LoginModal open={loginOpen} onClose={handleLoginClose} />
              <RegisterModal open={registerOpen} onClose={handleRegisterClose} />
              <ScoreboardModal open={scoreboardOpen} onClose={handleScorebaordClose} />
              <TeamModal open={teamOpen} onClose={handleTeamClose}/>
              <AboutModal open={aboutOpen} onClose={handleAboutClose} />
              <CryptoModal  open={cryptoOpen} onClose={handleCryptoClose} />
              <MiscModal open={miscOpen} onClose={handleMiscClose} />
              <NetworkModal open={networkOpen} onClose={handleNetworkClose} />
              <PwnableModal open={pwnableOpen} onClose={handlePwnableClose} />
              <WebModal open={webOpen} onClose={handleWebClose} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
