import React from 'react';


// components
import Gallery from '../components/Gallery';

// hooks & contexts
import { useFetch } from '../hooks/useFetch';
import  {useThemeContext} from "../contexts/ThemeContext"; 

export default function Home() {
    const theme = useThemeContext();
    const {data: home} = useFetch("/content/item/home");
    const {data: projects} = useFetch("/content/items/projects");


    if (!home || !projects || !theme) 
      return <p></p>;

    return (
      <>
        <section 
          style= {{ 
            background: 'black' // theme.backgroundDark
          }}
          className='h-[100vh] flex  p-10'
        >
          <div className='content-end basis-2/3 bottom-0 text-white'>
            <p className='text-7xl'>Ich bin</p>
            <p 
              className='text-9xl'
              style= {{ 
                color: theme.contrastDark
              }}>
                {home.hero.name}
              </p>
          </div>
          
          <div className="content-end basis-1/3 relative">
            <img
              className="object-fit"
              src={`${process.env.REACT_APP_BACKEND}/assets/link/${home.hero.image._id}`}
              alt=""
            />
            <div className="radial-gradient(var(--gradient-color-stops))  absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.7),_rgba(0,0,0,0))]"></div>
          </div>
          
        </section>

        <section className='pt-10 px-5'>
          <h1><strong>Über Mich</strong></h1>
          <p>{home.about}</p>
        </section>

        <section className='pt-10 px-5'>  
          <h1><strong>Projekte</strong></h1>

          <Gallery items={projects.slice().reverse().map(project => ({
            name: project.name,
            image: process.env.REACT_APP_BACKEND + "/assets/link/" + project.image._id
          }))}/>
        </section>


        <br/>

      </>
    );
}

