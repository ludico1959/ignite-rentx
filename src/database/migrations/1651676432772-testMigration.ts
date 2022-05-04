import { MigrationInterface, QueryRunner } from 'typeorm';

export class testMigration1651676432772 implements MigrationInterface {
  name = 'testMigration1651676432772';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`);
    await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "categories" ADD "id" character varying NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b"`);
    await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "categories" ADD "id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "categories" ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id")`
    );
  }
}

/* gerar migrations no TypeORM v0.3.5
 * yarn typeorm migration:generate ./src/database/migrations/testMigration
 */
