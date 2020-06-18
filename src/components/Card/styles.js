import styled from "styled-components";

export const Article = styled.article`
  width: 18rem;
  background: white;
  margin-bottom: 2rem;
  //height: 23rem;
  border-radius: 8px;
  padding: 1.5rem;
  -webkit-box-shadow: 6px 6px 28px -9px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 6px 6px 28px -9px rgba(0, 0, 0, 0.64);
  box-shadow: 6px 6px 28px -9px rgba(0, 0, 0, 0.64);
  display: flex;
  flex-direction: column;
  & > section:first-child {
    //height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:first-child {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      & > p:first-child {
        color: #2b7ce9;
        font-size: 1.4rem;
        & > i {
          vertical-align: middle;
          cursor: pointer;
        }
      }
      & > p {
        color: #2b7ce9;
        font-size: 2rem;
      }
      & > button {
        border: none;
        background: #5896e8;
        border-radius: 80px;
        width: 3rem;
        height: 3rem;
        position: absolute;
        top: 1rem;
        left: 19.8rem;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        & > img {
          display: block;
          transition: 0.4s;
          transform: ${({ rotateImage }) =>
            rotateImage ? "rotate(90deg)" : "rotate(0deg)"};
          width: 1.5rem;
        }
      }
    }
    & > div:last-child {
      // margin-top: 3.5rem;
      color: #2b7ce9;
      font-size: 2rem;
      & > p {
        // margin: 2.5rem;
      }
      & > div {
        text-align: center;
        margin-top: 3.5rem;
        margin-bottom: 2rem;
        & > i {
          font-size: 4rem;
        }
      }
    }
  }
  & > section:last-child {
    border-top: 3px solid #2b7ce9;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    // height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 2rem;
      & > p {
        color: #2b7ce9;
        font-weight: 300;
        & > label {
          font-weight: 500;
        }
      }
    }
  }
`;
