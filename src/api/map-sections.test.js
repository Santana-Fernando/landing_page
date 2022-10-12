import { mapImageGrid, mapSectionContent, mapSections, mapSectionTwoColumns, mapTextGrid } from "./map-sections"
import pagesFakeData from './dados.json'

describe('map-sections', () => {
    it('should render predefined section if no data', () => {
        const data = mapSections();
        expect(data).toEqual([]);
    })

    it('should render predefined sections with correct data', () => {
      const data = mapSections(pagesFakeData[0].sections);
      expect(data[0].component).toBe('section.section-two-columns');
    })

    it('should test section with invalid data', () => {
      const withNoTextOrImageGrid = mapSections([
        {
          __component: 'section.section-grid'
        }
      ]);

      const withNoComponent = mapSections([{}])

      expect(withNoTextOrImageGrid).toEqual([
        {
          __component: 'section.section-grid'
        }
      ])

      expect(withNoComponent).toEqual([{}])
  
    })

    it('should test section.section-grid with no image_grid or text_grid', () => {
      const withNoTextOrImageGrid = mapSections([
        {
          __component: 'section.section-grid',
          image_grid: [{}]
        },
        {
          __component: 'section.section-grid',
          text_grid: [{}]
        },
      ]);

      expect(withNoTextOrImageGrid.length).toBe(2)

    })


    it('should map section two columns', () => {
        const data = mapSectionTwoColumns();
        expect(data.background).toBe(false);
        expect(data.component).toBe('');
        expect(data.sectionId).toBe('');
        expect(data.srcImg).toBe('');
        expect(data.text).toBe('');
        expect(data.title).toBe('');
    })

    it('should map section two columns', () => {
        const data = mapSectionTwoColumns({
            __component: "section.section-two-columns",
            title: "January brings us Firefox 85",
            description: "To wrap up January.",
            metadata: {
                background: true,
                section_id: "contact"
            },
            image: {
                url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg",
            }
        });
        expect(data.background).toBe(true);
        expect(data.component).toBe("section.section-two-columns");
        expect(data.sectionId).toBe("contact");
        expect(data.srcImg).toBe("https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg");
        expect(data.text).toBe('To wrap up January.');
        expect(data.title).toBe("January brings us Firefox 85");
    })

    it('should map section content', () => {
        const data = mapSectionContent({
            __component: "section.section-content",
            title: "Pricing",
            content: "<p>The</p>",
            metadata: {
              background: false,
              section_id: "pricing"
            },
            image: {
                url: "https://res.cloudinary.com/dlizakp2a/image/upload/v1613749289/javascript_b57bf48cda.svg",
            }
          });
        expect(data.background).toBe(false);
        expect(data.component).toBe("section.section-content");
        expect(data.sectionId).toBe("pricing");
        expect(data.html).toBe("<p>The</p>");
        expect(data.title).toBe("Pricing");
    })

    it('should map section content no with data', () => {
        const data = mapSectionContent();
        expect(data.background).toBe(false);
        expect(data.component).toBe('');
        expect(data.sectionId).toBe('');
        expect(data.html).toBe('');
        expect(data.title).toBe('');
    })

    it('should map section content with data', () => {
        const data = mapSectionContent({
            __component: "section.section-content",
            title: "Pricing",
            content: "<p>The</p>",
            metadata: {
              background: false,
              section_id: "pricing"
            }
          });
        expect(data.background).toBe(false);
        expect(data.component).toBe("section.section-content");
        expect(data.sectionId).toBe("pricing");
        expect(data.html).toBe("<p>The</p>");
        expect(data.title).toBe("Pricing");
    })

    it('should map section grid with data', () => {
      const data = mapTextGrid({
        __component: 'section.section-grid',
        description: 'abc',
        title: 'My Grid',
        text_grid: [
          {
            title: 'Teste 1',
            description: 'Coisa',
          },
          {
            title: 'Teste 2',
            description: 'abc',
          },
        ],
        image_grid: [],
        metadata: {
          background: true,
          section_id: 'grid-one'
        }
      });
      expect(data.background).toBe(true);
      expect(data.component).toBe('section.section-grid-text');
      expect(data.sectionId).toBe('grid-one');
      expect(data.title).toBe('My Grid');
      expect(data.description).toBe('abc');
      expect(data.grid[0].title).toBe('Teste 1');
      expect(data.grid[0].description).toBe('Coisa');
    })

    it('should map grid text without data', () => {
      const data = mapTextGrid(undefined);
      expect(data.background).toBe(false);
      expect(data.component).toBe('section.section-grid-text');
      expect(data.sectionId).toBe('');
      expect(data.title).toBe('');
      expect(data.description).toBe('');
    });

    it('should map grid image without data', () => {
      const data = mapImageGrid(undefined);
      expect(data.background).toBe(false);
      expect(data.component).toBe('section.section-grid-image');
      expect(data.sectionId).toBe('');
      expect(data.title).toBe('');
      expect(data.description).toBe('');
    });

    it('should map grid image with data', () => {
      const data = mapImageGrid({
        __component: 'section.section-grid',
        description: 'abc',
        title: 'Gallery',
        text_grid: [],
        image_grid: [
          {
            image: {
              url: 'a.svg',
              alternativeText: 'abc'
            }
          }
        ],
        metadata: {
          background: false,
          section_id: 'gallery'
        },
      });
      expect(data.background).toBe(false);
      expect(data.component).toBe('section.section-grid-image');
      expect(data.sectionId).toBe('gallery');
      expect(data.title).toBe('Gallery');
      expect(data.description).toBe('abc');
      expect(data.grid[0].srcImg).toBe('a.svg');
      expect(data.grid[0].altText).toBe('abc');

    });
})
