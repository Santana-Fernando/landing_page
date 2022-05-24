import styled, { css } from 'styled-components'

const titleSize = {
    small: (theme) => css`
        font-size: ${theme.font.sizes.small}
    `,
    medium: (theme) => css`
        font-size: ${theme.font.sizes.medium}
    `,
    big: (theme) => css`
        font-size: ${theme.font.sizes.big}
    `
}

export const Title = styled.h1`
    ${({theme, colorDark, size}) => css`
        color: ${colorDark ? theme.colors.primaryColor : theme.colors.white };
        ${titleSize[size](theme)};
        
    `}
`;