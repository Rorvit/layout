import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Sidebar = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCounter((prev) => {
      if (prev == 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <Main>
      <Breadcrumb>
        <Link href="/" passHref={true}>
          <NavLink>Гланый инсайд / Интернет-магазин / Платье Fleur</NavLink>
        </Link>
      </Breadcrumb>
      <Head>
        <HeadTitle>Платье Fleur</HeadTitle>
        <HeadStatus type="radio" name="headstatus">
          <span></span>
          <Status>В наличии</Status>
        </HeadStatus>
      </Head>
      <Configurations>
        <RadioButton>
          <ConfigurationsRadio type="radio" name="Configurations" />
          <span></span>
        </RadioButton>
        <ConfigurationsTitle>
          Платье Fleur, поливискоза, любой размер
        </ConfigurationsTitle>
        <ConfigurationsPrice>28.500 ₽</ConfigurationsPrice>
      </Configurations>
      <Configurations>
        <RadioButton>
          <ConfigurationsRadio type="radio" name="Configurations" />
          <span></span>
        </RadioButton>
        <ConfigurationsTitle>
          Платье Fleur,шерсть, любой размер
        </ConfigurationsTitle>
        <ConfigurationsPrice>44.000 ₽</ConfigurationsPrice>
      </Configurations>

      <Basket>
        <BasketCounter>
          <ClickCount onClick={handleDecrement}>-</ClickCount>
          {counter}
          <ClickCount onClick={handleIncrement}>+</ClickCount>
        </BasketCounter>
        <BasketPrice>{28500 * counter}₽ </BasketPrice>
        <BasketAddButton>Добавить в корзину</BasketAddButton>
      </Basket>
      <Sometext>Возможные цвета и размер уточняйте у менеджера.</Sometext>
      <Description>
        <Compound>Состав:</Compound>
        <Compound1>95% поливискоза, 5% эластан</Compound1>
        <Delivery>Срок доставки:</Delivery>
        <Delivery1>
          2.5 — 3 недели (доставка осуществляется по России) <br /> Доставка
          БЕСПЛАТНО!
        </Delivery1>
      </Description>
    </Main>
  );
};

const Main = styled.div`
  display: grid;
  align-content: start;
  background-color: #fffdfd;
  max-height: 713px;
`;
const Breadcrumb = styled.div`
  margin-bottom: 60px;
`;
const NavLink = styled.div`
  color: rgba(33, 33, 33, 0.4);
`;

const Head = styled.div`
  margin-bottom: 40px;
  display: grid;
`;
const HeadTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #212121;
`;
const HeadStatus = styled.div`
  display: grid;
  grid-template-columns: 20px 180px;
  align-items: center;

  & span {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #027600;
  }
`;
const Status = styled.div`
  display: grid;
`;
const Configurations = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 3fr 1fr;
  margin-bottom: 10px;
`;
const ConfigurationsRadio = styled.input`
  opacity: 0;
  transition: 0.2s;
  position: absolute;

  & ~ span {
    position: relative;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    border: 1px solid #d59e8a;
    cursor: pointer;
  }
  &:checked ~ span::after {
    transition: 0.2s;
    content: " ";
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #db9980;
    box-shadow: 0px 0px 4px #d59e8a;
  }
`;

const RadioButton = styled.label`
  display: grid;
  align-items: center;
`;

const ConfigurationsTitle = styled.div`
  display: grid;
`;
const ConfigurationsPrice = styled.div`
  color: #d59e8a;
  display: grid;
  justify-content: end;
`;

const Basket = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 40px;
`;
const BasketCounter = styled.button`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid #272727;

  align-items: center;
  width: 139.88px;
  height: 53.55px;
`;
const ClickCount = styled.div`
  cursor: pointer;

  border: 0 solid #272727;
  line-height: 47px;
  text-decoration: none;
`;
const BasketPrice = styled.div`
  display: grid;
  font-size: 22px;
  text-align: center;
  color: #272727;
  align-content: center;
`;
const BasketAddButton = styled.button`
  display: grid;
  align-content: center;
  color: #ffffff;
  background: #d59e8a;
  border-style: none;
  cursor: pointer;
`;

const Sometext = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
`;
const Description = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Compound = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px; ;
`;
const Delivery = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
const Compound1 = styled.div``;
const Delivery1 = styled.div``;
export default Sidebar;
