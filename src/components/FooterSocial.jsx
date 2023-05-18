import { social } from '../data/data'

export const FooterSocial = () => {
    return (
        <ul className="footer-icons">
            {
                social.map((s) =>
                    <li key={s.id}>
                        <a href={`https://www.${s.name}.com`} target="_blank" className="footer-icon"
                        ><i className={`fab fa-${s.name}`}></i
                        ></a>
                    </li>
                )
            }
        </ul>
    )
}
