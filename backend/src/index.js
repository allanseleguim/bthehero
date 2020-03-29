/** Aqui é o BACKEND  */

/**
 * Rota = RECURSO
 */


 /**
  * Métodos HTTP
  * GET: Busca informação no BACKEND
  * POST: Criar uma informação no back-end (INSERT)
  * PUT: Altera uma informação no back-end
  * DELETE: Exclui uma informação do BACK-END
  * 
  */


  /**
   * Tipos de parâmetros:
   * Query params: Parâmetros nomeados enviados na rota após o simbolo ? (Filtros, paginação)
   * Route params: Parâmetros utilizados para identificar recursos
   * 
   */

const express = require('express');
const cors = require('cors');
const routes = require('./routes'); /*Indicar que é uma PASTA e não um pacote do NODE_MODULES */

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);