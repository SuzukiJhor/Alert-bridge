/*
  Warnings:

  - You are about to drop the column `reatAt` on the `Alert` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipientId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "readAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Alert" ("category", "content", "createdAt", "id", "recipientId") SELECT "category", "content", "createdAt", "id", "recipientId" FROM "Alert";
DROP TABLE "Alert";
ALTER TABLE "new_Alert" RENAME TO "Alert";
CREATE INDEX "Alert_recipientId_idx" ON "Alert"("recipientId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
