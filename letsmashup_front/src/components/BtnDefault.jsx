import React from "react";
import styled from "styled-components";

const BtnDefaultBlock = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    min-height: 25px;
    width: 100%;
    height: 56px;
    margin: 20px 0 0;
    background: #000000;
    outline: none;
    border: 0;
    border-radius: 2px;
    color: #ffffff;
    font-size: 16px;
    line-height: 56px;
    font-weight: 600;
    &:disabled {
        background: rgb(196, 196, 196);
        color: rgb(255, 255, 255);
    }
`;

function BtnDefault(props) {
    return (
        <BtnDefaultBlock className={props.className} onClick={props.onClick ? props.onClick : null} disabled={props.disabled}>
            {props.href ? (
                <>
                    <a href={props.href}>{props.title}</a>
                </>
            ) : (
                props.title
            )}
        </BtnDefaultBlock>
    );
}

export default BtnDefault;