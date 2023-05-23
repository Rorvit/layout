import styled from "@emotion/styled";
import images from "../../../../public/images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <Main>
      <FooterWrapper>
        <Nav>
          <NavLogo src={images} alt="logo" />
        </Nav>
        <FooterColumn>
          <Column1>
            Главная <br /> Контакты <br />
            Вакансии
          </Column1>
          <Column2>
            Детская группа
            <br /> Школьная группа
            <br /> Подростковая группа
            <br /> Взрослая группа <br />
            Международная программа
            <br /> Летняя программа
            <br /> Трёхдневный курс
          </Column2>
          <Column3>
            Новости
            <br /> Мероприятия <br />
            Блог
          </Column3>
          <Column4>
            Расписание <br />
            Галерея
          </Column4>
          <Column5>
            8 (800) 100-81-35
            <br />
            info@sisi-elizabeth.com
          </Column5>
        </FooterColumn>
        <FooterSocial>
          <ColumnInfo1>
            ИНН: 7801351540 <br />
            ОГРН: 1137800010875
          </ColumnInfo1>
          <ColumnInfo2>
            2012-2022 Austrian Higher School of Ladies. Все права защищены.
          </ColumnInfo2>
          <ColumnInfo3>Договор-оферта</ColumnInfo3>
        </FooterSocial>
      </FooterWrapper>
    </Main>
  );
};

const Main = styled.footer`
  display: grid;
  height: 400px;
  /* background-color: #f7f7f7; */
  max-width: 1260px;
  padding: 0 20px;
  margin: 10px auto;
`;
const FooterWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  max-height: 400px;
`;
const Nav = styled.div`
  display: grid;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  margin-left: 100px; ;
`;
const NavLogo = styled(Image)``;
const FooterColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
  margin-left: 100px;
`;
const Column1 = styled.div`
  margin-top: 30px;
  margin-left: 15px;
`;
const Column2 = styled.div`
  margin-top: 30px;
`;
const Column3 = styled.div`
  margin-top: 30px;
  margin-left: 15px;
`;
const Column4 = styled.div`
  margin-top: 30px;
  margin-left: 15px;
`;
const Column5 = styled.div`
  margin-top: 30px;
  margin-left: 15px;
`;
const FooterSocial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const ColumnInfo1 = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;
const ColumnInfo2 = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;
const ColumnInfo3 = styled.div`
  display: grid;
  margin-left: 70px;
  align-content: center;
`;

/* object-fit: "contain"; */

export default Footer;
