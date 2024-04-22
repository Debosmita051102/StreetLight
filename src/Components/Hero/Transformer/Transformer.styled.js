import styled from "styled-components";

export const Main = styled.div`
  background-image: url(${"https://wallpapers.com/images/hd/electric-background-t7jhuccoiprq0bih.jpg"});
  background-size: cover;
  background-position: center;
  padding: 0vh 9.5vw; /* Adjust padding for vertical and horizontal spacing */
  min-height: 100vh; /* Ensure the container takes up the full viewport height */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10vh 10px; /* Adjust padding for smaller screens */
  }
`;

export const Header2 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: -50px; 

  @media (max-width: 768px) {
    font-size: 20px; /* Adjust font size for smaller screens */
  }
`;
