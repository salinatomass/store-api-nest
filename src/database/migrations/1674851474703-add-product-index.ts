import { MigrationInterface, QueryRunner } from 'typeorm';

export class addProductIndex1674851474703 implements MigrationInterface {
  name = 'addProductIndex1674851474703';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "createdAt"`);
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "updatedAt"`);
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b3234b06e4d16f52b384dfa4dd" ON "product" ("price") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b3234b06e4d16f52b384dfa4dd"`,
    );
    await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "updatedAt"`);
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "createdAt"`);
    await queryRunner.query(
      `ALTER TABLE "order_item" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }
}
