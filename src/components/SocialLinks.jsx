export const SocialLinks = ({name,itemClass}) => {

    return (
        <li >
            <a href={`https://www.${name}.com`} target="_blank" className={itemClass}>
                <i className={`fab fa-${name}`}></i>
            </a>
        </li>
    )
};