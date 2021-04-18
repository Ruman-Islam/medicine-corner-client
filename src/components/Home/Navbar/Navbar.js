import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser] = useContext(userContext);
    return (
        <nav class="navbar navbar-expand-lg navbar-light container">
            <a class="navbar-brand" href="#"><span className="text-secondary">Medicine</span><span className="text-primary">Plus</span></a>
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="ms-3 nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="ms-3 nav-link" to="/services">Medical Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="ms-3 nav-link" to="/orders">Orders</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="ms-3 nav-link" to="/reviews">Reviews</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="ms-3 nav-link" to="/admin">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="ms-3 nav-link" to="/login">{loggedInUser.name ? loggedInUser.name : 'Login'}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;