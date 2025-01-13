import React from 'react';


// components
import Gallery from '../components/Gallery';

// hooks
import { useFetch } from '../hooks/useFetch';

export default function Home() {
    const {data: home} = useFetch("/content/item/home");
    const {data: projects} = useFetch("/content/items/projects");

    if (!home || !projects) 
      return <p></p>;

    return (
      <>
        <h1><strong>Über Mich</strong></h1>
        <p>{home.about}</p>
        <br/>

        
        <h1><strong>Projekte</strong></h1>

        <Gallery items={projects.slice().reverse().map(project => ({
          name: project.name,
          image: process.env.REACT_APP_BACKEND + "/assets/link/" + project.image._id
        }))}/>

       

        <br/>

      </>
    );
}

