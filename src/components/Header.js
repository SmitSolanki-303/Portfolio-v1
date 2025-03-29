import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { AiOutlineBehanceSquare } from "react-icons/ai";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <header style={{ top: visible ? '0' : '-80px' }}>
      <div className="left">
        <a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer">
          <IoMdMail className="social-icon" />
        </a>
        <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow className="social-icon" />
        </a>
        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
          <AiOutlineBehanceSquare className="social-icon" />
        </a>
      </div>
      <div className="right">
        <ScrollLink to="landing" smooth={true} duration={500}>Introduction</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>Featured Projects</ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>Contact Me</ScrollLink>
      </div>
    </header>
  );
};

export default Header;
