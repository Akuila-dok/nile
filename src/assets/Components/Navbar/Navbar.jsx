import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo_light from '../../../assets/Thelogo.jpg';
import search_icon_light from '../../../assets/search-w.png';
import search_icon_dark from '../../../assets/search-b.png';
import toggle_light from '../../../assets/night.png';
import toggle_dark from '../../../assets/day.png';
import mylogo from '../../../assets/mylogo.jpg';
import menu_icon from '../../../assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredLinks, setFilteredLinks] = useState([]);

    const links = [
        { to: 'header', label: 'Home' },
        { to: 'ouractivities', label: 'Activities' },
        { to: 'partnership', label: 'Partnership' },
        { to: 'about', label: 'About Us' },
        { to: 'contact', label: 'Contact Us', isButton: true }
    ];

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        });
    }, []);

    useEffect(() => {
        // Filter links based on search query if there is one, otherwise show all links
        const filtered = searchQuery
            ? links.filter(link => link.label.toLowerCase().includes(searchQuery.toLowerCase()))
            : [];
        setFilteredLinks(filtered);
    }, [searchQuery]);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const closeMenu = () => {
        setMobileMenu(false);
    };

    const handleSearchResultClick = () => {
        setSearchQuery('');
    };

    return (
        <nav className={`container ${sticky ? 'blue-nav' : ''}`}>
            <img src={theme === 'light' ? logo_light : logo_light} alt="logo" className='mylogo' />

            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                {links.map((link, index) => (
                    <li key={index}>
                        {link.isButton ? (
                            <ScrollLink to={link.to} smooth={true} offset={index === 0 ? 0 : -260} duration={500} onClick={closeMenu}>
                                <button className="btn">{link.label}</button>
                            </ScrollLink>
                        ) : (
                            <ScrollLink to={link.to} smooth={true} offset={index === 0 ? 0 : -260} duration={500} onClick={closeMenu}>
                                {link.label}
                            </ScrollLink>
                        )}
                    </li>
                ))}
            </ul>
            <div className="search-box">
                <input type='text' placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt=''  />
                {searchQuery && (
                    <ul className="search-dropdown">
                        {filteredLinks.map((link, index) => (
                            <li key={index}>
                                {link.isButton ? (
                                    <ScrollLink to={link.to} smooth={true} offset={index === 0 ? 0 : -260} duration={500} onClick={() => { handleSearchResultClick(); closeMenu(); }}>
                                        <button className="btn">{link.label}</button>
                                    </ScrollLink>
                                ) : (
                                    <ScrollLink to={link.to} smooth={true} offset={index === 0 ? 0 : -260} duration={500} onClick={() => { handleSearchResultClick(); closeMenu(); }}>
                                        {link.label}
                                    </ScrollLink>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            

            <img onClick={toggle_mode} src={theme === 'light' ? toggle_light : toggle_dark} alt='' className='toggle-icon' />
            <img src={menu_icon} alt='menu icon' className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
}

export default Navbar;
