import { useState } from 'react';


function Resources () {

    const [selectedSection, setSelectedSection] = useState('');

    const handleClick = (section) => {
        setSelectedSection(section);
    };

    return(
        <div>
        <div className="card3">
            <ul className='list'>
                <li onClick={() => handleClick('All')}>All</li>
                <li onClick={() => handleClick('CSS')}>CSS</li>
                <li onClick={() => handleClick('UI Elements')}>UI Elements</li>
                <li onClick={() => handleClick('Icons')}>Icons</li>
                <li onClick={() => handleClick('Animation')}>Animation</li>
                <li onClick={() => handleClick('Color')}>Color</li>
                <li onClick={() => handleClick('Fonts')}>Fonts</li>
                <li onClick={() => handleClick('3D Parallax')}>3D Parallax</li>
                <li onClick={() => handleClick('Design')}>Design</li>
                <li onClick={() => handleClick('API')}>API</li>
            </ul>
        </div>

        <div className="card4">
                {selectedSection === 'All' && (
                    <div>
                        <h3>All Resources</h3>
                        <p>Here you can find all learning resources:</p>
                        <h4>CSS Resources</h4>
                        <p>Here you can find the best CSS learning resources...</p>
                        <h4>UI Elements Resources</h4>
                        <p>Learn more about UI Elements...</p>
                        <h4>Icons Resources</h4>
                        <p>Here you can find various icon libraries...</p>
                        <h4>Animation Resources</h4>
                        <p>Discover animation techniques and libraries...</p>
                        <h4>Color Resources</h4>
                        <p>Explore color theory and palettes...</p>
                        <h4>Fonts Resources</h4>
                        <p>Find great font combinations and sources...</p>
                        <h4>3D Parallax Resources</h4>
                        <p>Learn about 3D parallax design...</p>
                        <h4>Design Resources</h4>
                        <p>Check out design resources and tutorials...</p>
                        <h4>API Resources</h4>
                        <p>Understand how to work with APIs...</p>
                    </div>
                )}
                {selectedSection === 'CSS' && (
                    <div>
                        <h3>CSS Resources</h3>
                        <p>Here you can find the best CSS learning resources...</p>
                    </div>
                )}
                {selectedSection === 'UI Elements' && (
                    <div>
                        <h3>UI Elements Resources</h3>
                        <p>Learn more about UI Elements...</p>
                    </div>
                )}
                {selectedSection === 'Icons' && (
                    <div>
                        <h3>Icons Resources</h3>
                        <p>Here you can find various icon libraries...</p>
                    </div>
                )}
                {selectedSection === 'Animation' && (
                    <div>
                        <h3>Animation Resources</h3>
                        <p>Discover animation techniques and libraries...</p>
                    </div>
                )}
                {selectedSection === 'Color' && (
                    <div>
                        <h3>Color Resources</h3>
                        <p>Explore color theory and palettes...</p>
                    </div>
                )}
                {selectedSection === 'Fonts' && (
                    <div>
                        <h3>Fonts Resources</h3>
                        <p>Find great font combinations and sources...</p>
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
            </div>
            </div>
    );

}
export default Resources