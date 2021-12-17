import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Cars1639766855988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'cars',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    isNullable: false,
                    generationStrategy: 'increment'
                },
                {
                    name: 'modelo',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'cor',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'ano',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'quantidadePassageiros',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('cars');
    }

}
