import { useEffect } from "react";
import { Heading } from "../../components/Heading";
import { Base } from "../Base";
import { mockBase } from "../Base/mock";
import * as Styled from "./styles";
import { mapData } from '../../api/map-data'
import { useState } from "react";
import { PageNotFound } from "../PageNotFound";
import { Loading } from "../Loading";

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
        setData(undefined)
      }
    }

    load()
  }, [])

  if(data === undefined) return <PageNotFound />
  if(data && !data.slug) return <Loading />
  return <Base {...mockBase}/>;
}

export default Home;
