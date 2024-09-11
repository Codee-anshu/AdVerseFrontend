import React from "react";
import { styled } from "styled-components";
import "./Stats.css";

const Level1 = styled.div`
  align-items: center;
  backdrop-filter: blur(16px);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(230, 230, 230);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  column-gap: 8px;
  display: flex;
  filter: none;
  font-family: __Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-variation-settings: normal;
  grid-column-end: span 4;
  grid-column-start: span 4;
  height: 96px;
  line-height: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  row-gap: 8px;
  scrollbar-color: auto;
  scrollbar-width: auto;
  tab-size: 4;
  text-size-adjust: 100%;
  unicode-bidi: isolate;
  width: 389.325px;
  -webkit-font-smoothing: antialiased;
`;

const Level201 = styled.div`
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(230, 230, 230);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 230);
  border-top-style: solid;
  border-top-width: 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  column-gap: 40px;
  display: block;
  flex-shrink: 0;
  font-family: __Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-size: 34px;
  font-variation-settings: normal;
  font-weight: 500;
  height: 42.5px;
  letter-spacing: -0.34px;
  line-height: 42.5px;
  min-width: 30%;
  padding-right: 16px;
  row-gap: 40px;
  scrollbar-color: auto;
  scrollbar-width: auto;
  tab-size: 4;
  text-align: center;
  text-size-adjust: 100%;
  unicode-bidi: isolate;
  width: 102.387px;
  -webkit-font-smoothing: antialiased;
`;
const Level202 = styled.div`
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(230, 230, 230);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(230, 230, 230);
  border-top-style: solid;
  border-top-width: 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: block;
  font-family: __Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings: normal;
  font-size: 16px;
  font-variation-settings: normal;
  font-weight: 400;
  height: 48px;
  line-height: 24px;
  max-width: 320px;
  scrollbar-color: auto;
  scrollbar-width: auto;
  tab-size: 4;
  text-size-adjust: 100%;
  unicode-bidi: isolate;
  width: 230.938px;
  -webkit-font-smoothing: antialiased;
`;

const Stats = () => {
  return (
    <div
      //   style={{
      //     borderBottomColor: "rgb(230, 230, 230)",
      //     borderBottomStyle: "solid",
      //     borderBottomWidth: "0px",
      //     borderImageOutset: "0",
      //     borderImageRepeat: "stretch",
      //     borderImageSlice: "100%",
      //     borderImageSource: "none",
      //     borderImageWidth: "1",
      //     borderLeftColor: "rgb(230, 230, 230)",
      //     borderLeftStyle: "solid",
      //     borderLeftWidth: "0px",
      //     borderRightColor: "rgb(230, 230, 230)",
      //     borderRightStyle: "solid",
      //     borderRightWidth: "0px",
      //     borderTopColor: "rgb(230, 230, 230)",
      //     borderTopStyle: "solid",
      //     borderTopWidth: "0px",
      //     boxSizing: "border-box",
      //     color: "rgb(255, 255, 255)",
      //     columnGap: "8px",
      //     display: "grid",
      //     fontFamily:
      //       '__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      //     fontFeatureSettings: "normal",
      //     fontVariationSettings: "normal",
      //     gridColumnEnd: "span 12",
      //     gridColumnStart: "span 12",
      //     gridTemplateColumns: "repeat(12, 46.6625px)",
      //     height: "303.5px",
      //     lineHeight: "24px",
      //     marginLeft: "0px",
      //     marginRight: "0px",
      //     maxWidth: "744px",
      //     paddingLeft: "24px",
      //     paddingRight: "24px",
      //     paddingTop: "64px",
      //     rowGap: "8px",
      //     scrollbarColor: "auto",
      //     scrollbarWidth: "auto",
      //     tabSize: "4",
      //     textSizeAdjust: "100%",
      //     unicodeBidi: "isolate",
      //     width: "696px",
      //     WebkitFontSmoothing: "antialiased",
      //   }}
      className="container col-span-12 pt-16 grid grid-cols-12 gap-2"
    >
      <Level1 className="col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6 backdrop-blur-lg">
        <Level201 className="loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center">
          200+
        </Level201>
        <Level202 className="loco-text-body max-w-xs">
          {/* end-user platforms supported for running Unity creations² */}
          metaverse application uses Ad Verse engine
        </Level202>
      </Level1>

      <div
        className="col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6 backdrop-blur-lg"
        style={{
          alignItems: "center",
          backdropFilter: "blur(16px)",
          borderBottomColor: "rgb(230, 230, 230)",
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          borderBottomStyle: "solid",
          borderBottomWidth: "0px",
          borderImageOutset: "0",
          borderImageRepeat: "stretch",
          borderImageSlice: "100%",
          borderImageSource: "none",
          borderImageWidth: "1",
          borderLeftColor: "rgb(230, 230, 230)",
          borderLeftStyle: "solid",
          borderLeftWidth: "0px",
          borderRightColor: "rgb(230, 230, 230)",
          borderRightStyle: "solid",
          borderRightWidth: "0px",
          borderTopColor: "rgb(230, 230, 230)",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          borderTopStyle: "solid",
          borderTopWidth: "0px",
          boxSizing: "border-box",
          color: "rgb(255, 255, 255)",
          columnGap: "8px",
          display: "flex",
          filter: "none",
          fontFamily:
            "__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          fontFeatureSettings: "normal",
          fontVariationSettings: "normal",
          gridColumnEnd: "span 4",
          gridColumnStart: "span 4",
          height: "96px",
          lineHeight: "24px",
          paddingBottom: "24px",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "24px",
          rowGap: "8px",
          scrollbarColor: "auto",
          scrollbarWidth: "auto",
          tabSize: "4",
          textSizeAdjust: "100%",
          unicodeBidi: "isolate",
          width: "389.337px",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <Level201 className="loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center">
          2.8B
        </Level201>
        <Level202 className="loco-text-body max-w-xs">
          daily active user per day supported by Ad Verse engine
        </Level202>
      </div>

      <Level1 className="col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6 backdrop-blur-lg">
        <Level201 className="loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center">
          82
        </Level201>
        <Level202 className="loco-text-body max-w-xs">
          of the top 100 institutions uses Ad Verse engine to grow
        </Level202>
      </Level1>
    </div>
  );
};

export default Stats;
