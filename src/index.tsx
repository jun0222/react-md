import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Header = styled.h1`
  color: red;
`;

const Main = <Header>MarkdowEditor</Header>;

render(Main, document.getElementById("app"));
