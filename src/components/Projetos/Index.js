import React from 'react';
import SubTitle from '../SubTitle/Index';
import { LinkProjetos } from './styled';
import { BrowserRouter } from 'react-router-dom';

const Projetos = () => (
  <BrowserRouter>
    <SubTitle
      texto={'Aqui está alguns projetos feitos mediante vídeos aulas'}
    />
    <LinkProjetos
      to="https://github.com/petronio5/html-css"
      target="_blank"
      rel="noopener noreferrer"
    >
      Projeto feito com 26 exemplos e 14 desafios sobre desenvovimento Web HTML
      5 e CSS.
    </LinkProjetos>{' '}
    <LinkProjetos
      to="https://github.com/petronio5/social-petronio"
      target="_blank"
      rel="noopener noreferrer"
    >
      Projeto de redes Socias ainda em desenvovimento.
    </LinkProjetos>{' '}
    <LinkProjetos
      to="https://github.com/petronio5/curriculo-dev-backend"
      target="_blank"
      rel="noopener noreferrer"
    >
      Projeto curriculo de desenvolvedor backend em desenvovimento.
    </LinkProjetos>
  </BrowserRouter>
);

export default Projetos;
