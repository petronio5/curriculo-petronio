import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import { BsFacebook } from 'react-icons/bs';
import { Facebook, Github, Li, Linkedin, Ul } from './styles';

const Redes = () => (
  <Ul>
    <Li>
      <Linkedin
        href="https://www.linkedin.com/in/petronio-jose-a5663a253/"
        target="_blank"
      >
        <BsLinkedin />
      </Linkedin>
    </Li>
    <Li>
      <Github href="https://github.com/petronio5" target="_blank">
        <GoMarkGithub />
      </Github>
    </Li>
    <Li>
      <Facebook
        href="https://www.facebook.com/petronio.josedasilva"
        target="_blank"
      >
        <BsFacebook />
      </Facebook>
    </Li>
  </Ul>
);

export default Redes;
