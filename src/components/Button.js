import React from 'react';
import './Button.css'; // Import external CSS

const PricingButton = ({label}) => {
  return (
    <a
      role="button"
      target="_self"
      className="cursor-pointer inline-block items-center outline-none overflow-x-hidden btn-primary btn-sm caption-xs-bold px-3 py-2 inline-flex rounded-full mr-2"
      href="/products"
    >
      <div className="btn-content flex items-center align-middle transition-transform duration-300">
        <span className="btn-label transition-spacing flex duration-300 ease-in-out">
        {label}
        </span>
      </div>
    </a>
  );
};

export default PricingButton;
