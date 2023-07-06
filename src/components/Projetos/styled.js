import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const LinkProjetos = styled(HashLink)`
  font-size: 1.3rem;
  line-height: 1;
  color: black;
  padding: 10px;
  display: flex;
  &:hover {
    opacity: 0.8;
    color: blue;
    text-decoration: underline;
  }
`;
