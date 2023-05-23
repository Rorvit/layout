import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Cart = () => {
  return (
    <Main>
      <Breadcrumb>
        <Link href="/" passHref={true}>
          <NavLink>
            Гланый инсайд / Интернет-магазин / Корзина / Платье Fleur
          </NavLink>
        </Link>
      </Breadcrumb>
      <Container>
        <Photo src="/images/img2.png" alt="img2" />
        <Body></Body>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  max-width: 1040px;
  padding: 0 20px;
  margin: 140px auto;
`;
const Breadcrumb = styled.div``;
const NavLink = styled.div`
  color: rgba(33, 33, 33, 0.4);
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  max-width: 1040px;
  padding: 0 20px;
  margin: 80px auto;
`;
const Body = styled.div`
  /* font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #212121; */
`;
const Photo = styled.img``;

export default Cart;
