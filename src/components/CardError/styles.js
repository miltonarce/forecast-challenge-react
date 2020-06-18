import styled from "styled-components";

export const Article = styled.article`
  width: 18rem;
  background: #e82c3b;
  height: 23rem;
  border-radius: 8px;
  padding: 1.5rem;
  -webkit-box-shadow: 6px 6px 28px -9px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 6px 6px 28px -9px rgba(0, 0, 0, 0.64);
  box-shadow: 6px 6px 28px -9px rgba(0, 0, 0, 0.64);
  & > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > picture {
      margin-top: 3rem;
      text-align: center;
      & > img {
        width: 4rem;
        height: 4rem;
      }
    }
    & > p {
      margin-top: 2rem;
      color: white;
      font-weight: 600;
      text-align: center;
    }
  }
`;
