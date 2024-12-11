import React, {
    useState,
    KeyboardEvent,
    useEffect,
} from "react"
import styled from "styled-components"
import Select from "react-select"
import { Eye, EyeOpen } from "../../../assets"
import OtpInput from "react-otp-input"
import { ArrowCancelSpecial } from "../../../assets"
interface PropSchema {
    label?: string
    type: string
    value?: any
    preventSpaces?: boolean
    stateHandler?: React.Dispatch<React.SetStateAction<any>>
    changeEventHandler?: Function
    holder?: string
    helperText?: string
    inputNotValid?: boolean
    rightAddon?: string
    required?: boolean
    options?: any[]
    paddingLeft?: string
    maxChar?: number
    minNumValue?: string
    bgColor?: string
    index?: string
    className?: string
    selectOptions?: any
    [x: string]: any
    onTagsChange?: (tags: string[]) => void
    initialTags?: string[]
}
const Wrapper = styled.div<{ $border?: string }>`
    width: 100%;
    .tags-input-container {
        width: auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        border-radius: 8px;
        background: #ffffff;
        border: ${(props) =>
            props.$border || "1px solid #6b7280"};
        border-radius: 8px !important;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        padding: 12px 12px;
    }

    .tag-item {
        display: flex;
        padding: 4px 8px 4px 10px;
        border: 1px solid #d0d5dd;
        background: #fff;
        gap: 3px;
        align-items: center;
        border-radius: 100px;
        border: 1px solid #ececed;
        box-shadow: 0px 1px 2px -1px rgba(17, 12, 34, 0.08);
    }
    .text {
        color: #344054;
        text-align: center;
        font-family: "Montreal";
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        text-transform: capitalize;
    }
    img {
        cursor: pointer;
    }
    .tags-input {
        flex-grow: 1;
        padding: 0.5em 0;
        border: none !important;
        outline: none;
        width: 100%;
    }
`
const Container = styled.div`
    width: 100%;
    font-family: "Montreal";

    .noLeft {
        height: 239px !important;
        @media (max-width: ${({ theme }) =>
                theme.responsive.mb}) {
            margin-left: 0px !important;
        }
    }
    .right {
        margin-left: 10px;
        @media (max-width: ${({ theme }) =>
                theme.responsive.mb}) {
            margin-left: 0px;
        }
    }
    .left {
        margin-right: 10px;
        @media (max-width: ${({ theme }) =>
                theme.responsive.mb}) {
            margin-right: 0px;
        }
    }
    .container-otp {
        justify-content: space-between !important;
    }
    .otp {
        border-radius: 8px;
        border: 1px solid #6b7280;
        background: #ffffff;
        display: flex;
        width: 14% !important;
        height: 60px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-size: 24px;
        color: #6b7280;
        text-align: center;
        font-family: "Montreal";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`
const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: "Montreal";

    /* margin: label ? "1.6em" : "0.5em"; */
`
const LabelBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    margin-top: 35px;
    @media (max-width: ${({ theme }) =>
            theme.responsive.mb}) {
        margin-top: 25px;
    }
`

const Index = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    font-feature-settings: "ss01" on;
    color: #fc9570;
    margin-right: 5px;
    font-family: "Montreal";

    background: rgba(252, 149, 112, 0.08);
`
const Flex = styled.div`
    display: flex;
    align-items: center;
`
const FormLabel = styled.label<{ $color?: string }>`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    font-feature-settings: "ss01" on;
    color: ${"#00504b"};
    /* color:focused?" #5C14CE" : "#737373"; */
`
const Input = styled.input<{ $border?: string }>`
    border: none;
    padding: 14px 16px;
    gap: 10px;
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: ${(props) =>
        props.$border || "1px solid #6b7280"};
    border-radius: 8px !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    font-family: "Montreal";

    font-feature-settings: "ss01" on;
    color: #00504b;
    outline: none;
`
const TextArea = styled.textarea<{ $border?: string }>`
    border: none;
    padding: 14px 16px;
    font-family: "Montreal";
    gap: 10px;
    height: 126px;
    background: #ffffff;
    border: ${(props) =>
        props.$border || "1px solid #6b7280"};
    outline: none;
    border-radius: 8px !important;
    font-weight: 400;
    width: 100%;
    font-size: 14px;
    line-height: 17px;
    font-feature-settings: "ss01" on;
    color: #00504b;
    @media (max-width: ${({ theme }) =>
            theme.responsive.mb}) {
        margin-left: 0px;
    }
`
const InputGroup = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
`
const InputRightElement = styled.div`
    position: absolute;
    cursor: pointer;
    right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
`
export const FormInput = ({
    label,
    holder,
    type,
    value,
    selectOptions,
    required,
    options,
    helperText,
    preventSpaces,
    inputNotValid,
    stateHandler,
    changeEventHandler,
    paddingLeft,
    maxChar,
    minNumValue,
    bgColor,
    index,
    className,
    onTagsChange,
    initialTags,
    ...rest
}: PropSchema) => {
    const [showPassword, setShowPassword] = useState(false)
    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    const showHandler = () => {
        setShowPassword(!showPassword)
    }
    const customStyles = {
        control: (base: any, state: any) => ({
            ...base,
            gap: "10px",
            width: "100% !important",
            margin: "0 auto",
            height: "45px",
            background: "#ffffff",
            border: "1px solid #6b7280",
            borderRadius: "8px !important",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: " 17px",
            color: "#00504b",
            display: "flex !important",
        }),
        option: (base: any, state: any) => ({
            ...base,
            display: "flex",
            backgroundColor: state.isFocused
                ? "#0069d9"
                : null,
            color: state.isFocused ? "white" : null,
            "&:hover": {
                backgroundColor: state.isFocused
                    ? "#0069d9"
                    : "#f8f9fa",
                color: state.isFocused
                    ? "white"
                    : "#343a40",
            },
        }),
        singleValue: (base: any, state: any) => ({
            ...base,
            color: "#00504b",
        }),
    }
    const [tags, setTags] = useState<string[]>([])
    useEffect(() => {
        if (initialTags) {
            setTags(initialTags)
        }
    }, [initialTags])
    const handleKeyDown = (
        e: KeyboardEvent<HTMLInputElement>
    ) => {
        const value = e.currentTarget.value.trim()
        if (e.key === "Enter" || e.key === ",") {
            const newTags = value
                .split(",")
                .map((tag) => tag.trim())
            const nonEmptyTags = newTags.filter(
                (tag) => tag !== ""
            )
            if (nonEmptyTags.length > 0) {
                setTags((prevTags) => [
                    ...prevTags,
                    ...nonEmptyTags,
                ])
                e.currentTarget.value = ""
                if (onTagsChange) {
                    onTagsChange([...tags, ...nonEmptyTags])
                }
            }
        }
    }

    const removeTag = (index: number) => {
        setTags((prevTags) =>
            prevTags.filter((_, i) => i !== index)
        )
        if (onTagsChange) {
            onTagsChange(tags.filter((_, i) => i !== index))
        }
    }
    return (
        <Container>
            {type !== "textarea" && type !== "keypad" ? (
                <Box>
                    <Flex>
                        {label && (
                            <LabelBox>
                                {index && (
                                    <Index>{index}</Index>
                                )}
                                <FormLabel
                                    $color={
                                        focused
                                            ? "#fc9570"
                                            : "#ffffff"
                                    }
                                    htmlFor={
                                        label
                                            ? label
                                                  .split(
                                                      " "
                                                  )
                                                  .join("")
                                                  .toLowerCase()
                                            : ""
                                    }
                                >
                                    {label}
                                </FormLabel>
                            </LabelBox>
                        )}
                    </Flex>
                    <InputGroup>
                        {type === "select" && (
                            <Select
                                styles={customStyles}
                                onChange={
                                    changeEventHandler &&
                                    !stateHandler
                                        ? (
                                              e: React.ChangeEvent<any>
                                          ) => {
                                              changeEventHandler(
                                                  e
                                              )
                                          }
                                        : stateHandler &&
                                          !changeEventHandler
                                        ? (
                                              e: React.ChangeEvent<any>
                                          ) => {
                                              stateHandler(
                                                  e
                                              )
                                          }
                                        : () => {
                                              // do nothing
                                          }
                                }
                                defaultValue={value}
                                // onChange={setSelectedOption}
                                options={selectOptions}
                                className={className}
                            />
                        )}
                        {type === "input" && (
                            <OtpInput
                                containerStyle="container-otp"
                                inputStyle="otp"
                                value={value}
                                onChange={(otp: string) => {
                                    if (
                                        changeEventHandler &&
                                        !stateHandler
                                    ) {
                                        changeEventHandler(
                                            otp
                                        )
                                    } else if (
                                        stateHandler &&
                                        !changeEventHandler
                                    ) {
                                        stateHandler(otp)
                                    } else {
                                    }
                                }}
                                numInputs={6}
                                renderInput={(props) => (
                                    <input {...props} />
                                )}
                            />
                        )}
                        {type !== "select" &&
                            type !== "input" && (
                                <>
                                    <Input
                                        {...rest}
                                        style={{
                                            borderRadius:
                                                "0",
                                        }}
                                        min={
                                            minNumValue
                                                ? minNumValue
                                                : "0"
                                        }
                                        maxLength={
                                            maxChar
                                                ? maxChar
                                                : 524288
                                        }
                                        type={
                                            showPassword
                                                ? "text"
                                                : type
                                        }
                                        id={
                                            label
                                                ? label
                                                      .split(
                                                          " "
                                                      )
                                                      .join(
                                                          ""
                                                      )
                                                      .toLowerCase()
                                                : ""
                                        }
                                        value={value}
                                        className={
                                            className
                                        }
                                        placeholder={holder}
                                        $border={
                                            focused
                                                ? "1px solid #fc9570"
                                                : "1px solid #6b7280"
                                        }
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={
                                            changeEventHandler &&
                                            !stateHandler
                                                ? (
                                                      e: React.ChangeEvent<any>
                                                  ) => {
                                                      preventSpaces
                                                          ? changeEventHandler(
                                                                e.target.value.replace(
                                                                    /\s/g,
                                                                    ""
                                                                )
                                                            )
                                                          : changeEventHandler(
                                                                e
                                                                    .target
                                                                    .value
                                                            )
                                                  }
                                                : stateHandler &&
                                                  !changeEventHandler
                                                ? (
                                                      e: React.ChangeEvent<any>
                                                  ) => {
                                                      preventSpaces
                                                          ? stateHandler(
                                                                e.target.value.replace(
                                                                    /\s/g,
                                                                    ""
                                                                )
                                                            )
                                                          : stateHandler(
                                                                e
                                                                    .target
                                                                    .value
                                                            )
                                                  }
                                                : () => {
                                                      // do nothing
                                                  }
                                        }
                                        onKeyDown={(
                                            e: React.KeyboardEvent<any>
                                        ) => {
                                            // @ts-ignore
                                            if (
                                                e.keyCode ===
                                                    38 ||
                                                e.keyCode ===
                                                    40
                                            ) {
                                                e.preventDefault()
                                            }
                                        }}
                                    />
                                    {type ===
                                        "password" && (
                                        <InputRightElement
                                            onClick={
                                                showHandler
                                            }
                                        >
                                            {showPassword ? (
                                                <img
                                                    src={
                                                        Eye
                                                    }
                                                    alt="icon"
                                                />
                                            ) : (
                                                <img
                                                    src={
                                                        EyeOpen
                                                    }
                                                    alt="icon"
                                                />
                                            )}
                                        </InputRightElement>
                                    )}
                                </>
                            )}
                    </InputGroup>
                    {/* <FormHelperText fontStyle="italic">{helperText}</FormHelperText> */}
                </Box>
            ) : (
                <Box>
                    <LabelBox>
                        {index && <Index>{index}</Index>}
                        <FormLabel
                            $color={
                                focused
                                    ? "#fc9570"
                                    : "#ffffff"
                            }
                            htmlFor={
                                label
                                    ? label
                                          .split(" ")
                                          .join("")
                                          .toLowerCase()
                                    : ""
                            }
                        >
                            {label}
                        </FormLabel>
                    </LabelBox>
                    <InputGroup>
                        {type === "keypad" ? (
                            <Wrapper
                                $border={
                                    focused
                                        ? "1px solid #fc9570"
                                        : "1px solid #6b7280"
                                }
                            >
                                <div className="tags-input-container">
                                    {tags.map(
                                        (tag, index) => (
                                            <div
                                                className="tag-item"
                                                key={index}
                                            >
                                                <span className="text">
                                                    {tag}
                                                </span>
                                                <img
                                                    onClick={() =>
                                                        removeTag(
                                                            index
                                                        )
                                                    }
                                                    src={
                                                        ArrowCancelSpecial
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                        )
                                    )}
                                    <TextArea
                                        {...rest}
                                        style={{
                                            borderRadius:
                                                "0",
                                        }}
                                        maxLength={
                                            maxChar
                                                ? maxChar
                                                : 524288
                                        }
                                        id={
                                            label
                                                ? label
                                                      .split(
                                                          " "
                                                      )
                                                      .join(
                                                          ""
                                                      )
                                                      .toLowerCase()
                                                : ""
                                        }
                                        value={value}
                                        onFocus={onFocus}
                                        placeholder={holder}
                                        className={`${className} tags-input`}
                                        $border={
                                            focused
                                                ? "1px solid #fc9570"
                                                : "1px solid #6b7280"
                                        }
                                        onBlur={onBlur}
                                        onKeyDown={(
                                            e: React.KeyboardEvent<any>
                                        ) => {
                                            // @ts-ignore

                                            handleKeyDown(e)
                                        }}
                                    />
                                </div>
                            </Wrapper>
                        ) : (
                            <TextArea
                                {...rest}
                                style={{
                                    borderRadius: "0",
                                }}
                                maxLength={
                                    maxChar
                                        ? maxChar
                                        : 524288
                                }
                                id={
                                    label
                                        ? label
                                              .split(" ")
                                              .join("")
                                              .toLowerCase()
                                        : ""
                                }
                                value={value}
                                onFocus={onFocus}
                                placeholder={holder}
                                className={className}
                                $border={
                                    focused
                                        ? "1px solid #fc9570"
                                        : "1px solid #6b7280"
                                }
                                onBlur={onBlur}
                                onChange={
                                    changeEventHandler &&
                                    !stateHandler
                                        ? (
                                              e: React.ChangeEvent<any>
                                          ) => {
                                              preventSpaces
                                                  ? changeEventHandler(
                                                        e.target.value.replace(
                                                            /\s/g,
                                                            ""
                                                        )
                                                    )
                                                  : changeEventHandler(
                                                        e
                                                            .target
                                                            .value
                                                    )
                                          }
                                        : stateHandler &&
                                          !changeEventHandler
                                        ? (
                                              e: React.ChangeEvent<any>
                                          ) => {
                                              preventSpaces
                                                  ? stateHandler(
                                                        e.target.value.replace(
                                                            /\s/g,
                                                            ""
                                                        )
                                                    )
                                                  : stateHandler(
                                                        e
                                                            .target
                                                            .value
                                                    )
                                          }
                                        : () => {
                                              // do nothing
                                          }
                                }
                                onKeyDown={(
                                    e: React.KeyboardEvent<any>
                                ) => {
                                    // @ts-ignore
                                    if (
                                        e.keyCode === 38 ||
                                        e.keyCode === 40
                                    ) {
                                        e.preventDefault()
                                    }
                                }}
                            />
                        )}
                    </InputGroup>
                </Box>
            )}
        </Container>
    )
}
