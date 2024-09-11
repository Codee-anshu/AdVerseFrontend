import React, { useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { selectCar } from "../features/car/carSlice";
import { useSelector } from "react-redux";
import Button from "./Button";

// Styled components
const Container = styled.div`
  background-color: rgb(0, 0, 0);
  border-radius: 2px 2px 2px rgb(0, 0, 0);
  width: 100vw;
  position: fixed;
  padding: 3.5px 40px;
  display: flex;
  justify-content: space-between; /* Space out items */
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-family: __Inter_36bd41, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
    color: rgb(192, 192, 192);
    font-weight: 400;
    font-size: 0.8rem;
    padding: 0.5rem 0.5rem 0.75rem 0.75rem;
    transition: linear 0.5s;
  }

  p:hover {
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 15px;
    padding: 0.4rem 0.5rem;
    transition: linear 0.5s;
  }

  p:hover {
    background-color: rgba(174, 174, 174, 0.53);
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  list-style: none;
  background-color: white;
  width: 16.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
  cursor: pointer;
  li {
    padding: 0.4rem 0.5rem;
    width: 13rem;
  }
  a {
    font-weight: 500;
    font-size: 14px;
  }
  li:hover {
    background-color: rgba(222, 220, 220, 0.493);
    border-radius: 5px;
  }
  .icon {
    margin-left: 11rem;
    margin-bottom: 1.5rem;
  }

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: linear 0.3s;
`;

const FullWidthp = styled.p`
  width: 600px; /* Make the span grow to take up available space */
`;

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  const cars = useSelector(selectCar);

  const showBurgerNav = () => {
    setBurgerState(true);
  };

  const hideBurgerNav = () => {
    setBurgerState(false);
  };

  return (
    <Container>
      <a>
        <img src="/images/adVerse.png" alt="Ads" style={{height:'16px'}}/>
      </a>

      <Menu>
        <p style={{ cursor: "pointer" }}>Monetize</p>
        <p style={{ cursor: "pointer" }}>Publish</p>
        <p style={{ cursor: "pointer" }}>Demo</p>
        <p style={{ cursor: "pointer" }}>Community</p>
        <p style={{ cursor: "pointer" }}>Support</p>
        <FullWidthp></FullWidthp>
      </Menu>

      <RightMenu>
        <Button label="PLANS AND PRICING" />
      </RightMenu>

      <BurgerNav show={burgerState}>
        <FontAwesomeIcon icon={faX} className="icon" onClick={hideBurgerNav} />
        {cars &&
          cars.map((car, index) => {
            return (
              <li key={index}>
                <a href="#">{car}</a>
              </li>
            );
          })}
        <li>
          <a href="#">existing inventory</a>
        </li>
        <li>
          <a href="#">used inventory</a>
        </li>
        <li>
          <a href="#">demo drive</a>
        </li>
        <li>
          <a href="#">insurance</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;
