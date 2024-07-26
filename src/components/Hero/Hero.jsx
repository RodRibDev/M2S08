import { useState } from 'react';
import './Hero.css'
function Hero() {

    const [local, setLocal] = useState('');



    return (
        <>
            <div className='hero'>
            <h3>Bebida rápida, gelada e no precinho? <br /> O Zé entrega tudo.</h3>
            <form>
                 <input 
                type="text" 
                placeholder='Inserir endereço para ver preço' 
                value={local} 
                onChange={(e) => setLocal(e.target.value)} 
                />
            </form> 
            </div>   
        </>
    )
}

export default Hero