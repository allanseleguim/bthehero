/**
 * Conexão com O BANCO 
 */

const connection = require('../database/connection');

/* Permite que este modulo seja importado na ROTA e suas respectivas funções */ 
module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

            /** Mensagem de erro se a ONG não existir  */
            if (!ong) {
                return response.status(400).json({ error: 'No Ong Found with this ID'});
            }

            return response.json(ong);
    }

}