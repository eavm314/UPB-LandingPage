import { links } from '../data/data.js'

export const SectionLinks = ({parentClass,itemClass}) => {
    return (
        <ul className={parentClass} id="nav-links">
            {
                links.map((link) =>
                    <li key={link.id}>
                        <a href={`#${link.name}`} className={itemClass}> {link.name} </a>
                    </li>
                )
            }
        </ul>
    )
};