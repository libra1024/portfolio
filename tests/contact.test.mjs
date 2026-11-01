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
  { name: 'normalizes a profile without a scheme', environment: { PUBLIC_LINKEDIN: 'linkedin.com/in/profile' }, expected: 'https://linkedin.com/in/profile' },
  { name: 'preserves a configured URL', environment: { PUBLIC_LINKEDIN: 'https://www.linkedin.com/in/profile' }, expected: 'https://www.linkedin.com/in/profile' },
  { name: 'uses PUBLIC_LINKEDIN when both variables are set', environment: { PUBLIC_LINKEDIN: 'linkedin.com/in/current', NEXT_PUBLIC_LINKEDIN: 'linkedin.com/in/obsolete' }, expected: 'https://linkedin.com/in/current' },
  { name: 'ignores the obsolete variable when PUBLIC_LINKEDIN is absent', environment: { NEXT_PUBLIC_LINKEDIN: 'linkedin.com/in/obsolete' }, expected: 'https://linkedin.com/in/placeholder' },
]) {
  test(name, () => {
    assert.deepEqual(JSON.parse(contactUrl(environment)), [expected, expected]);
  });
}
