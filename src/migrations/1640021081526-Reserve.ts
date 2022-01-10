import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Reserve1640021081526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reserve',
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
            name: 'rentalId',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'fleetId',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'userId',
            type: 'varchar',
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
        columnNames: ['rentalId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rental',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'reserve',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'people',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'reserve',
      new TableForeignKey({
        columnNames: ['fleetId'],
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
