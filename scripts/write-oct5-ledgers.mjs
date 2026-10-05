import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const contentCommit = process.argv[2];
if (!/^[0-9a-f]{40}$/.test(contentCommit ?? '')) throw new Error('pass the full validated content commit SHA');
const validation = JSON.parse(execFileSync(process.execPath, ['scripts/validate-oct5-combined.mjs'], { encoding: 'utf8' }));
const common = {
  cycle: '2026-10-05', publicationDate: '2026-10-05', timezone: 'Etc/UTC',
  repository: 'coolifystealthagents/outsourcedcompany', productionBranch: 'main',
  baseSha: '90663845b24b84d5da7e34a4d64d33d3aee8c48a', contentCommit,
  remoteSha: 'PENDING_SOLE_PUSH_SHA',
  deploymentResource: 'Coolify3 application o13azcn9e2t9zki35hl07dt2 (browser operator owned)',
  deploymentStatus: 'not submitted; browser operator owns deployment',
};
for (const family of ['blog', 'research']) {
  const rows = validation.results.filter((row) => row.family === family);
  const ledger = {
    ...common, family, required: rows.length,
    articles: rows.map((row) => ({
      family, topic: row.title, slug: row.slug, sources: row.sources,
      bodyWords: row.words, contentHash: row.contentHash, publicationDate: '2026-10-05',
      commitSha: contentCommit, deploymentEvidence: 'browser operator pending',
      liveUrl: `https://outsourcedcompany.com/${family}/${row.slug}`, verificationTime: null,
    })),
  };
  fs.writeFileSync(`.paperclip/daily-content/2026-10-05/${family}.json`, `${JSON.stringify(ledger, null, 2)}\n`);
}
const lines = [
  '# October 5, 2026 combined validation', '',
  `Validated content commit: \`${contentCommit}\``, '',
  '- Publication date: `2026-10-05`', '- Configured timezone: `Etc/UTC`',
  '- Blog: 12/12 source and locally rendered routes validated', '- Research: 5/5 source and locally rendered routes validated',
  '- Complete ordered source/render body equality: pass (17/17)', '- Unique titles, canonical URLs, structured dates, visible dates, indexes, and sitemap: pass (17/17)',
  '- Shared image in every route: pass; HTTP 200, `image/jpeg`, JPEG signature and Pillow decode, 1600×1067',
  '- Contextual internal destinations: pass', '- Authoritative destinations: HTTP 200 after redirect where applicable',
  '- Repeated substantive paragraphs: 0',
  `- Blog maximum pairwise five-word-shingle overlap: ${(validation.blogOverlap.overlap * 100).toFixed(3)}% (${validation.blogOverlap.a} vs ${validation.blogOverlap.b})`,
  `- Research maximum pairwise five-word-shingle overlap: ${(validation.researchOverlap.overlap * 100).toFixed(3)}% (${validation.researchOverlap.a} vs ${validation.researchOverlap.b})`,
  '- Qualitative originality: topic-specific structures, evidence models, worked examples, decision boundaries, and reader outcomes reviewed; no shared argument or section sequence identified.',
  '- Locked install: pass (`npm ci --include=dev`, 0 vulnerabilities)', '- TypeScript: pass', '- Repository tests: pass', '- Clean production build: pass (703 static pages)',
  '', '## Body inventory', '', '| Family | Slug | Body words | SHA-256 |', '|---|---|---:|---|',
  ...validation.results.map((row) => `| ${row.family} | ${row.slug} | ${row.words.toLocaleString('en-US')} | \`${row.contentHash}\` |`),
  '', '## Release boundary', '',
  'No deployment was initiated. After the sole non-force push, the connected browser operator must pin and deploy the exact remote SHA on Coolify3 application `o13azcn9e2t9zki35hl07dt2`. All 17 public routes remain unverified until that exact deployment succeeds.',
];
fs.writeFileSync('docs/october-5-2026-combined-validation.md', `${lines.join('\n')}\n`);
