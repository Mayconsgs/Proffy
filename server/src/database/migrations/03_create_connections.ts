import Knex from 'knex';

// Oque vai ser alterado no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable()
    })
}

// Se der ruim, como volta
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}