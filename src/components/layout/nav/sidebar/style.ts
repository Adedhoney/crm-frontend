import { Link } from 'react-router-dom';
import styled from 'styled-components';
const SidebarWrapper = styled.div<{ open: boolean }>`
    width: 200px;
    height: 100vh;
    background-color: #00504b;
    position: fixed;
    top: 0;
    border-right: 1px solid #006962;
    left: ${({ open }) => (open ? '0' : '-250px')};
    transition: left 0.3s ease;
    padding: 22px 20px 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 100;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
        /* width: 100%; */
    }
`;
const Heading = styled.div`
    width: 100%;
    .logo-image {
        width: 180px;
        @media (max-width: ${({ theme }) => theme.responsive.mb}) {
            width: 60%;
        }
    }
`;

const MenuLinks = styled(Link)`
    padding: 10px;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: 14px;
    width: 100%;
    p {
        color: #6b7280;
        text-align: center;
        font-feature-settings: 'ss01' on;
        font-family: 'Montreal';
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-left: 16px;
        &:hover {
            color: #fc9570;
        }
    }
    #keys_icon {
        fill: #6b7280;
    }
    &:hover {
        p {
            color: #fc9570;
        }
        #keys_icon {
            fill: #fc9570;
        }
    }
    &.active {
        border-radius: 8px;
        background: rgba(252, 149, 112, 0.08);
        p {
            color: #fc9570;
        }
        #keys_icon {
            fill: #fc9570;
        }
    }
`;
const Menus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 50px;
`;
const BottomContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    border: 1px solid #2b2a2a;
    background: #232323;
    width: 210px;
    padding: 24px 16px;
    h1 {
        color: #f1f1f1;
        font-family: 'Montreal';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-top: 16px;
    }
    p {
        color: #bbb;
        font-family: 'Montreal';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-bottom: 16px;
        padding-top: 8px;
    }
`;
const FooterButton = styled(Link)`
    border-radius: 9.6px;
    background: var(--bg2, #1c1c1c);
    width: 100%;
    display: flex;
    height: 32px;
    padding: 6.801px 0px 5.999px 0px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export {
    SidebarWrapper,
    Heading,
    FooterButton,
    MenuLinks,
    Menus,
    BottomContent,
};
