import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class People1640020353952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'people',
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
            name: 'nome',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'cpf',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'data_nascimento',
            type: 'date',
            isNullable: false
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'senha',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'habilitado',
            type: 'enum',
            isNullable: false,
            enum: ['sim', 'não']
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('people');
  }
}