import logo from '../images/logo_up.png'

import { SectionLinks } from './SectionLinks'
import { SocialLinks } from './SocialLinks';

import { social } from '../data/data.js'

export const NavBar = () => {
    return (
        <nav className="navbar" >
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <SectionLinks parentClass="nav-links" itemClass="nav-link"/>

                <ul className="nav-icons">
                    {
                        social.map((s) => 
                            <SocialLinks key={s.id} {...s} itemClass="nav-icon"/>
                        )
                    }
                </ul>

            </div>
        </nav >
    );
};