import Knex from 'knex';

// Oque vai ser alterado no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
}

// Se der ruim, como volta
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}