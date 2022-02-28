import styled from "styled-components";

export const Container = styled.section`
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin: 0 auto;
  padding: 100px 30px;

  @media(max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  border-radius: 50%;
  max-height: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media(max-width: 768px) {
    max-height: 200px;
  }
`;

export const AboutSection = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  gap: 20px;

  @media(max-width: 768px) {
    text-align: center;
    align-items: center;
  }

  h2 {
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #1c2237; 
  }

  p {
    font-size: 20px;
    line-height: 32px;
    color: #1c2237;
  }
`;

export const ButtonCV = styled.a`
  display: flex;
  align-items: center;
  justify-content:left;
  gap: 10px;
  max-width: 150px;
  padding: 10px 0;
  font-weight: 600;
  color: #6C63FF;

  &:hover{
    transition: all 200ms ease-in-out;
    color: #3e32fc; 
  }

  svg {
    width: 24px;
    height: 24px;
  }
`
