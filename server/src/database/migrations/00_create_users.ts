import Knex from 'knex';

// Oque vai ser alterado no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

// Se der ruim, como volta
export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}