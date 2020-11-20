import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

type NavBarProps = {
  isMenuOpen: boolean;
};

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 3.2rem;

  padding: 1.9rem 1.9rem 0;
  margin: 0 auto;

  max-width: 1440px;
  width: 100%;
  height: 100%;

  @media (min-width: 950px) {
    padding: 3.6rem 3.6rem 0.5rem;
    row-gap: 6.4rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.1rem;

  h4 {
    font-size: 1.6rem;
    border: 1px solid #fff;
    padding: 0.8rem;
    font-family: ${props => props.theme.crismsonProFont};
    font-weight: 200;
  }
`;

export const NavBar = styled.nav<NavBarProps>`
  display: ${props => (props.isMenuOpen ? 'flex' : 'none')};

  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;

  background-color: ${props => props.theme.colors.background};
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 950px) {
    display: flex;
    flex-direction: row;

    position: initial;
    height: initial;
    width: initial;
  }
`;

export const NavItem = styled.p`
  font: 700 2.4rem ${props => props.theme.montserratFont};

  padding: 1.6rem;

  cursor: pointer;

  @media (min-width: 950px) {
    margin-right: 5.6rem;
    padding: 1.4rem;
    font-size: 1.8rem;
  }
`;

export const MenuCloseIcon = styled(MdClose)`
  position: absolute;
  right: 1.9rem;
  top: 1.3rem;

  width: 4rem;
  height: 4rem;
  cursor: pointer;

  @media (min-width: 950px) {
    display: none;
  }
`;

export const MenuIcon = styled(MdMenu)`
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  @media (min-width: 950px) {
    display: none;
  }
`;

export const Content = styled.div`
  @media (min-width: 950px) {
    position: relative;
    display: grid;

    grid-template-columns: 1fr 1.3fr;
    column-gap: 6.4rem;

    max-height: 90vh;
  }
`;

export const About = styled.section`
  h1 {
    font-family: ${props => props.theme.loraFont};
    font-size: 3.6rem;
    margin-bottom: 2.6rem;
  }
  p {
    font-family: ${props => props.theme.montserratFont};
    max-width: 41rem;
    width: 100%;
    font-weight: 300;
    font-size: 1.6rem;
  }

  @media (min-width: 950px) {
    h1 {
      font-size: 4.8rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

export const LinkReadMore = styled.p`
  display: flex;
  align-items: center;

  font-family: ${props => props.theme.montserratFont};
  font-size: 1.6rem;
  font-weight: 600;

  width: 100%;

  margin-top: 1.6rem;

  @media (min-width: 950px) {
    margin-top: 4.8rem;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  position: relative;

  margin-top: 1.6rem;
  margin-bottom: 15%;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  height: 13.8rem;
  width: 80%;
  padding: 1.6rem 0 2.5rem 2.2rem;

  bottom: -20%;
  left: 11.5%;
  background: ${props => props.theme.colors.background};

  > div {
    display: flex;
  }

  @media (min-width: 950px) {
    width: 60%;
    left: 30%;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;

  margin-right: 1.2rem;
`;

export const Person = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3,
  p {
    font-family: ${props => props.theme.montserratFont};
    font-weight: 500;
    font-size: 1.4rem;

    margin-top: 0.2rem;
  }

  p {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.secondColor};
  }
`;

export const PersonRoleDetail = styled.h5`
  margin-top: 1.2rem;
  font: 700 1.8rem ${props => props.theme.loraFont};
  width: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  p {
    font: 600 1.6rem ${props => props.theme.montserratFont};
    color: #a2a2a2;
  }
`;
