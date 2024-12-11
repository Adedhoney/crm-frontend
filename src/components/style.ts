import styled from "styled-components"

const Wrapper = styled.div`
    padding: 20px 0px;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    a {
        text-decoration: none;
    }
`
const LogoBox = styled.div``
const ContentBox = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
    text-align: center;
    width: 500px;
    @media (max-width: ${({ theme }) =>
            theme.responsive.mb}) {
        width: 90%;
    }
    .buttons {
        margin-top: 40px;
        width: 100%;
        @media (max-width: ${({ theme }) =>
                theme.responsive.mb}) {
            width: 100%;
        }
    }

    .box {
        .text {
            font-weight: 500;
            font-size: 32px;
            line-height: 40px;
            color: #00504b;
            @media (max-width: ${({ theme }) =>
                    theme.responsive.mb}) {
                font-size: 24px;
            }
        }
        .sub-text {
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            color: #6b7280;
            @media (max-width: ${({ theme }) =>
                    theme.responsive.mb}) {
                font-size: 14px;
            }
            span {
                color: #d1d5db;
            }
        }
    }
`
const SubText = styled.p`
    color: #6b7280;
    text-align: center;
    font-feature-settings: "ss01" on;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-top: 8px;
    width: 100%;
    .link {
        text-decoration: none;
        color: #6b7280;
        display: flex;
        justify-content: flex-end;
    }
    .span-new {
        padding-top: 20px;
    }
    .span {
        color: #f55b23;
    }
`
const Form = styled.form`
    width: 100%;
`
export { Wrapper, LogoBox, ContentBox, Form, SubText }
