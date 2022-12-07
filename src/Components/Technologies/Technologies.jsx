import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import './Technologies.scss'

import javascript from '../../Assets/javascript.png'
import css from '../../Assets/css3.png'
import react from '../../Assets/react-native.png'
import html from '../../Assets/html-5.png'
import sass from '../../Assets/sass.png'
import git from '../../Assets/git.png'
import ts from '../../Assets/typescript.png'
import bootstrap from '../../Assets/Bootstrap.png'

export const Technologies = () => {



    return (
        <Element name="tech">
            <div id="Technologies">
        <h1>TECHNOLOGIES</h1>
        <div className='techs'>
        <div className='techHolder'>
            <img src={javascript}></img>
            <h2>JAVASCRIPT</h2>
        </div>
        <div className='techHolder'>
        <img src={react}></img>
        <h2>ReactJS</h2>
        </div>
        <div className='techHolder'>
        <img src={html}></img>
        <h2>HTML</h2>
        </div>
        <div className='techHolder'>
        <img src={css}></img>
        <h2>CSS</h2>
        </div>
        <div className='techHolder'>
        <img src={sass}></img>
        <h2>SASS</h2>
        </div>
        <div className='techHolder'>
        <img src={ts}></img>
        <h2>Typescript</h2>
        </div>
        <div className='techHolder'>
        <img src={bootstrap}></img>
        <h2>Bootstrap</h2>
        </div>
        <div className='techHolder'>
        <img src={git}></img>
        <h2>GIT</h2>
        </div>
        </div>
    </div>
        </Element>
    )
}