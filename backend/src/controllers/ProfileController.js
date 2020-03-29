/**
 * Conexão com O BANCO 
 */

const connection = require('../database/connection');

module.exports = {
    /* Retorna os dados especificos de uma ONG */
        async index(request, response) {
            const ong_id = request.headers.authorization;
          
            const incidents = await connection('incidents')
                .where('ong_id', ong_id)
                .select('*');

                
                console.log(incidents);
                return response.json(incidents);
                
        }
}