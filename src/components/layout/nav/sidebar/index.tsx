import React from 'react';
import {
    SidebarWrapper,
    Heading,
    FooterButton,
    MenuLinks,
    Menus,
    BottomContent,
} from './style';
import { Link, useLocation } from 'react-router-dom';
import { FreeImage, PremiumImage, ArrowImage } from '../../../../assets';
import Logo from '../../../../assets/hotelspaddie-white.png';
import { CoverIcon, HomeIcon, ResumeIcon } from '../../../../assets/svg/icons';
import { useAuth } from '../../../../providers/AuthProvider';
import { isDateInFutureOrToday } from '../../../../utils';

const Sidebar = ({ open }: { open: boolean }) => {
    const { userDetails } = useAuth();
    const location = useLocation();
    const NavLinks = [
        {
            name: 'Home',
            to: '/dashboard',
            image: <HomeIcon id="keys_icon" />,
            action: ['home', 'feedback', 'profile'],
            id: 'keys_icon1',
            disabled: true,
        },
        {
            name: 'Clients',
            to: '/client',
            action: ['client'],
            id: 'keys_icon2',
            disabled: false,
        },
        {
            name: 'Contacts',
            to: '/contact',
            action: ['contact'],
            id: 'keys_icon3',
            disabled: false,
        },
    ];
    return (
        <SidebarWrapper open={open}>
            <Heading>
                <Link to="/dashboard">
                    <img className="logo-image" src={Logo} alt="logo" />
                </Link>
                <Menus>
                    {NavLinks.map((item) => {
                        return (
                            <MenuLinks
                                to={item.disabled ? '#' : item.to}
                                key={item.to}
                                className={
                                    item.action.some((id) =>
                                        location.pathname.includes(
                                            id.toString(),
                                        ),
                                    )
                                        ? 'active'
                                        : ''
                                }
                            >
                                <p> {item.name}</p>
                            </MenuLinks>
                        );
                    })}
                </Menus>
            </Heading>
            {/* {isDateInFutureOrToday(userDetails?.user?.premiumDueDate) ? (
        <BottomContent>
          <img src={PremiumImage} alt="logo" />
          <h1>Share your experience</h1>
          <p>Let your audience know about your experience</p>
          <FooterButton to="#">
            <img src={ArrowImage} alt="logo" />
          </FooterButton>
        </BottomContent>
      ) : (
        <BottomContent>
          <img src={FreeImage} alt="logo" />
          <h1>Upgrade to Pro</h1>
          <p>Enjoy a better experience with Pro today</p>
          <FooterButton to="/dashboard/profile/pricing">
            <img src={ArrowImage} alt="logo" />
          </FooterButton>
        </BottomContent>
      )} */}
        </SidebarWrapper>
    );
};

export default Sidebar;
