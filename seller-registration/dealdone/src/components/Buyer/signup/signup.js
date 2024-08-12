import React, { useState } from 'react';
import './signup.css'; // Ensure this file exists and contains the necessary styles
import shoping from '../../../images/Shopingimg.png'; 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiCopyrightLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Signup = () => { 
    const [name, setName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\d{10}$/.test(phone);
    const validatePassword = (password) => password.length >= 8;

    const handleCreateAccount = async (event) => {
        event.preventDefault();
        
        let validationErrors = {};

        if (!name) {
            validationErrors.name = 'Name is required';
        } else if (!validateName(name)) {
            validationErrors.name = 'Name should contain only letters and spaces';
        }

        if (!emailOrPhone) {
            validationErrors.emailOrPhone = 'Email is required';
        } else if (!validateEmail(emailOrPhone)) {
            validationErrors.emailOrPhone = 'Please enter a valid email address';
        }

        if (!phone) {
            validationErrors.phone = 'Phone number is required';
        } else if (!validatePhone(phone)) {
            validationErrors.phone = 'Phone number should be exactly 10 digits';
        }

        if (!password) {
            validationErrors.password = 'Password is required';
        } else if (!validatePassword(password)) {
            validationErrors.password = 'Password must be at least 8 characters long';
        }

        if (password !== confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({}); // Clear errors if all validations pass

      
    };

    const handleGoogleSignup = async () => {
        alert('Google signup clicked');
    };

    return (
        <div className="signup-page">
            <header className="top-header">
                <div className="promo-message">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#">ShopNow</a>
                </div>
                <div className="top-header-right">
                    <select className="language-select">
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>
            </header>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">DealDone</div>
                    <ul className="navbar-menu">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li className='sign-up'><Link to="/login">Sign in</Link></li>
                    
                    </ul>
                </div>
            </nav>
            <div className="banner">
                <img src={shoping} alt="Shopping bags" />
                <div className="signup-form-container">
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                    <form className="signup-form" onSubmit={handleCreateAccount}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                        
                        <input 
                            type="text" 
                            placeholder="Email address" 
                            value={emailOrPhone} 
                            onChange={(e) => setEmailOrPhone(e.target.value)} 
                        />
                        {errors.emailOrPhone && <p className="error-message">{errors.emailOrPhone}</p>}
                        
                        <input 
                            type="text" 
                            placeholder="Phone Number" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                        />
                        {errors.phone && <p className="error-message">{errors.phone}</p>}
                        
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                        
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                        
                        <button type="submit" className="create-account-btn">Create Account</button>
                        <button type="button" className="google-signup-btn" onClick={handleGoogleSignup}>Sign up with Google</button>
                    </form>
                    <p>Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
            </div>
            <footer>
                <div className="footer-container">
                    <div className="footer-sections">
                        <div className="footer-section">
                            <address>
                                <h4>Address</h4>
                                Sector 12, Akurdi,<br />
                                Pune, Maharashtra, 33<br />
                                dealdone@gmail.com<br />
                                +88015-88888-9999
                            </address>
                        </div>
                        <div className="footer-section">
                            <h4>Account</h4>
                            <ul>
                                <li>My Account</li>
                                <li>Login / Register</li>
                                <li>Cart</li>
                                <li>Wishlist</li>
                                <li>Shop</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Let us help you</h4>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms Of Use</li>
                                <li>FAQ</li>
                                <li>Contact</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-social">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={15} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={15} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={15} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={15} />
                            </a>
                        </div>
                        <div className="footer-copyright-container">
                            <RiCopyrightLine size={10} color="#555" />
                            <h6 className="footer-copyright">
                                Copyright DealDone 2024. All right reserved
                            </h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Signup;
