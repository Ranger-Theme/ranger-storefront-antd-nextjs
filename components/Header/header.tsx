"use client";
import { Button } from "antd";

import Logo from "@/components/Logo";
import { StyledHeader } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Button>Header Block</Button>
    </StyledHeader>
  );
};

export default Header;
