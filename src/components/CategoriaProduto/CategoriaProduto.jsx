import './CategoriaProduto.css'
function CategoriaProduto({ texto, imagem }) {
    return (
        <>
            <div className="card-categoria">
                <div className="card-categoria__bg">
                    <img className='imgProduto' src={imagem}/>
                </div>                
                <span>{texto}</span>
            </div>
        </>
    )
}

export default CategoriaProduto