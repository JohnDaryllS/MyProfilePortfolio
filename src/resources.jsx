import { useState } from 'react';
import Pdefauts from './assets/favicon1.png'
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
import hue from './assets/faviconV23.png'
import story from './assets/faviconV24.png'
import spline from './assets/faviconV25.png'
import ngrok from './assets/faviconV26.png'
import tricks from './assets/faviconV27.png'
import grid from './assets/faviconV28.png'
import gen from './assets/faviconV29.png'
import jees from './assets/faviconsV30.png'
import gsap from './assets/faviconsV31.png'
import reveal from './assets/faviconV32.png'
import udemy from './assets/faviconV33.png'
import fcc from './assets/faviconV34.png'
import w3 from './assets/faviconV35.png'
import scorpion from './assets/faviconV36.png'
import mluster from './assets/faviconV37.png'
import real from './assets/faviconV38.png'
import cpen from './assets/faviconV39.png'
import typing from './assets/faviconV40.png'
import onlinegdb from './assets/faviconV41.png'
import visualgo from './assets/faviconV42.png'
import utility from './assets/faviconV43.png'
import stack from './assets/faviconV44.png'
import yarn from './assets/faviconV45.png'
import jitter from './assets/faviconV46.png'
import simple from './assets/faviconV47.png'
import leet from './assets/faviconV48.png'
import edx from './assets/faviconV49.png'
import sweet from './assets/faviconV50.png'
import luma from './assets/faviconV51.png'
import cut from './assets/faviconV52.png'
import hosting from './assets/faviconV53.png'
import graphic from './assets/faviconV54.png'
import creative from './assets/faviconV55.png'
import geniusdev from './assets/faviconV56.png'
import akoya from './assets/faviconV57.png'
import project from './assets/faviconV58.png'
import driver from './assets/faviconV59.png'
import over from './assets/faviconV60.png'
import svg from './assets/faviconV61.png'
import pubapi from './assets/faviconV62.png'
import cssicons from './assets/faviconV63.png'
import magicui from './assets/faviconV64.png'
import cssgrid from './assets/faviconV65.png'
import fancy from './assets/faviconV66.png'
import clippy from './assets/faviconV67.png'
import colour from './assets/faviconV68.png'
import mojs from './assets/faviconV69.png'


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
                <li onClick={() => handleClick('Others')}>Others</li>
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
                            <img src={Pdefauts} alt="" />
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
                            <img src={Pdefauts} alt="" />
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
                        <a href="https://www.happyhues.co/" target='_blank'><div className='resources'>
                            <img src={hue} alt="" />
                            <h3>Happy Hues</h3>
                        </div></a>
                        <a href="https://storyset.com/" target='_blank'><div className='resources'>
                            <img src={story} alt="" />
                            <h3>Story Set</h3>
                        </div></a>
                        <a href="https://app.spline.design/home" target='_blank'><div className='resources'>
                            <img src={spline} alt="" />
                            <h3>Spline</h3>
                        </div></a>
                        <a href="https://ngrok.com/" target='_blank'><div className='resources'>
                            <img src={ngrok} alt="" />
                            <h3>Ngrok</h3>
                        </div></a>
                        <a href="https://css-tricks.com/" target='_blank'><div className='resources'>
                            <img src={tricks} alt="" />
                            <h3>CSS Tricks</h3>
                        </div></a>
                        <a href="https://grid.layoutit.com/" target='_blank'><div className='resources'>
                            <img src={grid} alt="" />
                            <h3>Grid LayOut</h3>
                        </div></a>
                        <a href="https://cssgridgenerator.io/" target='_blank'><div className='resources'>
                            <img src={gen} alt="" />
                            <h3>CSS Grid Generator</h3>
                        </div></a>
                        <a href="https://animejs.com/" target='_blank'><div className='resources'>
                            <img src={jees} alt="" />
                            <h3>Anime.js</h3>
                        </div></a>
                        <a href="https://gsap.com/scroll/" target='_blank'><div className='resources'>
                            <img src={gsap} alt="" />
                            <h3>Scroll || GSAP</h3>
                        </div></a>
                        <a href="https://scrollrevealjs.org/" target='_blank'><div className='resources'>
                            <img src={reveal} alt="" />
                            <h3>ScrollReveal</h3>
                        </div></a>
                        <a href="https://acchou.github.io/html-css-cheat-sheet/animation.html#animation" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>Animation and Transition</h3>
                        </div></a>
                        <a href="https://www.udemy.com/" target='_blank'><div className='resources'>
                            <img src={udemy} alt="" />
                            <h3>Udemy</h3>
                        </div></a>
                        <a href="https://www.freecodecamp.org/learn" target='_blank'><div className='resources'>
                            <img src={fcc} alt="" />
                            <h3>FreeCodeCamp</h3>
                        </div></a>
                        <a href="https://www.w3schools.com/" target='_blank'><div className='resources'>
                            <img src={w3} alt="" />
                            <h3>W3schools</h3>
                        </div></a>
                        <a href="https://couponscorpion.com/" target='_blank'><div className='resources'>
                            <img src={scorpion} alt="" />
                            <h3>CouponScorpion</h3>
                        </div></a>
                        <a href="https://www.mindluster.com/" target='_blank'><div className='resources'>
                            <img src={mluster} alt="" />
                            <h3>Mind Luster</h3>
                        </div></a>
                        <a href="https://makereal.tldraw.com/" target='_blank'><div className='resources'>
                            <img src={real} alt="" />
                            <h3>make real tldraw</h3>
                        </div></a>
                        <a href="https://codepen.io/your-work" target='_blank'><div className='resources'>
                            <img src={cpen} alt="" />
                            <h3>Code Pen</h3>
                        </div></a>
                        <a href="https://www.typingtest.com/" target='_blank'><div className='resources'>
                            <img src={typing} alt="" />
                            <h3>Typing Test</h3>
                        </div></a>
                        <a href="https://www.onlinegdb.com/" target='_blank'><div className='resources'>
                            <img src={onlinegdb} alt="" />
                            <h3>OnlineGDB</h3>
                        </div></a>
                        <a href="https://visualgo.net/en" target='_blank'><div className='resources'>
                            <img src={visualgo} alt="" />
                            <h3>Visualgo</h3>
                        </div></a>
                        <a href="https://www.myinstants.com/" target='_blank'><div className='resources'>
                            <img src={utility} alt="" />
                            <h3>Myinstants</h3>
                        </div></a>
                        <a href="https://stackoverflow.com/" target='_blank'><div className='resources'>
                            <img src={stack} alt="" />
                            <h3>Stack Overflow</h3>
                        </div></a>
                        <a href="https://reqres.in/" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>Reqres</h3>
                        </div></a>
                        <a href="https://yarn.co/" target='_blank'><div className='resources'>
                            <img src={yarn} alt="" />
                            <h3>Yarn</h3>
                        </div></a>
                        <a href="https://jitter.video/?noredir=1" target='_blank'><div className='resources'>
                            <img src={jitter} alt="" />
                            <h3>Jitter</h3>
                        </div></a>
                        <a href="https://simplepdf.com/" target='_blank'><div className='resources'>
                            <img src={simple} alt="" />
                            <h3>SimplePDF</h3>
                        </div></a>
                        <a href="https://leetcode.com/" target='_blank'><div className='resources'>
                            <img src={leet} alt="" />
                            <h3>LeetCode</h3>
                        </div></a>
                        <a href="https://learning.edx.org/" target='_blank'><div className='resources'>
                            <img src={edx} alt="" />
                            <h3>Course | edx</h3>
                        </div></a>
                        <a href="https://sweetalert2.github.io/#usage" target='_blank'><div className='resources'>
                            <img src={sweet} alt="" />
                            <h3>SweetAlert2</h3>
                        </div></a>
                        <a href="https://lumalabs.ai/dream-machine/creations" target='_blank'><div className='resources'>
                            <img src={luma} alt="" />
                            <h3>Luma Dream Machine</h3>
                        </div></a>
                        <a href="https://www.cutout.pro/passport-photo-maker/upload" target='_blank'><div className='resources'>
                            <img src={cut} alt="" />
                            <h3>Cutout.pro</h3>
                        </div></a>
                        <a href="https://www.hostinger.ph/" target='_blank'><div className='resources'>
                            <img src={hosting} alt="" />
                            <h3>Hostinger</h3>
                        </div></a>
                        <a href="https://graphicburger.com/" target='_blank'><div className='resources'>
                            <img src={graphic} alt="" />
                            <h3>GraphicBurger</h3>
                        </div></a>
                        <a href="https://creativemarket.com/" target='_blank'><div className='resources'>
                            <img src={creative} alt="" />
                            <h3>Creative Market</h3>
                        </div></a>
                        <a href="http://logobook.com/" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>LogoBook</h3>
                        </div></a>
                        <a href="https://geniusdev.vercel.app/" target='_blank'><div className='resources'>
                            <img src={geniusdev} alt="" />
                            <h3>Geniusdev</h3>
                        </div></a>
                        <a href="https://akoyamockups.com/" target='_blank'><div className='resources'>
                            <img src={akoya} alt="" />
                            <h3>Akoya</h3>
                        </div></a>
                        <a href="https://projectworlds.in/" target='_blank'><div className='resources'>
                            <img src={project} alt="" />
                            <h3>Project Worlds</h3>
                        </div></a>
                        <a href="https://driverjs.com/" target='_blank'><div className='resources'>
                            <img src={driver} alt="" />
                            <h3>Driver.js</h3>
                        </div></a>
                        <a href="https://overapi.com/" target='_blank'><div className='resources'>
                            <img src={over} alt="" />
                            <h3>OverAPI</h3>
                        </div></a>
                        <a href="https://www.svgbackgrounds.com/" target='_blank'><div className='resources'>
                            <img src={svg} alt="" />
                            <h3>SVG Background</h3>
                        </div></a>
                        <a href="https://rapidapi.com/collection/list-of-free-apis" target='_blank'><div className='resources'>
                            <img src={pubapi} alt="" />
                            <h3>Rapid</h3>
                        </div></a>
                        <a href="https://github.com/appbrewery/public-api-lists?tab=readme-ov-file" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>List of API's</h3>
                        </div></a>
                        <a href="https://cssicon.space/#/" target='_blank'><div className='resources'>
                            <img src={cssicons} alt="" />
                            <h3>CSS Icon Animate</h3>
                        </div></a>
                        <a href="https://magicui.design/" target='_blank'><div className='resources'>
                            <img src={magicui} alt="" />
                            <h3>MagicUI</h3>
                        </div></a>
                        <a href="https://cssbud.com/css-generator/css-glow-generator/" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>CSS BUD</h3>
                        </div></a>
                        <a href="https://cssgrid-generator.netlify.app/" target='_blank'><div className='resources'>
                            <img src={cssgrid} alt="" />
                            <h3>CSS Grid</h3>
                        </div></a>
                        <a href="https://9elements.github.io/fancy-border-radius/" target='_blank'><div className='resources'>
                            <img src={fancy} alt="" />
                            <h3>Fancy Border Radius</h3>
                        </div></a>
                        <a href="https://bennettfeely.com/clippy/" target='_blank'><div className='resources'>
                            <img src={clippy} alt="" />
                            <h3>Clippy --CSS clip-path maker</h3>
                        </div></a>
                        <a href="https://colourcontrast.cc/" target='_blank'><div className='resources'>
                            <img src={colour} alt="" />
                            <h3>Colour Contrast Checker</h3>
                        </div></a>
                        <a href="https://mojs.github.io/tutorials/getting-started.html#setup-mo-js-in-your-project" target='_blank'><div className='resources'>
                            <img src={mojs} alt="" />
                            <h3>mo.js</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'CSS' && (
                    <div>
                        <a href="https://9elements.github.io/fancy-border-radius/" target='_blank'><div className='resources'>
                            <img src={fancy} alt="" />
                            <h3>Fancy Border Radius</h3>
                        </div></a>
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
                            <img src={Pdefauts} alt="" />
                            <h3>Hover.css</h3>
                        </div></a>
                        <a href="https://www.minimamente.com/project/magic/" target='_blank'><div className='resources'>
                            <img src={magic} alt="" />
                            <h3>Magic Animation CSS3</h3>
                        </div></a>
                        <a href="https://css-tricks.com/" target='_blank'><div className='resources'>
                            <img src={tricks} alt="" />
                            <h3>CSS Tricks</h3>
                        </div></a>
                        <a href="https://grid.layoutit.com/" target='_blank'><div className='resources'>
                            <img src={grid} alt="" />
                            <h3>Grid LayOut</h3>
                        </div></a>
                        <a href="https://cssgridgenerator.io/" target='_blank'><div className='resources'>
                            <img src={gen} alt="" />
                            <h3>CSS Grid Generator</h3>
                        </div></a>
                        <a href="https://gsap.com/scroll/" target='_blank'><div className='resources'>
                            <img src={gsap} alt="" />
                            <h3>Scroll || GSAP</h3>
                        </div></a>
                        <a href="https://scrollrevealjs.org/" target='_blank'><div className='resources'>
                            <img src={reveal} alt="" />
                            <h3>ScrollReveal</h3>
                        </div></a>
                        <a href="https://cssbud.com/css-generator/css-glow-generator/" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>CSS BUD</h3>
                        </div></a>
                        <a href="https://cssgrid-generator.netlify.app/" target='_blank'><div className='resources'>
                            <img src={cssgrid} alt="" />
                            <h3>CSS Grid</h3>
                        </div></a>
                        <a href="https://bennettfeely.com/clippy/" target='_blank'><div className='resources'>
                            <img src={clippy} alt="" />
                            <h3>Clippy --CSS clip-path maker</h3>
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
                        <a href="http://logobook.com/" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>LogoBook</h3>
                        </div></a>
                        <a href="https://www.svgbackgrounds.com/" target='_blank'><div className='resources'>
                            <img src={svg} alt="" />
                            <h3>SVG Background</h3>
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
                            <img src={Pdefauts} alt="" />
                            <h3>Animate on Scroll Library</h3>
                        </div></a>
                        <a href="https://animate.style/" target='_blank'><div className='resources'>
                            <img src={animate} alt="" />
                            <h3>Animate.Style</h3>
                        </div></a>
                        <a href="https://animejs.com/" target='_blank'><div className='resources'>
                            <img src={jees} alt="" />
                            <h3>Anime.js</h3>
                        </div></a>
                        <a href="https://acchou.github.io/html-css-cheat-sheet/animation.html#animation" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>Animation and Transition</h3>
                        </div></a>
                        <a href="https://driverjs.com/" target='_blank'><div className='resources'>
                            <img src={driver} alt="" />
                            <h3>Driver.js</h3>
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
                        <a href="https://www.happyhues.co/" target='_blank'><div className='resources'>
                            <img src={hue} alt="" />
                            <h3>Happy Hues</h3>
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
                        <a href="https://app.spline.design/home" target='_blank'><div className='resources'>
                            <img src={spline} alt="" />
                            <h3>Spline</h3>
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
                        <a href="https://footagecrate.com/" target='_blank'><div className='resources'>
                            <img src={crate} alt="" />
                            <h3>FootageCrate</h3>
                        </div></a>
                        <a href="https://storyset.com/" target='_blank'><div className='resources'>
                            <img src={story} alt="" />
                            <h3>Story Set</h3>
                        </div></a>
                        <a href="https://app.spline.design/home" target='_blank'><div className='resources'>
                            <img src={spline} alt="" />
                            <h3>Spline</h3>
                        </div></a>
                        <a href="https://graphicburger.com/" target='_blank'><div className='resources'>
                            <img src={graphic} alt="" />
                            <h3>GraphicBurger</h3>
                        </div></a>
                        <a href="https://creativemarket.com/" target='_blank'><div className='resources'>
                            <img src={creative} alt="" />
                            <h3>Creative Market</h3>
                        </div></a>
                        <a href="https://akoyamockups.com/" target='_blank'><div className='resources'>
                            <img src={akoya} alt="" />
                            <h3>Akoya</h3>
                        </div></a>
                        <a href="https://www.svgbackgrounds.com/" target='_blank'><div className='resources'>
                            <img src={svg} alt="" />
                            <h3>SVG Background</h3>
                        </div></a>
                        <a href="https://magicui.design/" target='_blank'><div className='resources'>
                            <img src={magicui} alt="" />
                            <h3>MagicUI</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'API' && (
                    <div>
                        <a href="https://ngrok.com/" target='_blank'><div className='resources'>
                            <img src={ngrok} alt="" />
                            <h3>Ngrok</h3>
                        </div></a>
                        <a href="https://reqres.in/" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>Reqres</h3>
                        </div></a>
                        <a href="https://overapi.com/" target='_blank'><div className='resources'>
                            <img src={over} alt="" />
                            <h3>OverAPI</h3>
                        </div></a>
                        <a href="https://rapidapi.com/collection/list-of-free-apis" target='_blank'><div className='resources'>
                            <img src={pubapi} alt="" />
                            <h3>Rapid</h3>
                        </div></a>
                        <a href="https://github.com/appbrewery/public-api-lists?tab=readme-ov-file" target='_blank'><div className='resources'>
                            <img src={Pdefauts} alt="" />
                            <h3>List of Public API's</h3>
                        </div></a>
                    </div>
                )}
                {selectedSection === 'Others' && (
                    <div>
                        <a href="https://www.udemy.com/" target='_blank'><div className='resources'>
                            <img src={udemy} alt="" />
                            <h3>Udemy</h3>
                        </div></a>
                        <a href="https://www.freecodecamp.org/learn" target='_blank'><div className='resources'>
                            <img src={fcc} alt="" />
                            <h3>FreeCodeCamp</h3>
                        </div></a>
                        <a href="https://www.w3schools.com/" target='_blank'><div className='resources'>
                            <img src={w3} alt="" />
                            <h3>W3schools</h3>
                        </div></a>
                        <a href="https://couponscorpion.com/" target='_blank'><div className='resources'>
                            <img src={scorpion} alt="" />
                            <h3>CouponScorpion</h3>
                        </div></a>
                        <a href="https://www.mindluster.com/" target='_blank'><div className='resources'>
                            <img src={mluster} alt="" />
                            <h3>Mind Luster</h3>
                        </div></a>
                        <a href="https://makereal.tldraw.com/" target='_blank'><div className='resources'>
                            <img src={real} alt="" />
                            <h3>make real tldraw</h3>
                        </div></a>
                        <a href="https://codepen.io/your-work" target='_blank'><div className='resources'>
                            <img src={cpen} alt="" />
                            <h3>Code Pen</h3>
                        </div></a>
                        <a href="https://www.typingtest.com/" target='_blank'><div className='resources'>
                            <img src={typing} alt="" />
                            <h3>Typing Test</h3>
                        </div></a>
                        <a href="https://www.onlinegdb.com/" target='_blank'><div className='resources'>
                            <img src={onlinegdb} alt="" />
                            <h3>OnlineGDB</h3>
                        </div></a>
                        <a href="https://visualgo.net/en" target='_blank'><div className='resources'>
                            <img src={visualgo} alt="" />
                            <h3>Visualgo</h3>
                        </div></a>
                        <a href="https://www.myinstants.com/" target='_blank'><div className='resources'>
                            <img src={utility} alt="" />
                            <h3>Myinstants</h3>
                        </div></a>
                        <a href="https://stackoverflow.com/" target='_blank'><div className='resources'>
                            <img src={stack} alt="" />
                            <h3>Stack Overflow</h3>
                        </div></a>
                        <a href="https://yarn.co/" target='_blank'><div className='resources'>
                            <img src={yarn} alt="" />
                            <h3>Yarn</h3>
                        </div></a>
                        <a href="https://jitter.video/?noredir=1" target='_blank'><div className='resources'>
                            <img src={jitter} alt="" />
                            <h3>Jitter</h3>
                        </div></a>
                        <a href="https://simplepdf.com/" target='_blank'><div className='resources'>
                            <img src={simple} alt="" />
                            <h3>SimplePDF</h3>
                        </div></a>
                        <a href="https://leetcode.com/" target='_blank'><div className='resources'>
                            <img src={leet} alt="" />
                            <h3>LeetCode</h3>
                        </div></a>
                        <a href="https://learning.edx.org/" target='_blank'><div className='resources'>
                            <img src={edx} alt="" />
                            <h3>Course | edx</h3>
                        </div></a>
                        <a href="https://sweetalert2.github.io/#usage" target='_blank'><div className='resources'>
                            <img src={sweet} alt="" />
                            <h3>SweetAlert2</h3>
                        </div></a>
                        <a href="https://lumalabs.ai/dream-machine/creations" target='_blank'><div className='resources'>
                            <img src={luma} alt="" />
                            <h3>Luma Dream Machine</h3>
                        </div></a>
                        <a href="https://www.cutout.pro/passport-photo-maker/upload" target='_blank'><div className='resources'>
                            <img src={cut} alt="" />
                            <h3>Cutout.pro</h3>
                        </div></a>
                        <a href="https://www.hostinger.ph/" target='_blank'><div className='resources'>
                            <img src={hosting} alt="" />
                            <h3>Hostinger</h3>
                        </div></a>
                        <a href="https://geniusdev.vercel.app/" target='_blank'><div className='resources'>
                            <img src={geniusdev} alt="" />
                            <h3>Geniusdev</h3>
                        </div></a>
                        <a href="https://projectworlds.in/" target='_blank'><div className='resources'>
                            <img src={project} alt="" />
                            <h3>Project Worlds</h3>
                        </div></a>
                        <a href="https://mojs.github.io/tutorials/getting-started.html#setup-mo-js-in-your-project" target='_blank'><div className='resources'>
                            <img src={mojs} alt="" />
                            <h3>mo.js</h3>
                        </div></a>
                    </div>
                )}
            </div>
            </div>
    );

}
export default Resources