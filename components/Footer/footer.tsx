"use client";
import { useSelector } from "react-redux";

import { StyledFooter } from "./styled";

const Footer = () => {
  const storeConfig = useSelector((state: any) => state.app.storeConfig);

  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:text-center">
      <StyledFooter>
        <p dangerouslySetInnerHTML={{ __html: storeConfig?.copyright }} />
      </StyledFooter>
    </div>
  );
};

export default Footer;
