import { PrismaClient } from '@prisma/client';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  console.log('Adding AIEnrollments table to database...');
  
  try {
    // Get the database path
    const dbPath = process.env.DATABASE_URL?.replace('file:', '') || join(__dirname, '../prisma/dev.db');
    console.log(`Database path: ${dbPath}`);
    
    // Open database directly with sqlite3
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });
    
    // Create the AIEnrollments table
    console.log('Creating AIEnrollments table...');
    await db.run(`
      CREATE TABLE IF NOT EXISTS "AIEnrollments" (
        id TEXT PRIMARY KEY,
        "userId" TEXT,
        "toolId" TEXT NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        linkedin TEXT,
        aadhar TEXT NOT NULL,
        pan TEXT NOT NULL,
        message TEXT,
        "isVerified" BOOLEAN NOT NULL DEFAULT 0,
        "isPaid" BOOLEAN NOT NULL DEFAULT 0,
        "transactionId" TEXT,
        "enrolledAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY ("toolId") REFERENCES "AITool"(id),
        FOREIGN KEY ("userId") REFERENCES "User"(id)
      )
    `);
    
    // Add indexes
    console.log('Adding indexes...');
    await db.run('CREATE INDEX IF NOT EXISTS idx_ai_enrollment_tool_id ON "AIEnrollments"("toolId")');
    await db.run('CREATE INDEX IF NOT EXISTS idx_ai_enrollment_email ON "AIEnrollments"(email)');
    await db.run('CREATE INDEX IF NOT EXISTS idx_ai_enrollment_phone ON "AIEnrollments"(phone)');
    await db.run('CREATE INDEX IF NOT EXISTS idx_ai_enrollment_verified ON "AIEnrollments"("isVerified")');
    await db.run('CREATE INDEX IF NOT EXISTS idx_ai_enrollment_paid ON "AIEnrollments"("isPaid")');
    
    await db.close();
    
    console.log('AIEnrollments table created successfully!');
  } catch (error) {
    console.error('Error creating AIEnrollments table:', error);
    process.exit(1);
  }
}

main();