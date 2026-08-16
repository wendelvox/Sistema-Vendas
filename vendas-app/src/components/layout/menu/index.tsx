import Link from "next/link"

interface MenuItemProps {
    href: string;
    label: string;
    icon?: React.ReactNode;
    
}
function MenuItem ({href,label,icon}: MenuItemProps) {

    return (
        <li>
                    <Link href={href}>
                       {icon && <span className="icon">{icon}</span>}
                        <span className="icon"></span> {label}
                    </Link>
        </li>

    )
}


export const Menu = () => {
    return (
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list">
                <MenuItem href="/" label="Home"/>
                <MenuItem href="/" label="Cadastro"/>
                <MenuItem href="/" label="Config"/>
                <MenuItem href="/" label="Sair"/>
              
            </ul>
        </aside>
    )
}

