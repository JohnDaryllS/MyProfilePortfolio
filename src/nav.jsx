import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    return (
        <nav>
            <div className="nav-content">
                <div className="logo">
                    <a href="#">Profile Portfolio</a>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>Profile</Link>
                    </li>
                    <li>
                        <Link to="/achievements" className={location.pathname === "/achievements" ? "active" : ""}>Achievements </Link>
                    </li>
                    <li>
                        <Link to="/project" className={location.pathname === "/project" ? "active" : ""}>Project</Link>
                    </li>
                    <li>
                        <Link to="/resources" className={location.pathname === "/resources" ? "active" : ""}>Resources</Link>
                    </li>
                    <li>
                        <Link to="/contact"className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
