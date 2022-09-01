import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Heading } from ".";
import { renderTheme } from '../../styles/renderTheme';
import { theme } from "../../styles/theme";

describe('<Heading />', () => {
    it('should render with default values', () => {
      renderTheme(<Heading as='h1' size='huge'>Teste</Heading>);      
      const heading =  screen.getByRole('heading', {name: 'Teste'});

      expect(heading).toHaveStyle({
        color: theme.colors.primaryColor,
        'font-size': theme.font.sizes.xhuge,
        'text-transform': 'none'
      })
    });

    it('should render with white color', () => {
        renderTheme(<Heading colorDark={false}>Teste</Heading>);      
        const heading =  screen.getByRole('heading', {name: 'Teste'});
  
        expect(heading).toHaveStyle({
          color: theme.colors.white
        })
      });

      it('should render correct heading sizes', () => {
        const { rerender } = renderTheme(<Heading size='small' >Teste</Heading>);      
        const heading = screen.getByRole('heading', {name: 'Teste'});
  
        expect(heading).toHaveStyle({
         'font-size': theme.font.sizes.medium
        })

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size='big' >Teste</Heading>
            </ThemeProvider>
        )

        expect(screen.getByRole('heading', {name: 'Teste'})).toHaveStyle({
            'font-size': theme.font.sizes.xlarge
        })

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size='medium' >Teste</Heading>
            </ThemeProvider>
        )

        expect(screen.getByRole('heading', {name: 'Teste'})).toHaveStyle({
            'font-size': theme.font.sizes.large
        })

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size='huge' >Teste</Heading>
            </ThemeProvider>
        )

        expect(screen.getByRole('heading', {name: 'Teste'})).toHaveStyle({
            'font-size': theme.font.sizes.xhuge
        })

        rerender(
            <ThemeProvider theme={theme}>
                <Heading size='none' >Teste</Heading>
            </ThemeProvider>
        )

        expect(screen.getByRole('heading', {name: 'Teste'})).toHaveStyle({
            'font-size': '2em'
        })
      });

      it('should render correct font-size when using mobile', () => {
        const { rerender } = renderTheme(<Heading size='huge' >Teste</Heading>);      
        const heading = screen.getByRole('heading', {name: 'Teste'});
  

        expect(screen.getByRole('heading', {name: 'Teste'})).toHaveStyleRule(
            'font-size',
            theme.font.sizes.xlarge,
            {
                media: theme.media.lteMedium
            }
        )
      });

      it('should render with uppercase letters', () => {
        renderTheme(<Heading uppercase>Teste</Heading>);      
        const heading =  screen.getByRole('heading', {name: 'Teste'});
  
        expect(heading).toHaveStyle({
          'text-transform': 'uppercase'
        })
      });

      it('should render correct heading element', () => {
        const { container } = renderTheme(<Heading as="h6">Teste</Heading>);      
        const heading =  screen.getByRole('heading', {name: 'Teste'});
        const h6 = container.querySelector('h6')
  
        expect(h6.tagName.toLowerCase()).toBe('h6')
      });
  });