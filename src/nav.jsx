import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <div className="nav-content">
                <div className="logo">
                    <a href="#">Profile Portfolio</a>
                </div>
                <ul className="nav-links">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/achievements">Achievements</Link></li>
                    <li><Link to="/project">Project</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
