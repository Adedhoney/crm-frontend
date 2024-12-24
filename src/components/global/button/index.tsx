import React, { ReactNode } from "react"
import styled from "styled-components"

interface ButtonProps {
    children: ReactNode
    onClick?: any
    className?: any
    disabled?: boolean
    loading?: boolean
    color?: string
}

const Wrapper = styled.div`
    @media (max-width: ${({ theme }) =>
            theme.responsive.mb}) {
        width: 100%;
    }
    .disabled {
        opacity: 0.5 !important;
        cursor: not-allowed !important;
    }
    .notDisabled {
        opacity: 1;
    }
`
const BaseButton = styled.button`
    padding: 16px 24px;
    gap: 8px;
    height: 44px;
    border-radius: 8px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: #00504b;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamily.inter};
    font-style: normal;
    font-size: ${({ theme }) => theme.fontSize.x16};
    width: auto;
    cursor: pointer;
    transition: background 250ms ease-in;
    overflow: hidden;
    @media (max-width: ${({ theme }) =>
            theme.responsive.mb}) {
        width: 100%;
    }
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 16px 12px;
    }
`
const CustomButton = ({
    onClick,
    children,
    disabled,
    loading,
    ...rest
}: ButtonProps) => {
    return (
        <Wrapper>
            <BaseButton
                className={
                    disabled || loading
                        ? "disabled"
                        : "notDisabled"
                }
                onClick={onClick}
                {...rest}
                disabled={disabled || loading}
            >
                {children}{" "}
                {loading && (
                    <i className="fa fa-spinner fa-spin"></i>
                )}
            </BaseButton>
        </Wrapper>
    )
}
const EditButton = styled(CustomButton)`
    background: rgba(252, 149, 112, 0.08);
    border-radius: 4px;
    color: #fc9570;
    @media (max-width: ${({ theme }) =>
            theme.responsive.mb}) {
        margin-left: 0px;
        margin-top: 15px;
    }
`
const GoogleButton = styled(CustomButton)`
    background: #f55b23;
    border-radius: 8px;
    color: #f9fafb;
    width: 100%;
    padding-right: 70px;
    padding-left: 70px;
    .disabled {
        opacity: 0.5;
    }
    @media (max-width: ${({ theme }) =>
            theme.responsive.mb}) {
        font-size: 14px;
    }
`
const ProductButton = styled(CustomButton)`
    background: #f55b23;
    border-radius: 8px;
    color: #f9fafb;
    width: 100%;
    padding-right: 50px;
    padding-left: 50px;
    height: 52px;
    margin-left: 10px;
    font-size: 18px;

    @media (max-width: ${({ theme }) =>
            theme.responsive.mb}) {
        margin-left: 0px;
    }
`
const LoginButton = styled(CustomButton)`
    background: #2e2623;
    border-radius: 8px;
    color: #f9fafb;
    width: 100%;
    padding-right: 70px;
    padding-left: 70px;
    margin-top: 16px;
    .disabled {
        opacity: 0.5;
    }
    @media (max-width: ${({ theme }) =>
            theme.responsive.mb}) {
        font-size: 14px;
    }
`
const LandingEditButton = styled(CustomButton)`
    background: rgba(252, 149, 112, 0.08);
    background: rgba(252, 149, 112, 0.08);
    border-radius: 8px;
    color: #fc9570;
    border: 1px solid var(--pr2, #fc9570);
`
const ComingSoonButton = styled(CustomButton)`
    background: #fc957014;
    border-radius: 8px;
    color: #ffffff;
    border: none;
    padding: 16px 24px;
    cursor: not-allowed;
`
export {
    CustomButton,
    EditButton,
    GoogleButton,
    LoginButton,
    LandingEditButton,
    ProductButton,
    ComingSoonButton,
}
