import React, { useState } from 'react';
import { MdTrendingFlat } from 'react-icons/md';

import {
  Container,
  Header,
  About,
  MenuIcon,
  LinkReadMore,
  MainContainer,
  ModalOverlay,
  Avatar,
  Person,
  PersonRoleDetail,
  Footer,
  NavBar,
  NavItem,
  Content,
  MenuCloseIcon,
} from './styles';

import avatarImg from '../assets/photo2.png';
import mainImg from '../assets/photo1.png';

const Main: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <Header>
        <h4>This Interior</h4>

        <MenuIcon onClick={() => setIsMenuOpen(true)} />

        <NavBar isMenuOpen={isMenuOpen}>
          <MenuCloseIcon onClick={() => setIsMenuOpen(false)} />

          <NavItem>Home</NavItem>
          <NavItem>Collection</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </NavBar>
      </Header>

      <Content>
        <About>
          <h1>Modern Interior</h1>

          <p>
            A full-Service residential &amp; commercial interior design and
            staging company offering professional organizing &amp; eco-services.
          </p>

          <LinkReadMore>
            Read More
            <MdTrendingFlat
              style={{ width: '3rem', height: '3rem', marginLeft: '1.5rem' }}
            />
          </LinkReadMore>
        </About>

        <MainContainer>
          <img src={mainImg} alt="" />

          <ModalOverlay>
            <div>
              <Avatar src={avatarImg} />

              <Person>
                <h3>Aliza Webber</h3>
                <p>Interior designer</p>
              </Person>
            </div>
            <PersonRoleDetail>
              Designed in 2020 by Aliza Webber
            </PersonRoleDetail>
          </ModalOverlay>
        </MainContainer>
      </Content>

      <Footer>
        <p>Paulo Henrique @ DevChallenges.io</p>
      </Footer>
    </Container>
  );
};

export default Main;
