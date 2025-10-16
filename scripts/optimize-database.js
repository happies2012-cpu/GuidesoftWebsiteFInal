import { PrismaClient } from '@prisma/client';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const prisma = new PrismaClient();

async function main() {
  console.log('Optimizing database for AI tools...');
  
  try {
    // Get the database path
    const dbPath = process.env.DATABASE_URL?.replace('file:', '') || join(__dirname, '../prisma/dev.db');
    console.log(`Database path: ${dbPath}`);
    
    // Open database directly with sqlite3
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });
    
    // Add indexes for better performance
    console.log('Adding indexes...');
    await db.run('CREATE INDEX IF NOT EXISTS idx_ai_tool_name ON "AITool"(name)');
    await db.run('CREATE INDEX IF NOT EXISTS idx_ai_tool_category ON "AITool"(category)');
    await db.run('CREATE INDEX IF NOT EXISTS idx_ai_tool_tags ON "AITool"(tags)');
    await db.run('CREATE INDEX IF NOT EXISTS idx_ai_tool_featured ON "AITool"(featured)');
    
    // Optimize the database
    console.log('Running database optimization...');
    await db.run('PRAGMA optimize');
    
    await db.close();
    
    console.log('Database optimization completed successfully!');
  } catch (error) {
    console.error('Error optimizing database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();