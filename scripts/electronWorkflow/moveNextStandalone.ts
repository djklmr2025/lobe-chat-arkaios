/* eslint-disable unicorn/no-process-exit */
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';

const rootDir = path.resolve(__dirname, '../..');

// 定义源目录和目标目录
const sourceDir: string = path.join(rootDir, '.next/standalone');
const targetDir: string = path.join(rootDir, 'apps/desktop/dist/next');

// 向 sourceDir 写入 .env 文件
const env = fs.readFileSync(path.join(rootDir, '.env.desktop'), 'utf8');

fs.writeFileSync(path.join(sourceDir, '.env'), env, 'utf8');
console.log(`⚓️ Inject .env successful`);

// 确保目标目录的父目录存在
fs.mkdirSync(path.dirname(targetDir), { recursive: true });

// 如果目标目录已存在，先删除它
if (fs.existsSync(targetDir)) {
  console.log(`🗑️  Target directory ${targetDir} already exists, deleting...`);
  try {
    fs.rmSync(targetDir, { recursive: true, force: true });
    console.log(`✅ Old target directory removed successfully`);
  } catch (error) {
    console.warn(`⚠️  Failed to delete target directory: ${error}`);
  }
}

console.log(`🚚 Moving ${sourceDir} to ${targetDir}...`);

try {
  fs.cpSync(sourceDir, targetDir, { recursive: true });
  fs.rmSync(sourceDir, { recursive: true, force: true });
  console.log(`✅ Directory moved successfully!`);
} catch (error) {
  console.error('❌ Move failed:', error);
  process.exit(1);
}

console.log(`🎉 Move completed!`);
