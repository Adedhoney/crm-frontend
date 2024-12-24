import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileMenu = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montreal";
`;
const FeedbackMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Image = styled.img`
  cursor: pointer;
`;
const Tag = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0px;
  .text {
    font-weight: 500;
    font-size: 17.5px;
    line-height: 22px;
    color: #fc9570;
  }
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 15px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  margin-right: 44px;
  @media (max-width: 768px) {
    display: none;
  }

  li {
    list-style: none;
    margin-left: 30px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const LinkText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #6b7280;
`;

const PopUpMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  padding: 10px;
  background-color: white;
  border: 1px solid black;
  width: 150px;
  height: auto;
  border-color: #e5e4e4;
  border-radius: 5px;
`;

const PopUpMenuItemLogout = styled.button`
  display: flex;
  padding: 10px 16px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  width: 100%;
  background-color: #1c1c1c;
  border: none;
  border-top: 1px solid #2b2a2a;
  border-radius: 0px 0px 8px 8px !important;
  cursor: pointer;
  p {
    color: #f87171;
    font-family: "Montreal";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;
const PopUpMenuItem = styled(Link)`
  border-radius: 8px 8x 0px 0px;
  display: flex;
  text-decoration: none;
  padding: 10px 16px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  width: 100%;
  background-color: #1c1c1c;
  border: none;
  border-top: 1px solid transparent;
  border-radius: 8px 8px 0px 0px !important;
  p {
    color: #f9fafb;
    font-family: "Montreal";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;
const PopUpInformation = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .textDesc {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
    text-transform: capitalize;
    padding-top: 6px;
  }
  .textSmall {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
    text-transform: capitalize;
    padding-top: 6px;
    text-transform: lowercase;
  }
`;
const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9fafb;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 12px 32px;
  height: 60px;
  width: calc(100% - 250px);
  margin-left: 250px;
  @media (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    padding: 12px 16px;
    margin-top: 80px;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
  .content {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      width: 60%;
    }
    h2 {
      color: #374151;
      font-family: "Montreal";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      padding-left: 8px;
      @media (max-width: 768px) {
        font-size: 14px;
        margin-right: 5px;
        font-weight: 400;
      }
    }
  }
  .title {
    display: flex;
    align-items: center;
    img {
      margin-left: 32px;
      cursor: pointer;
      @media (max-width: 768px) {
        margin-left: 9px;
      }
    }
  }
`;
export {
  Information,
  ProfileMenu,
  FeedbackMenu,
  Image,
  Tag,
  Navigation,
  Links,
  LinkText,
  PopUpInformation,
  PopUpMenu,
  PopUpMenuItem,
  PopUpMenuItemLogout,
};
