import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { test } from 'node:test';

function contactUrl(environment) {
  return execFileSync(process.execPath, [
    '--experimental-strip-types',
    '--input-type=module',
    '-e',
    "import { cvData } from './src/data/cv.ts'; process.stdout.write(JSON.stringify([cvData.en.contact.linkedin, cvData.es.contact.linkedin]));",
  ], {
    cwd: new URL('..', import.meta.url),
    encoding: 'utf8',
    env: { ...process.env, NEXT_PUBLIC_LINKEDIN: '', PUBLIC_LINKEDIN: '', ...environment },
  });
}

for (const { name, environment, expected } of [
  { name: 'falls back when no profile is configured', environment: {}, expected: 'https://linkedin.com/in/placeholder' },
  { name: 'normalizes a profile without a scheme', environment: { NEXT_PUBLIC_LINKEDIN: 'linkedin.com/in/profile' }, expected: 'https://linkedin.com/in/profile' },
  { name: 'preserves a configured URL', environment: { NEXT_PUBLIC_LINKEDIN: 'https://www.linkedin.com/in/profile' }, expected: 'https://www.linkedin.com/in/profile' },
  { name: 'supports the legacy environment variable', environment: { PUBLIC_LINKEDIN: 'linkedin.com/in/legacy' }, expected: 'https://linkedin.com/in/legacy' },
  { name: 'prefers the Next.js variable', environment: { NEXT_PUBLIC_LINKEDIN: 'linkedin.com/in/current', PUBLIC_LINKEDIN: 'linkedin.com/in/legacy' }, expected: 'https://linkedin.com/in/current' },
]) {
  test(name, () => {
    assert.deepEqual(JSON.parse(contactUrl(environment)), [expected, expected]);
  });
}
