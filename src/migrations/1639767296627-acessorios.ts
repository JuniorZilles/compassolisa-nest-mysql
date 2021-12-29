import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Acessorios1639767296627 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'accessories',
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
            name: 'descricao',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'id_carro',
            type: 'int',
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
      'accessories',
      new TableForeignKey({
        columnNames: ['id_carro'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cars',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('accessories');
  }
}
