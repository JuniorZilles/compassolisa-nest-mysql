import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Fleet1640021072676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fleet',
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
            name: 'status',
            type: 'enum',
            enumName: 'statusEnum',
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
            name: 'rentalId',
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
        columnNames: ['rentalId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'rental',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'fleet',
      new TableForeignKey({
        columnNames: ['carroId'],
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
