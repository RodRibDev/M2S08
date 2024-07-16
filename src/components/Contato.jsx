import { useState } from 'react'
import '../assets/styles/Contato.css'


function Contato() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleSubmit() {
        const form = {
            nome,
            email,
            mensagem
        }
        console.log('Formulário a ser enviado: ', form)
    }

    return (
        <>
        <div className='contato-page'>
            

            <h1>Contato</h1>
            <div className='inputs'>
                <fieldset>
                    <label>Nome: </label>
                    <input type="text" 
                    placeholder="Digite seu nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} />
                </fieldset>

                <fieldset>
                    <label>email: </label>
                    <input type="text" 
                    placeholder="Digite seu email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                
                <fieldset>
                    <label>Mensagem: </label>
                    <textarea name="mensagem" 
                    id="mensagem" 
                    placeholder="Digite uma mensagem" 
                    value={mensagem} onChange={(e) => setMensagem(e.target.value)}>     
                    </textarea>
                </fieldset>

                <button onClick={() => handleSubmit()}>Enviar mensagem</button>


            </div>
            </div> 
        </>
    )
}

export default Contato