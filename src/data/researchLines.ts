export type ResearchLineId = 'crypto-security' | 'ml-ai-formal';

export const researchLines = [
  {
    id: 'crypto-security',
    navLabel: 'Crypto / PQC',
    eyebrow: 'Line 01',
    title: 'Crypto / PQC / Security',
    shortTitle: 'Crypto and security',
    href: '/#crypto-security',
    icon: 'shield-check',
    description:
      'Protocol migration, certificate infrastructure, authentication, and operational boundaries in deployed security systems.',
    objects: ['TLS handshakes', 'X.509 paths', 'DNSSEC boundaries', 'WebAuthn recovery'],
    evidence:
      'Traces, certificate-chain reports, parser behavior, resolver experiments, threat models, and regression cases.',
  },
  {
    id: 'ml-ai-formal',
    navLabel: 'ML / Formal',
    eyebrow: 'Line 02',
    title: 'ML / AI / Formal Systems',
    shortTitle: 'ML, AI, and formal systems',
    href: '/#ml-ai-formal',
    icon: 'brain-circuit',
    description:
      'Evaluation harnesses, formal models, proof-oriented cleanup, and research workflows with explicit evidence trails.',
    objects: ['Agent traces', 'Lean models', 'State invariants', 'Run records'],
    evidence:
      'Scenario records, tool-call logs, diffs, proof obligations, model boundaries, and review records.',
  },
] as const;

export function getResearchLine(id?: string) {
  return researchLines.find((line) => line.id === id);
}
