import React from "react";

const ArrowBtn = ({ label }) => {
  return (
    <a
      role="button"
      target="_self"
      className="cursor-pointer inline-block items-center outline-none overflow-x-hidden btn-primary btn-md caption-sm-bold px-3.5 py-2.5 inline-flex rounded-full btn-arrow "
      href="/download"
      style={{
        "--tw-bg-opacity": 1,
        "--tw-text-opacity": 1,
        "--tw-translate-x": "-1.6rem",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "0.3s",
        backgroundColor: "rgb(33 150 243 / var(--tw-bg-opacity))",
        color: "rgb(255 255 255 / var(--tw-text-opacity))",
        borderRadius: "2rem",
        padding: ".625rem .875rem",
        fontSize: "0.75rem",
        fontWeight: "700",
        textTransform: "uppercase",
        lineHeight: "1.125rem",
        letterSpacing: "0.3em",
        outline: "2px solid transparent",
        outlineOffset: "2px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
      }}
    >
      <div
        className="btn-content flex items-center align-middle transition-transform duration-300 "
        style={{
          alignItems: "center",
          borderBottomColor: "rgb(230, 230, 230)",
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
          borderTopStyle: "solid",
          borderTopWidth: "0px",
          boxSizing: "border-box",
          color: "rgb(255, 255, 255)",
          cursor: "pointer",
          display: "flex",
          fontFamily:
            '__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          fontFeatureSettings: "normal",
          fontSize: "12px",
          fontVariationSettings: "normal",
          fontWeight: "700",
          height: "18px",
          letterSpacing: "3.6px",
          lineHeight: "18px",
          marginRight: "-22.4px",
          scrollbarColor: "auto",
          scrollbarWidth: "auto",
          tabSize: "4",
          textAlign: "center",
          textSizeAdjust: "100%",
          textTransform: "uppercase",
          transform: "matrix(1, 0, 0, 1, -25.6, 0)",
          transitionDuration: "0.3s",
          transitionProperty: "transform",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          unicodeBidi: "isolate",
          verticalAlign: "middle",
          width: "151.637px",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="left-arrow fill-white dark:fill-black"
          style={{
            borderBottomColor: "rgb(230, 230, 230)",
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
            borderTopStyle: "solid",
            borderTopWidth: "0px",
            boxSizing: "border-box",
            color: "rgb(255, 255, 255)",
            cursor: "pointer",
            display: "block",
            fill: "rgb(255, 255, 255)",
            fontFamily:
              '__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            fontFeatureSettings: "normal",
            fontSize: "12px",
            fontVariationSettings: "normal",
            fontWeight: "700",
            height: "11px",
            letterSpacing: "3.6px",
            lineHeight: "18px",
            marginRight: "20.8px",
            overflowClipMargin: "content-box",
            overflowX: "hidden",
            overflowY: "hidden",
            scrollbarColor: "auto",
            scrollbarWidth: "auto",
            tabSize: "4",
            textAlign: "center",
            textSizeAdjust: "100%",
            textTransform: "uppercase",
            verticalAlign: "middle",
            width: "11px",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          <path d="M5.48038 10.3679L4.45623 9.35369L7.5237 6.28622H0.0712891V4.80469H7.5237L4.45623 1.74219L5.48038 0.723011L10.3028 5.54545L5.48038 10.3679Z" />
        </svg>
        <span
          className="btn-label transition-spacing flex duration-300 ease-in-out"
          style={{
            borderBottomColor: "rgb(230, 230, 230)",
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
            borderTopStyle: "solid",
            borderTopWidth: "0px",
            boxSizing: "border-box",
            color: "rgb(255, 255, 255)",
            cursor: "pointer",
            display: "flex",
            fontFamily:
              '__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            fontFeatureSettings: "normal",
            fontSize: "12px",
            fontVariationSettings: "normal",
            fontWeight: "700",
            height: "18px",
            letterSpacing: "3.6px",
            lineHeight: "18px",
            scrollbarColor: "auto",
            scrollbarWidth: "auto",
            tabSize: "4",
            textAlign: "center",
            textSizeAdjust: "100%",
            textTransform: "uppercase",
            transitionDuration: "0.3s",
            transitionProperty: "margin, padding",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            width: "100.838px",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          {label}
        </span>
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="right-arrow dark:fill-white fill-blue"
          style={{
            borderBottomColor: "rgb(230, 230, 230)",
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
            borderTopStyle: "solid",
            borderTopWidth: "0px",
            boxSizing: "border-box",
            color: "rgb(255, 255, 255)",
            cursor: "pointer",
            display: "block",
            fill: "rgb(255, 255, 255)",
            fontFamily:
              '__Inter_36bd41, __Inter_Fallback_36bd41, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            fontFeatureSettings: "normal",
            fontSize: "12px",
            fontVariationSettings: "normal",
            fontWeight: "700",
            height: "11px",
            letterSpacing: "3.6px",
            lineHeight: "18px",
            marginLeft: "8px",
            overflowClipMargin: "content-box",
            overflowX: "hidden",
            overflowY: "hidden",
            scrollbarColor: "auto",
            scrollbarWidth: "auto",
            tabSize: "4",
            textAlign: "center",
            textSizeAdjust: "100%",
            textTransform: "uppercase",
            verticalAlign: "middle",
            width: "11px",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          <path d="M5.48038 10.3679L4.45623 9.35369L7.5237 6.28622H0.0712891V4.80469H7.5237L4.45623 1.74219L5.48038 0.723011L10.3028 5.54545L5.48038 10.3679Z" />
        </svg>
      </div>
    </a>
  );
};

export default ArrowBtn;
