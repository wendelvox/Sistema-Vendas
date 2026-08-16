import Link from "next/link"
export const Menu = () => {
    return (
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list">
                <li>
                    <Link href="#">                  
                        <span className="icon"></span> Home
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        <span className="icon"></span> Cadastros
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        <span className="icon"></span> Configurações
                    </Link>
                </li>
            </ul>
        </aside>
    )
}