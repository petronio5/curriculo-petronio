import React from 'react';
import SubTitleH3 from '../SubTitleH3/Index';
import { Lih } from './styled';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFiletypeCss } from 'react-icons/bs';
import { DiJavascript1, DiReact, DiNodejsSmall } from 'react-icons/di';
import { SiLua } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import {
  IconeCss,
  IconeHtml,
  IconeJS,
  IconeLua,
  IconeNode,
  IconePython,
  IconeReact,
  Ul,
} from '../Redes/styles';

const Habilidade = () => (
  <Ul>
    <Ul>
      {' '}
      <SubTitleH3 texto={'Desenvolvimento Web'} />
      <Lih>
        HTML5 70%{' '}
        <IconeHtml
          href="https://www.w3schools.com/html/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillHtml5 />
        </IconeHtml>
      </Lih>
      <Lih>
        CSS 50%{' '}
        <IconeCss
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFiletypeCss />
        </IconeCss>
      </Lih>
    </Ul>
    <Ul>
      {' '}
      <SubTitleH3 texto={'Progamação'} />
      <Lih>
        JavaScript 60%
        <IconeJS
          href="https://www.w3schools.com/js/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiJavascript1 />
        </IconeJS>
      </Lih>
      <Lih>
        Python 45%
        <IconePython
          href="https://www.w3schools.com/python/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPython />
        </IconePython>
      </Lih>
      <Lih>
        Lua 75%
        <IconeLua
          href="https://www.lua.org/manual/5.1/pt/manual.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLua />
        </IconeLua>
      </Lih>
    </Ul>
    <Ul>
      {' '}
      <SubTitleH3 texto={'Framework '} />
      <Lih>
        React 25%
        <IconeReact
          href="https://legacy.reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiReact />
        </IconeReact>
      </Lih>
      <Lih>
        Node 5%
        <IconeNode
          href="https://nodejs.org/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiNodejsSmall />
        </IconeNode>
      </Lih>
    </Ul>
  </Ul>
);

export default Habilidade;
