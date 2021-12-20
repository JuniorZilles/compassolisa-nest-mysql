import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Fleet1640021072676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fleet',
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
            name: 'status',
            type: 'enum',
            enum: ['disponível', 'indisponível'],
            isNullable: false
          },
          {
            name: 'placa',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'valor_diaria',
            type: 'decimal',
            isNullable: false
          },
          {
            name: 'id_rental',
            type: 'int',
            isNullable: false
          },
          {
            name: 'id_car',
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
      'fleet',
      new TableForeignKey({
        columnNames: ['id_rental'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rental',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'fleet',
      new TableForeignKey({
        columnNames: ['id_car'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cars',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fleet');
  }
}
