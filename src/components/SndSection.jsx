import React from "react";
import { styled } from "styled-components";
import ArrowBtn from "./ArrowBtn";
import Button from "./Common/Button/Button";
import { useNavigate } from "react-router-dom";


const Wrap = styled.div`
  height: 80.8vh;
  background: ${(props) => `url("/images/${props.bgimg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Parent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(21, 21, 20, 255);
  height: 80%;
  width: 40%;
  border-radius: 0.5rem;
`;

const Child1 = styled.img`
  margin: 1.2rem;
  border-radius: 0.5rem;
  display: block;
  background-color: white;
  height: 50%;
  border: 1px rgba(21, 21, 20, 255);
`;

const Child2 = styled.div`
  background-color: white;
  height: 60vh;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  display: flex;
`;

const Child3 = styled.div`
  background-color: rgba(21, 21, 20, 255);
`;

const Section = ({ background }) => {
  let navigate = useNavigate();
  function onClickHandle() {
    console.log("ANINIDN")
    navigate("/createAdd");

  }
  return (
    <Wrap bgimg={background}>
      <Parent style={{ marginLeft: "5rem" }}>
        <Child1 src="https://www.gamereactor.eu/media/73/microsoftclaimshave_3117313b.jpg" />
        <Child2>
          <Child3 style={{ width: "40%" }}>
            <h2
              style={{
                color: "rgba(255,254,254,255)",
                fontSize: "20px",
                fontWeight: "400",
                fontFamily:
                  "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system",
                paddingLeft: "20px",
              }}
            >
              Games
            </h2>
          </Child3>
          <Child3 style={{ width: "60%" }}>
            <h3
              style={{
                color: "rgba(255,254,254,255)",
                fontSize: "16px",
                fontWeight: "400",
                fontFamily:
                  "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system",
                lineHeight: "24px",
              }}
            >
              Create and grow amazing games across 20+ platforms and billions of
              devices with our end-to-end tools and services for creation,
              launch, and beyond.
            </h3>
          </Child3>
        </Child2>
        <div
          style={{
            backgroundColor: "",
            height: "30vh",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingRight: "7rem",
          }}
        >
          <Button title={"CREATE"} width={"8rem"} height={"2rem"} onClick={onClickHandle} />

        </div>
      </Parent>
      <Parent style={{ marginRight: "5rem" }}>
        <Child1 src="https://images01.nicepagecdn.com/page/42/53/website-template-preview-42538.jpg" />
        <Child2>
          <Child3 style={{ width: "40%" }}>
            <h2
              style={{
                color: "rgba(255,254,254,255)",
                fontSize: "20px",
                fontWeight: "400",
                fontFamily:
                  "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system",
                paddingLeft: "20px",
              }}
            >
              Games
            </h2>
          </Child3>
          <Child3 style={{ width: "60%" }}>
            <h3
              style={{
                color: "rgba(255,254,254,255)",
                fontSize: "16px",
                fontWeight: "400",
                fontFamily:
                  "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system",
                lineHeight: "24px",
              }}
            >
              Create and grow amazing games across 20+ platforms and billions of
              devices with our end-to-end tools and services for creation,
              launch, and beyond.
            </h3>
          </Child3>
        </Child2>
        <div
          style={{
            backgroundColor: "",
            height: "30vh",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingRight: "7rem",
          }}
        >
          <Button title={"CREATE"} width={"8rem"} height={"2rem"} onClick={onClickHandle} />
        </div>
      </Parent>
    </Wrap>
  );
};

export default Section;
