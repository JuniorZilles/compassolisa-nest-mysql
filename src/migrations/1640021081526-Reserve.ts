import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Reserve1640021081526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reserve',
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
            name: 'data_fim',
            type: 'date',
            isNullable: false
          },
          {
            name: 'data_inicio',
            type: 'date',
            isNullable: false
          },
          {
            name: 'valor_final',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'id_rental',
            type: 'int',
            isNullable: false
          },
          {
            name: 'id_fleet',
            type: 'int',
            isNullable: false
          },
          {
            name: 'id_user',
            type: 'int',
            isNullable: false
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

    await queryRunner.createForeignKey(
      'reserve',
      new TableForeignKey({
        columnNames: ['id_rental'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rental',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'reserve',
      new TableForeignKey({
        columnNames: ['id_user'],
        referencedColumnNames: ['id'],
        referencedTableName: 'people',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'reserve',
      new TableForeignKey({
        columnNames: ['id_fleet'],
        referencedColumnNames: ['id'],
        referencedTableName: 'fleet',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reserve');
  }
}
