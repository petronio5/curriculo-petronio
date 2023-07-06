import React from 'react';

import { Headers, Img, Itens, Li, NavBar, Profile, Ul } from './styles';
import { BrowserRouter } from 'react-router-dom';
const Header = ({ img }) => (
  <BrowserRouter>
    <Headers>
      <NavBar>
        <Profile>
          <Img src={img} alt="profile_picture" />
        </Profile>
        <Ul>
          <Li>
            <Itens to="#about">Sobre</Itens>
          </Li>
          <Li>
            <Itens to="#contacts">Contatos</Itens>
          </Li>
          <Li>
            <Itens to="#experiencia">Experiencia</Itens>
          </Li>
          <Li>
            <Itens to="#skills">Habilidades</Itens>
          </Li>
          <Li>
            <Itens to="#projects">Projetos</Itens>
          </Li>
        </Ul>
      </NavBar>
    </Headers>
  </BrowserRouter>
);

export default Header;
