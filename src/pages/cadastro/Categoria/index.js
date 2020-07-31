import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {

  const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

  console.log('[nomeDaCategoria]', nomeDaCategoria);

  return (
    <PageDefault>
      <h1>Cadastro de categoria { nomeDaCategoria} </h1>
      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      
      <Link to='/'>
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
