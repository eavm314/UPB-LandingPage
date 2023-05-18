import { links } from '../data/data'

export const FooterLinks = () => {
    return (
        <ul className="footer-links">
            {
                links.map( (l) => 
                    <li key={l.id}>
                        <a href={`#${l.name}`} className="footer-link">{l.name}</a>
                    </li>
                )
            }
        </ul>
    )
}
