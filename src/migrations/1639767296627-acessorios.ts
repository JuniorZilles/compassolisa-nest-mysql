import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Acessorios1639767296627 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'accessories',
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
            name: 'descricao',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'carroId',
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
      'accessories',
      new TableForeignKey({
        columnNames: ['carroId'],
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
