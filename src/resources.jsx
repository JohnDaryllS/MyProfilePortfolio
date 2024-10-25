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
import smooth from './assets/favicon11.png'
import threed from './assets/faviconV12.png'
import awesome from './assets/faviconV13.png'
import hunt from './assets/faviconV14.png'
import draw from './assets/faviconV15.png'
import wave from './assets/faviconV16.png'
import atopos from './assets/faviconV17.png'
import tabler from './assets/faviconV18.png'
import animate from './assets/faviconV19.png'
import magic from './assets/faviconV20.png'
import softr from './assets/faviconV21.png'
import crate from './assets/faviconV22.png'


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
                <li onClick={() => handleClick('3D')}>3D</li>
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
                        <a href="https://shadows.brumm.af/" target='_blank'><div className='resources'>
                            <img src={smooth} alt="" />
                            <h3>Smooth Shadow</h3>
                        </div></a>
                        <a href="https://pixcap.com/" target='_blank'><div className='resources'>
                            <img src={threed} alt="" />
                            <h3>Pixcap</h3>
                        </div></a>
                        <a href="https://fontawesome.com/icons" target='_blank'><div className='resources'>
                            <img src={awesome} alt="" />
                            <h3>Font Awesome</h3>
                        </div></a>
                        <a href="https://colorhunt.co/" target='_blank'><div className='resources'>
                            <img src={hunt} alt="" />
                            <h3>Color Hunt</h3>
                        </div></a>
                        <a href="https://undraw.co/illustrations" target='_blank'><div className='resources'>
                            <img src={draw} alt="" />
                            <h3>unDraw</h3>
                        </div></a>
                        <a href="https://getwaves.io/" target='_blank'><div className='resources'>
                            <img src={wave} alt="" />
                            <h3>Get Waves</h3>
                        </div></a>
                        <a href="https://michalsnik.github.io/aos/" target='_blank'><div className='resources'>
                            <img src="" alt="" />
                            <h3>Animate on Scroll Library</h3>
                        </div></a>
                        <a href="https://atroposjs.com/" target='_blank'><div className='resources'>
                            <img src={atopos} alt="" />
                            <h3>Atropos JS</h3>
                        </div></a>
                        <a href="https://tabler.io/icons" target='_blank'><div className='resources'>
                            <img src={tabler} alt="" />
                            <h3>Tabler Icons</h3>
                        </div></a>
                        <a href="https://animate.style/" target='_blank'><div className='resources'>
                            <img src={animate} alt="" />
                            <h3>Animate.Style</h3>
                        </div></a>
                        <a href="https://ianlunn.github.io/Hover/" target='_blank'><div className='resources'>
                            <img src="" alt="" />
                            <h3>Hover.css</h3>
                        </div></a>
                        <a href="https://www.minimamente.com/project/magic/" target='_blank'><div className='resources'>
                            <img src={magic} alt="" />
                            <h3>Magic Animation CSS3</h3>
                        </div></a>
                        <a href="https://www.softr.io/tools/" target='_blank'><div className='resources'>
                            <img src={softr} alt="" />
                            <h3>Softr</h3>
                        </div></a>
                        <a href="https://footagecrate.com/" target='_blank'><div className='resources'>
                            <img src={crate} alt="" />
                            <h3>FootageCrate</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={animate} alt="" />
                            <h3>Animate.Style</h3>
                        </div></a>
                        <a href="" target='_blank'><div className='resources'>
                            <img src={animate} alt="" />
                            <h3>Animate.Style</h3>
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
                        <a href="https://shadows.brumm.af/" target='_blank'><div className='resources'>
                            <img src={smooth} alt="" />
                            <h3>Smooth Shadow</h3>
                        </div></a>
                        <a href="https://ianlunn.github.io/Hover/" target='_blank'><div className='resources'>
                            <img src="" alt="" />
                            <h3>Hover.css</h3>
                        </div></a>
                        <a href="https://www.minimamente.com/project/magic/" target='_blank'><div className='resources'>
                            <img src={magic} alt="" />
                            <h3>Magic Animation CSS3</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'Icons' && (
                    <div>
                        <a href="https://www.iconfinder.com/" target='_blank'><div className='resources'>
                            <img src={eyecon} alt="" />
                            <h3>Icon Finder</h3>
                        </div></a>
                        <a href="https://fontawesome.com/icons" target='_blank'><div className='resources'>
                            <img src={awesome} alt="" />
                            <h3>Font Awesome</h3>
                        </div></a>
                        <a href="https://tabler.io/icons" target='_blank'><div className='resources'>
                            <img src={tabler} alt="" />
                            <h3>Tabler Icons</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'Animation' && (
                    <div>
                        <a href="https://animatedbackgrounds.me/" target='_blank'><div className='resources'>
                            <img src={ani} alt="" />
                            <h3>Animated Backgrounds</h3>
                        </div></a>
                        <a href="https://michalsnik.github.io/aos/" target='_blank'><div className='resources'>
                            <img src="" alt="" />
                            <h3>Animate on Scroll Library</h3>
                        </div></a>
                        <a href="https://animate.style/" target='_blank'><div className='resources'>
                            <img src={animate} alt="" />
                            <h3>Animate.Style</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'Color' && (
                    <div>
                        <a href="https://color.adobe.com/create/color-wheel" target='_blank'><div className='resources'>
                            <img src={Adobe} alt="" />
                            <h3>Adobe Color</h3>
                        </div></a>
                        <a href="https://colorhunt.co/" target='_blank'><div className='resources'>
                            <img src={hunt} alt="" />
                            <h3>Color Hunt</h3>
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
                {selectedSection === '3D' && (
                    <div>
                        <a href="https://pixcap.com/" target='_blank'><div className='resources'>
                            <img src={threed} alt="" />
                            <h3>Pixcap</h3>
                        </div></a>
                        <a href="https://atroposjs.com/" target='_blank'><div className='resources'>
                            <img src={atopos} alt="" />
                            <h3>Atropos JS</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'Design' && (
                    <div>
                        <a href="https://undraw.co/illustrations" target='_blank'><div className='resources'>
                            <img src={draw} alt="" />
                            <h3>unDraw</h3>
                        </div></a>
                        <a href="https://getwaves.io/" target='_blank'><div className='resources'>
                            <img src={wave} alt="" />
                            <h3>Get Waves</h3>
                        </div></a>
                        <a href="https://www.softr.io/tools/" target='_blank'><div className='resources'>
                            <img src={softr} alt="" />
                            <h3>Softr</h3>
                        </div></a>
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