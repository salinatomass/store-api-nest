import { MigrationInterface, QueryRunner } from 'typeorm';

export class fixProducts1674270201037 implements MigrationInterface {
  name = 'fixProducts1674270201037';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "image" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "categoryId"`);
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "brandId"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD "brandId" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "categoryId" integer NOT NULL`,
    );
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
