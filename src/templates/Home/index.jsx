import { useEffect } from "react";
import { Base } from "../Base";
import { mapData } from '../../api/map-data'
import { useState } from "react";
import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";
import { GridTwoColumn } from "../../components/GridTwoColumn";
import { GridContent } from "../../components/GridContent";
import { GridText } from "../../components/GridText";
import { GridImage } from "../../components/GridImage";

function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {

      try{
        const { data }  = await fetch('http://localhost:1337/api/pages/?slug=landing-page').then((response) => {
          return response.json();
        })
        const pageData = mapData(data);
        setData(pageData[0]);
        
      } catch(e) {
        console.log(e)
        setData(undefined)
      }
    }

    load()
  }, [])

  if(data === undefined) return <PageNotFound />
  if(data && !data.slug) return <Loading />

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;



  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{text, link, srcImg}}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`

        
        if(component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />
        }
        
        if(component === 'section.section-content'){
          console.log(section)
          return <GridContent key={key} {...section} />
        }
        
        if(component === 'section.section-grid-text'){
          return <GridText key={key} {...section} />
        }
        
        if(component === 'section.section-grid-image'){
          return <GridImage key={key} {...section} />
        }
      })}
    </Base>
  )
}

export default Home;
