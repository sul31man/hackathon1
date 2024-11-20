import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">Task Manager</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/tasks">My Tasks</Link>
                <Link to="/profile">Profile</Link>
            </div>
            <div className="nav-user">
                <span>In development.</span>
            </div>
        </nav>
    );
}

export default Navbar;