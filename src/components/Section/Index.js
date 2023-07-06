import React from 'react';
import Card from '../Card/Index';
import { Highlight, Info } from '../Card/styles';
import Title from '../Title/Index';
import { SectionHeading, Sections } from './stlyes';
import SubTitle from '../SubTitle/Index';
import Redes from '../Redes/Index';
import Habilidade from '../Habilidades/Index';
import Projetos from '../Projetos/Index';

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto="Olá pessoal sou o" />
      <SectionHeading>
        {profile.nome}
        <Highlight> {profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado} - {profile.contato} <br />
        <Highlight>{profile.email}</Highlight>
      </Info>
      <p>{profile.biografia}</p>
      <div className="contacts" id="contacts">
        <SubTitle texto="Contatos" />
        <Redes />
      </div>
    </Sections>
    <Sections id="experiencia">
      <Title texto="Experiência" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          subTitle={val.cargo}
          subTitleH3={val.empresa}
          data={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title texto="Habilidades" />
      <SubTitle texto="Habilidades que Domino" />
      <Habilidade />
    </Sections>
    <Sections id="projects">
      <Title texto="Projetos" />
      <Projetos />
    </Sections>
  </>
);

export default Section;
