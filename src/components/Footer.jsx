import { SectionLinks } from "./SectionLinks";
import { SocialLinks } from "./SocialLinks";

import { social } from '../data/data.js'

export const Footer = () => {
    return (
        <footer className="section footer">
            <SectionLinks parentClass="footer-links" itemClass="footer-link" />

            <ul className="footer-icons">
                {
                    social.map((s) =>
                        <SocialLinks key={s.id} {...s} itemClass="footer-icon"/>
                    )
                }
            </ul>

            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    );
};