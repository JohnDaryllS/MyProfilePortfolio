import { useState } from 'react';
import box from './assets/faviconV2.png'
import eyecon from './assets/faviconV3.png'
import fonts from './assets/faviconV4.png'
import Adobe from './assets/faviconV5.png'
import larsen from './assets/faviconV6.png'
import UI from './assets/faviconV7.png'
import neo from './assets/faviconV8.png'
import chart from './assets/faviconV9.png'
import ani from './assets/faviconV10.png'


function Resources () {

    const [selectedSection, setSelectedSection] = useState('All');

    const handleClick = (section) => {
        setSelectedSection(section);
    };

    return(
        <div>
        <div className="card3">
            <ul className='list'>
                <li onClick={() => handleClick('All')}>All</li>
                <li onClick={() => handleClick('CSS')}>CSS</li>
                <li onClick={() => handleClick('Icons')}>Icons</li>
                <li onClick={() => handleClick('Animation')}>Animation</li>
                <li onClick={() => handleClick('Color')}>Color</li>
                <li onClick={() => handleClick('Fonts')}>Fonts</li>
                <li onClick={() => handleClick('3D Parallax')}>3D Parallax</li>
                <li onClick={() => handleClick('Design')}>Design</li>
                <li onClick={() => handleClick('API')}>API</li>
                <li onClick={() => handleClick('OTHERS')}>Others</li>
            </ul>
        </div>

        <div className="card4">
                {selectedSection === 'All' && (
                    <div>
                        <a href="https://cssgenerator.org/box-shadow-css-generator.html" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                        <a href="https://www.iconfinder.com/" target='_blank'><div className='resources'>
                            <img src={eyecon} alt="" />
                            <h3>Icon Finder</h3>
                        </div></a>
                        <a href="https://fonts.google.com/" target='_blank'><div className='resources'>
                            <img src={fonts} alt="" />
                            <h3>Google Fonts</h3>
                        </div></a>
                        <a href="https://color.adobe.com/create/color-wheel" target='_blank'><div className='resources'>
                            <img src={Adobe} alt="" />
                            <h3>Adobe Color</h3>
                        </div></a>
                        <a href="https://larsenwork.com/easing-gradients/" target='_blank'><div className='resources'>
                            <img src={larsen} alt="" />
                            <h3>Easing Gradients</h3>
                        </div></a>
                        <a href="https://uiverse.io/profile/all" target='_blank'><div className='resources'>
                            <img src={UI} alt="" />
                            <h3>UIVerse</h3>
                        </div></a>
                        <a href="https://neumorphism.io/#e0e0e0" target='_blank'><div className='resources'>
                            <img src={neo} alt="" />
                            <h3>Neumorphism.io</h3>
                        </div></a>
                        <a href="https://chartscss.org/" target='_blank'><div className='resources'>
                            <img src={chart} alt="" />
                            <h3>Charts.css</h3>
                        </div></a>
                        <a href="https://animatedbackgrounds.me/" target='_blank'><div className='resources'>
                            <img src={ani} alt="" />
                            <h3>Animated Backgrounds</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'CSS' && (
                    <div>
                        <a href="https://cssgenerator.org/box-shadow-css-generator.html" target='_blank'><div className='resources'>
                            <img src={box} alt="" />
                            <h3>Box Shadow CSS Generator</h3>
                        </div></a>
                        <a href="https://larsenwork.com/easing-gradients/" target='_blank'><div className='resources'>
                            <img src={larsen} alt="" />
                            <h3>Easing Gradients</h3>
                        </div></a>
                        <a href="https://uiverse.io/profile/all" target='_blank'><div className='resources'>
                            <img src={UI} alt="" />
                            <h3>UIVerse</h3>
                        </div></a>
                        <a href="https://neumorphism.io/#e0e0e0" target='_blank'><div className='resources'>
                            <img src={neo} alt="" />
                            <h3>Neumorphism.io</h3>
                        </div></a>
                        <a href="https://chartscss.org/" target='_blank'><div className='resources'>
                            <img src={chart} alt="" />
                            <h3>Charts.css</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'Icons' && (
                    <div>
                        <a href="https://www.iconfinder.com/" target='_blank'><div className='resources'>
                            <img src={eyecon} alt="" />
                            <h3>Icon Finder</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'Animation' && (
                    <div>
                        <a href="https://animatedbackgrounds.me/" target='_blank'><div className='resources'>
                            <img src={ani} alt="" />
                            <h3>Animated Backgrounds</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'Color' && (
                    <div>
                        <a href="https://color.adobe.com/create/color-wheel" target='_blank'><div className='resources'>
                            <img src={Adobe} alt="" />
                            <h3>Adobe Color</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'Fonts' && (
                    <div>
                        <a href="https://fonts.google.com/" target='_blank'><div className='resources'>
                            <img src={fonts} alt="" />
                            <h3>Google Fonts</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === '3D Parallax' && (
                    <div>
                        <h3>3D Parallax Resources</h3>
                        <p>Learn about 3D parallax design...</p>
                    </div>
                )}
                {selectedSection === 'Design' && (
                    <div>
                        <h3>Design Resources</h3>
                        <p>Check out design resources and tutorials...</p>
                    </div>
                )}
                {selectedSection === 'API' && (
                    <div>
                        <h3>API Resources</h3>
                        <p>Understand how to work with APIs...</p>
                    </div>
                )}
                {selectedSection === 'Others' && (
                    <div>
                        <h3>UI Elements Resources</h3>
                        <p>Learn more about UI Elements...</p>  
                    </div>
                )}
            </div>
            </div>
    );

}
export default Resources