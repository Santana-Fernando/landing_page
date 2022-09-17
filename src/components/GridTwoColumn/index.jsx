import P from 'prop-types'
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/index';
import { TextComponent } from '../TextComponent/index';
import { Heading } from '../Heading/index';

export const GridTwoColumn = ({ title, text, srcImg, background = false }) => {
    console.log(title)
    return (
        <SectionBackground background={background}>
            <Styled.Container background={background}>
                <Styled.TextContainer>                          
                    <Heading uppercase colorDark={!background}>{title}</Heading>
                    <TextComponent>{text}</TextComponent>
                </Styled.TextContainer>
                <Styled.ImageContainer>                          
                    <Styled.Image src={srcImg} alt={title}/>
                </Styled.ImageContainer>
            </Styled.Container>
        </SectionBackground>
    )
}

GridTwoColumn.propTypes = {
    title: P.string.isRequired,
    text: P.string.isRequired,
    srcImg: P.string.isRequired,
    background: P.bool
}