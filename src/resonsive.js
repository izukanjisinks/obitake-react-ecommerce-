import { css } from "styled-components";

export const mobileS = (props) => {
    return css `
    @media only screen and (max-width: ${size.mobileS}) {
      ${props}
    }
  `;
};

export const mobileL = (props) => {
    return css `
    @media only screen and (max-width: ${size.mobileL}) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
    return css `
    @media only screen and (max-width: ${size.tablet}) {
      ${props}
    }
  `;
};

export const laptop = (props) => {
    return css `
    @media only screen and (max-width: ${size.laptop}) {
      ${props}
    }
  `;
};

export const laptopL = (props) => {
    return css `
    @media only screen and (max-width: ${size.laptopL}) {
      ${props}
    }
  `;
};

export const desktop = (props) => {
    return css `
    @media only screen and (max-width: ${size.desktop}) {
      ${props}
    }
  `;
};

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '430px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
};

// export const mobile = (props) => {
//         return css `
//     @media {only screen and (max-width: 380px) {
//         ${props}
//       }}
//     `;
// };