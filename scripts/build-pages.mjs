import { spawnSync } from 'node:child_process';
import { access, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const cli = fileURLToPath(new URL('../node_modules/vinext/dist/cli.js', import.meta.url));
const result = spawnSync(process.execPath, [cli, 'build'], {
  cwd: root,
  env: { ...process.env, GITHUB_PAGES: 'true' },
  stdio: 'inherit',
});

if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

await access(new URL('../dist/client/index.html', import.meta.url));
await writeFile(new URL('../dist/client/.nojekyll', import.meta.url), '');
console.log('\nSite statique prêt dans dist/client/ (index.html et ressources).');
