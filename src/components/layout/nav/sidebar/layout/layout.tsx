import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Sidebar from '../index';
import Burger from '../../burger';
import {
    Feedback,
    ArrowDown,
    ProfileImage,
    ArrowCancel,
    Logo,
    MenuLogout,
    MenuSettings,
    MenuProfile,
} from '../../../../../assets';
import {
    ProfileMenu,
    FeedbackMenu,
    Image,
    Tag,
    Links,
    PopUpInformation,
    PopUpMenuItem,
    Information,
    PopUpMenuItemLogout,
} from './style';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../providers/AuthProvider';
import { CustomButton } from '../../../../global/button';
import { Popover } from 'antd';
const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    .flex {
        display: flex;
        margin-top: 20px;
        align-items: center;
        justify-content: space-between;
        img {
            position: absolute;
            z-index: 10000;
            width: 70%;
            position: fixed;
            z-index: 1;
            width: 34%;
            top: 25px;
            left: 16px;
        }
    }
`;
const TopNav = styled.nav`
    height: 80px;
    background-color: #00504b;
    border-bottom: 1px solid #374151;
    color: white;
    position: fixed;
    top: 0;
    width: 100%;
    @media (max-width: 768px) {
        height: 75px;
        /* top: 80px; */
    }
`;

const Hamburger = styled.div``;

const ContentWrapper = styled.div<{ information: boolean }>`
    display: flex;
    width: 100%;
    margin-top: ${(props) => (props.information ? '132px' : '80px')};
    @media (max-width: 768px) {
        margin-top: ${(props) => (props.information ? '92px' : '20px')};
    }
`;

const SidebarLayout = ({ children }: any) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { userDetails } = useAuth();
    const showInformation = window.localStorage.getItem('filled');
    const [information, setInformation] = useState(
        userDetails?.user?.filledPersonalInfo,
    );
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const FirstLetters = (props: any) => {
        const { str1, str2 } = props;
        let wordsCharacter = str1 + ' ' + str2;
        console.log(wordsCharacter, 'words');
        const words = wordsCharacter?.split(' ');
        let combinedLetters = '';
        if (words?.length === 1) {
            combinedLetters = words[0].slice(0, 2).toUpperCase();
        } else if (words?.length === 2) {
            combinedLetters = words
                .map((word: string) => word.charAt(0).toUpperCase())
                .join('');
        }
        return <p className="text">{combinedLetters}</p>;
    };
    const Logout = () => {
        window.localStorage.clear();
        navigate('/auth/login');
    };
    const content = (
        <>
            <PopUpMenuItem to="/dashboard/profile">
                <img src={MenuProfile} alt="menu-profile" />
                <p>My profile</p>
            </PopUpMenuItem>
            {/* <PopUpMenuItem to="/dashboard/profile">
        <img src={MenuSettings} alt="menu-profile" />
        <p>Settings</p>
      </PopUpMenuItem> */}
            <PopUpMenuItemLogout onClick={Logout}>
                <img src={MenuLogout} alt="menu-profile" />
                <p>Log out</p>
            </PopUpMenuItemLogout>
        </>
    );
    return (
        <LayoutWrapper>
            {isMobile && (
                <div className="flex">
                    <Link to="/dashboard">
                        <img className="logo-image" src={Logo} alt="logo" />
                    </Link>
                    <Hamburger onClick={toggleSidebar}>
                        <Burger />
                    </Hamburger>
                </div>
            )}
            <TopNav>
                <Links>
                    <li>
                        <div>
                            <Popover content={content} trigger="hover">
                                <ProfileMenu>
                                    <Tag>
                                        <FirstLetters
                                            str1={userDetails?.user?.firstName}
                                            str2={userDetails?.user?.lastName}
                                        />
                                    </Tag>
                                    <Image src={ArrowDown} alt="feedback" />
                                </ProfileMenu>
                            </Popover>
                        </div>
                    </li>
                </Links>
            </TopNav>
            <ContentWrapper
                information={!information && pathname === '/dashboard/home'}
            >
                <Sidebar open={!isMobile || isSidebarOpen} />
                {children}
            </ContentWrapper>
        </LayoutWrapper>
    );
};

export default SidebarLayout;
