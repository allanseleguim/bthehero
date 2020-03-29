/* Método UP cria as tabelas */ 
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
    });

};

/* Se o UP der errado, executar metodo down */ 
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');

};