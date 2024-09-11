import React from "react";
import { styled } from "styled-components";
import ArrowBtn from "./ArrowBtn";
import Stats from "./Stats";

const Wrap = styled.div`
  height: 97.5vh;
  background: ${(props) => `url("/images/${props.bgimg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15rem;
  p {
    margin-top: 1rem;
  }
  animation: fadeBottom 2s;
`;

// const Buttons = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// margin-bottom:0.5rem;
// `

// const ButtonGroup = styled.div`
// display: flex;
//   justify-content: center;
//   align-items: center;
//   gap:2rem;
//   @media (max-width:768px) {
//   flex-direction: column;

//  }

// `
// const LeftButton = styled.button`
// background-color: rgba(23, 26, 32, 0.8);
//   height: 2.5rem;
//   width: 16rem;
//   color: white;
//   border: none;
//   border-radius: 2rem;
//   text-transform: uppercase;
//   font-size: 12px;
//   opacity:0.85;
//   cursor: pointer;

// `

// const RightButton = styled(LeftButton)`
// background-color: rgb(227,224,222);
// color:black;
// opacity:0.7
// `
// const DownArrow = styled.img`
// margin-top:20px;
// height:40px;
// ${'' /* overflow-y:hidden; */}
// animation: bouncingBtn infinite 1.5s;
// `

const Section = ({ tittle, background }) => {
  return (
    <Wrap bgimg={background}>
      <ItemText>
        <h1
          style={{
            fontSize: "6.9em",
            fontWeight: "500",
            color: "rgb(255, 255, 255)",
            paddingBottom: "50px",
            fontFamily:
              "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system",
          }}
        >
          {tittle}
        </h1>
        <ArrowBtn label="TRY NOW" />
      </ItemText>
      <Stats />
    </Wrap>
  );
};

export default Section;
