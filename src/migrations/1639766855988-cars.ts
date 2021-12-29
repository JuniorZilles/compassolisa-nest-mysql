import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class Cars1639766855988 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
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
            isNullable: false
          },
          {
            name: 'quantidadePassageiros',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars');
  }
}
