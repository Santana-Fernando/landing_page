import { mapData } from "./map-data";

describe('map-test', () => {
    it('should map data even if there is no data', () => {
        const pagesData = mapData()[0];
        expect(pagesData.footerHtml).toBe('');
        expect(pagesData.slug).toBe('');
        expect(pagesData.title).toBe('');
    })

    it('should map data if there are data', () => {
        const pagesData = mapData([
            { 
                footer_text: '<p>Hey man</p>',
                slug: 'slug',
                title: 'title'
            }
        ])[0];
        expect(pagesData.footerHtml).toBe('<p>Hey man</p>');
        expect(pagesData.slug).toEqual('slug');
        expect(pagesData.title).toEqual('title');
    })
})