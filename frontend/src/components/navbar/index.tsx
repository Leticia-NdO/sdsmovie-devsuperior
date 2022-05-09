import { ReactComponent as GithubIcon } from 'assets/img/github.svg'; // para importar imagens e usá-las dentro do componente
import './styles.css' // só isso pra importar o css


function Navbar() {
    return (   // o código abaixo  não é html em si, mas JSX que é bem parecido com o html mas permite códigos react
        <header>
            <nav className='container'>  {/* container é uma classe do bootstrap que delimita a largura do conteúdo e deixa a tela responsiva*/}
                <div className='dsmovie-nav-content'>  {/* uma classe personalizada que permite que tudo que está dentro dessa div fique um do lado do outro*/}
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Leticia-NdO">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon /> {/* O componente react vira uma sintaxe de tag*/}
                            <p className='dsmovie-contact-link'>/Leticia-NdO</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar