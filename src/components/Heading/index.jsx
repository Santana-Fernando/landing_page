import P from 'prop-types'
import { theme } from '../../styles/theme';
import * as Styled from "./styles";

export const Heading = ({children, colorDark = true, as = 'h1', size = 'big'}) => {
    return (
        <Styled.Title theme={theme} colorDark={colorDark} as={as} size={size}>
            {children}
        </Styled.Title>
    )
}

Heading.protoTypes = {
    children: P.node.isRequired,
    colorDark: P.bool.isRequired,
    as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
    size: P.oneOf(['small', 'medium', 'big']).isRequired
}