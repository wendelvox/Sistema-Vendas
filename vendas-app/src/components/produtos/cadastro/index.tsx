import { Layout } from "@/components";

export const CadastroProdutos = () => {
    return (
        <Layout titulo="Cadastro de Produtos">
            <div className="field">
                <label className="label" htmlFor="inputCod">Cod: *</label>
                <div className="control">
                    <input className="input" type="text"
                        id="inputCod"
                        placeholder="Digite o codigo" />
                </div>
            </div>

            <div className="field">
                <label className="label" htmlFor="inputPreco">Preço: *</label>
                <div className="control">
                    <input className="input" type="text"
                        id="inputPreco"
                        placeholder="Digite o preço do produto" />
                </div>
            </div>

             <div className="field">
                <label className="label" htmlFor="inputNome">Nome: *</label>
                <div className="control">
                    <input className="input" type="text"
                        id="inputNome"
                        placeholder="Digite o nome do produto" />
                </div>
            </div>

             <div className="field">
                <label className="label" htmlFor="inputDesc">Descrição: *</label>
                <div className="control">
                    <textarea className="textarea" 
                        id="inputDesc"
                        placeholder="Digite a descrição detalhada do produto." />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Voltar</button>
                </div>
            </div>
        </Layout>
    )
}