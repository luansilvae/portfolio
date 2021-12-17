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
  max-height: 400px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const AboutSection = styled.div`
  max-width: 700px;

  h2 {
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #1c2237;
  }

  p {
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 32px;
    color: #1c2237;
    text-align: left;
  }
`;
