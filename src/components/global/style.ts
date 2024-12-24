import styled from 'styled-components';

export const SpinnerContainer = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Wrapper = styled.div`
    padding: 58px 44px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        padding: 28px 16px;
    }
    .button-to {
        @media (max-width: 768px) {
            align-self: flex-end;
            margin-bottom: 20px;
        }
    }
    .view {
        height: 40px !important;
    }
    a {
        text-decoration: none;
    }
    .ant-pagination-next {
        margin-left: 24px;
        /* float: right; */
    }
    .ant-pagination .ant-pagination-item a {
        color: #4f4b5c !important;
        padding: 3px 16px;
    }
    .ant-pagination
        .ant-pagination-jump-next
        .ant-pagination-item-container
        .ant-pagination-item-ellipsis {
        color: #f9fafb !important;
    }
    .ant-pagination .ant-pagination-item-active a {
        color: #ffffff !important;
        background-color: #f55b23 !important;
        border-radius: 8px !important;
    }
    .ant-pagination .ant-pagination-item-active {
        font-weight: 600;
        background-color: #ffffff;
        border-color: #1677ff;
        border: none;
        background-color: transparent;
        margin: 0;
        padding: 0;
    }
    .ant-pagination-prev {
        margin-right: 24px;
        /* float: left; */
    }
    .ant-pagination-options {
        display: none !important;
    }
`;
export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: flex-start;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const ListLogo = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
`;

export const ButtonBox = styled.div`
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
    justify-self: flex-end;
`;
export const Box = styled.div`
    width: 100%;
    text-align: center;
    .heading {
        font-family: 'Montreal';
        font-style: normal;
        font-weight: 500;
        font-size: ${({ theme }) => theme.fontSize.x24};
        line-height: 30px;
        @media (max-width: ${({ theme }) => theme.responsive.mb}) {
            font-size: ${({ theme }) => theme.fontSize.x20};
        }
    }
    .sub-text {
        font-family: 'Montreal';
        font-style: normal;
        font-weight: 400;
        padding-top: 8px;
        font-size: ${({ theme }) => theme.fontSize.x16};
        line-height: 20px;
        color: ${({ theme }) => theme.colors.grey3};
        @media (max-width: ${({ theme }) => theme.responsive.mb}) {
            font-size: ${({ theme }) => theme.fontSize.x14};
        }
    }
`;
export const EmptyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
    max-width: 410px;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
    h1 {
        color: #f9fafb;
        text-align: center;
        font-family: 'Montreal';
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-top: 40px;
    }
    p {
        color: #6b7280;
        font-family: 'Montreal';
        font-size: 16px;
        text-align: center;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-top: 8px;
        padding-bottom: 24px;
        @media (max-width: 768px) {
            padding-left: 30px;
            padding-right: 30px;
        }
    }
`;
export const ClientPagination = styled.div`
    text-align: center;
    margin-top: 40px;
    border-top: 1.5px solid #2b2a2a;
    width: 100%;
    padding-top: 20px;
    ul {
        width: 100%;
    }
    .arrow {
        display: flex;
        align-items: center;
        p {
            color: #f9fafb;
            font-family: 'Montreal';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
        }
        .prev {
            padding-left: 8px;
        }
        .next {
            padding-right: 8px;
        }
    }
`;

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
        flex-direction: column;
    }
`;
export const ViewBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border-radius: 8px !important;
    // box-shadow: 1px 2px 10px 3px #dee3e3;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
        flex-direction: column;
    }
`;

export const LabelDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
        flex-direction: column;
    }
`;

export const InfoDiv = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    padding: 14px 16px;
    gap: 10px;
    width: 100%;
    background: #ffffff;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-family: 'Montreal';
    font-feature-settings: 'ss01' on;
    color: #00504b;
    span {
        font-weight: bold;
        font-size: 17px;
    }
`;

export const ImageBox = styled.div`
    // width: 150px;
    // height: 150px;
`;
export const LogoImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 100%;
`;
export const ClientTitle = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    margin-top: 68px;
    width: 100%;

    h1 {
        color: #f9fafb;
        font-family: 'Montreal';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    .tag {
        margin-left: 16px;
        border-radius: 66.667px;
        background: #f4f0fc;
        display: flex;
        height: 24px;
        padding: 10px;
        align-items: center;
        gap: 8px;
        p {
            color: #9667e0;
            font-family: 'Montreal';
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: -0.28px;
        }
    }
`;
export const ClientTable = styled.div`
    border: 1px solid #2b2a2a;
    border-radius: 10px 10px 0px 0px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;

    .table_header {
        border-radius: 10px 10px 0px 0px;
        border-bottom: 1px solid #2b2a2a;
        background: #00504b;
        display: flex;
        height: 50px;
        min-width: 1200px;
        align-items: center;
        justify-content: space-between;
        .table_heading {
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            p {
                color: #f9fafb;
                font-family: 'Montreal';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
        .index {
            flex-basis: 5%;
            @media (max-width: 768px) {
                flex-basis: 15%;
            }
        }
        .view {
            flex-basis: 10%;
            @media (max-width: 768px) {
                flex-basis: 20%;
            }
        }
        .role {
            flex-basis: 30%;
            @media (max-width: 768px) {
                display: none;
                flex-basis: 0%;
            }
        }
        .name {
            flex-basis: 30%;
            @media (max-width: 768px) {
                flex-basis: 45%;
            }
        }
        .date {
            flex-basis: 20%;
            @media (max-width: 768px) {
                display: none;
                flex-basis: 0%;
            }
        }
    }
    .table_desc {
        border-bottom: 1px solid #2b2a2a;
        background: #ffffff;
        display: flex;
        height: 60px;
        min-width: 1200px;
        align-items: center;
        justify-content: space-between;
        .table_heading {
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            p {
                color: #00504b;
                font-family: 'Montreal';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        }
        .index {
            flex-basis: 5%;
            @media (max-width: 768px) {
                flex-basis: 15%;
            }
        }
        .view {
            flex-basis: 10%;
            border: none;
            padding: 0;
            background-color: transparent;
            /* text-decoration: underline; */
            @media (max-width: 768px) {
                flex-basis: 20%;
            }
        }
        .role {
            flex-basis: 30%;
            @media (max-width: 768px) {
                display: none;
                flex-basis: 0%;
            }
        }
        .name {
            flex-basis: 30%;
            @media (max-width: 768px) {
                flex-basis: 45%;
            }
        }
        .date {
            flex-basis: 20%;
            @media (max-width: 768px) {
                display: none;
                flex-basis: 0%;
            }
        }
    }
`;
