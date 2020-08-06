import Knex from 'knex';

// Oque vai ser alterado no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
}

// Se der ruim, como volta
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}