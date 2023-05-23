import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import images from "../../../../public/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <Main>
      <Anonce>
        <AnonceLabel>Мастер класс</AnonceLabel>
        <AnonceTitle>"Как элегантно реагировать на хамство?"</AnonceTitle>
        <AnonceButton>Подробнее</AnonceButton>
        {/* <AnonceButton>jioojio</AnonceButton> */}
      </Anonce>
      <Nav>
        <NavLogo src={images} alt="logo" />
        <NavBar>
          <Link href="/" passHref={true}>
            <NavLink>Школа</NavLink>
          </Link>
          <Link href="/" passHref={true}>
            <NavLink>Очное обучение</NavLink>
          </Link>
          <Link href="/" passHref={true}>
            <NavLink>Онлайн обучение</NavLink>
          </Link>
          <Link href="/" passHref={true}>
            <NavLink>События</NavLink>
          </Link>
          <Link href="/" passHref={true}>
            <NavLink>Магазин</NavLink>
          </Link>
          <Link href="/" passHref={true}>
            <NavLink>Проекты</NavLink>
          </Link>
          <Link href="/" passHref={true}>
            <NavLink>Галерея</NavLink>
          </Link>
          <Link href="/cart" passHref={true}>
            <NavLink>Корзина</NavLink>
          </Link>
        </NavBar>
      </Nav>
    </Main>
  );
};

const Main = styled.div`
  background-color: #000000;
  height: 50px;
`;

const Anonce = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 5fr 0.8fr;
  justify-items: start;
  align-items: center;
  margin: 0 auto;
  padding: 8px 0;
  max-width: 1040px;
`;
const AnonceLabel = styled.div`
  background-color: #d59e8a;
  cursor: pointer;
  border: 5px solid #d59e8a;
`;
const AnonceTitle = styled.div`
  color: #ffffff;
`;
const AnonceButton = styled.button`
  letter-spacing: 0.115em;
  text-transform: uppercase;
  max-width: 120px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 100px auto;
  column-gap: 100px;
  margin: 20px auto;
  padding: 0 20px;
  max-width: 1040px;
`;

const NavLogo = styled(Image)`
  align-content: center;
`;

const NavBar = styled.div`
  display: grid;
  grid-template-columns: repeat(8, auto);
  align-content: center;
  width: 100%;
`;
const NavLink = styled.a`
  color: rgba(33, 33, 33, 0.4);
  &:hover {
    color: #d59e8a;
  }
`;

// hover: #d59e8a;

export default Header;
