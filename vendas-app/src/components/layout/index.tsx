import { Menu } from "./menu"

interface LayoutProps {
    titulo?: string;
    children?: React.ReactNode; //Permite contéudo dentro do Layout

}

export const Layout =  ({titulo}: LayoutProps)  =>{
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu/>
                <div className="container column is-10">
                    <div className="section">
                        <div className="card">
                            <div className="card-header">
                                <p className="card-header-title">
                                    {titulo}
                                </p>
                             </div>
                             <div className="card-content">
                                <div className="content">Contéudo</div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
