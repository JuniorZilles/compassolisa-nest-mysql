import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Endereco1640020696445 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'endereco',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            isNullable: false,
            generationStrategy: 'uuid'
          },
          {
            name: 'cep',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'number',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'complemento',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'bairro',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'localidade',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'logradouro',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'uf',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'isFilial',
            type: 'boolean',
            isNullable: false
          },
          {
            name: 'rentalId',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP(6)'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP(6)'
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      'endereco',
      new TableForeignKey({
        columnNames: ['rentalId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rental',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('endereco');
  }
}
