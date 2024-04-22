import { Link } from "react-router-dom";
import styled from "styled-components"; // Remove unnecessary imports

export const StyledContainer = styled.div`
  height: 400px;
  width: 334px;
  cursor: pointer;
  margin: 40px;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
  }
`;

export const Main = styled(Link)`
  z-index: 1;
  height: 400px;
  width: 300px;
  border-radius: 10%;
  padding: 10px;
  background-color: rgba(0, 0, 0 , 0.7);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  @media (max-width: 600px) {
    /* height: 350px; */
    width: 300px;
  }
`;

export const ImageBox = styled.div`
  height: 80%;
  width: 100%;
  border-radius: 11%;
  background-image: url(${({ $ImageLink }) => $ImageLink});
  background-size: cover;
  background-position: center;
`;

export const Title = styled.div`
  text-transform: uppercase;
  display: grid;
  place-content: center;
  height: 20%;
  width: 100%;
  /* font-size: x-large; */
  /* padding: 10%; */
  color: white;
  transform-style: preserve-3d;
  transform: translateZ(200px);
  text-align: center;
  font-size: 1.4rem;
`;
export const SubText = styled.div`
  height: 15%;
  width: 100%;
  color: white;
  padding: 2%;
  text-align: center;
`;

export const Button = styled.button`
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  border-radius: 10px;
  background-color: #11172b;
  color: white;
`;
