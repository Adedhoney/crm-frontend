import React from 'react';
import styled from 'styled-components';
import Burger from './burger';
import { Logo } from '../../../assets';
import { Link } from 'react-router-dom';
const NavBar = styled.nav`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #006962;
    padding: 0 32px;
    display: flex;
    align-items: center;
    background-color: #1c1c1c;
    position: fixed;
    justify-content: space-between;
    z-index: 10;
    @media (max-width: 768px) {
        padding: 0 16px;
    }
    .logo {
        padding-top: 5px;
    }
    .logo-image {
        width: 70%;
        @media (max-width: ${({ theme }) => theme.responsive.mb}) {
            width: 60%;
            padding-top: 5px;
        }
    }
`;

const Nav = () => {
    return (
        <NavBar>
            <Link to="/">
                <img className="logo-image" src={Logo} alt="logo" />
            </Link>
            <Burger />
        </NavBar>
    );
};

export default Nav;
