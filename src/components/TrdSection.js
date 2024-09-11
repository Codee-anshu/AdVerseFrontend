import React from "react";
import { styled } from "styled-components";

const Wrap = styled.div`
  height: 14.8vh;
  background: ${(props) => `url("/images/${props.bgimg}")`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  left: 0
  align-items: center;
`;

const TrdSection = ({ background }) => {
  return (
    <Wrap bgimg={background}>
      <h3
        style={{
          marginLeft: "5rem",
          paddingTop: "1rem",
          paddingBottom: "0.5rem",
          color: "rgba(255,254,254,255)",
        }}
      >
        Social
      </h3>
      <br
        style={{
          margin: "1rem",
          borderColor: "rgb(38 38 38 / var(--tw-border-opacity))",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "5rem",
          width: "100px",
          justifyContent: "space-between",
          paddingBottom: "1rem",
          paddingTop: "0.5rem",
        }}
      >
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          Y
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          L
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          I
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          T
        </p>
        <p
          style={{
            color: "rgba(255,254,254,255)",
            marginLeft: "4px",
            marginRight: "4px",
          }}
        >
          D
        </p>
      </div>
    </Wrap>
  );
};

export default TrdSection;
