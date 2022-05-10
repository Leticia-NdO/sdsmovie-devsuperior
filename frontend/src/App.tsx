import { BrowserRouter, Routes, Route } from "react-router-dom";  // servem para configurar as rotas
import Listing from './pages/Listing';
import Form from './pages/Form';
import Navbar from "./components/navbar";

function App() {  // o componente react é uma função do javascript
  return (
    <BrowserRouter>   {/* para iniciar a configuração das rotas */}
      <Navbar />  {/* como o navbar vai estar presente em todas as rotas, coloca-se ele acima das rotas */}
      <Routes>   {/* Routes inicia a configuração rota a rota */}
        <Route path="/" element={<Listing />} />    {/* a rota '/'  vai exibir o elemento Listing*/}
        <Route path="/form">   
          <Route path=":movieId" element={<Form />} />  {/* essa sobrota está dentro da tag route path form */}
        </Route>   {/* aqui se fecha a o route path form */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;   // só o app vai ser exportado, mas ele vai conter todos os componentes que o site precisará




// import Navbar from "./components/navbar";


// function App() {   
//   return (
//     <Navbar/>    
//   )
// }

// export default App;
