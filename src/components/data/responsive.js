import { css } from 'styled-components';

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 376px){
            ${props}
        }
    `;
};
export const mobile550 = (props) => {
    return css`
        @media screen and (max-width: 550px) {
            ${props} 
        }
    `;
}

export const mobile420 = (props) => {
    return css`
        @media screen and (max-width: 420px) {
            ${props} 
        }
    `;
}

export const mobile290 = (props) => {
    return css`
        @media screen and (max-width: 300px) {
            ${props} 
        }
    `;
}


export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 692px){
            ${props};
        }
    `;
};

export const mobile2 = (props) => {
    return css`
        @media screen and (max-width: 501px) {
            ${props}   
        }
    `;
}
