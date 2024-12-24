import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import SidebarLayout from "./nav/sidebar/layout/layout";
interface LayoutProps {
  children: ReactNode;
}
const Children = styled.div`
  width: calc(100% - 250px);
  margin-left: 250px;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    width: 100%;
    margin-left: 0px;
  }
`;
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SidebarLayout>
        <Children> {children}</Children>
      </SidebarLayout>
    </div>
  );
}
