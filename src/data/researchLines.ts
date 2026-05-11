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
      'Post-quantum migration, certificate infrastructures, authentication, and operational boundaries in deployed security systems.',
    objects: ['TLS handshakes', 'X.509 paths', 'DNSSEC boundaries', 'WebAuthn recovery'],
    evidence:
      'Measurement artifacts, certificate-chain behavior, parser and import validation, resolver experiments, threat models, and operational regression cases.',
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
      'Evaluation frameworks, formal reasoning layers, proof-oriented systems, and research workflows with explicit evidence trails.',
    objects: ['Agent traces', 'Lean models', 'State invariants', 'Run records'],
    evidence:
      'Evaluation records, tool-call traces, proof obligations, model boundaries, state invariants, and audit-ready run histories.',
  },
] as const;

export function getResearchLine(id?: string) {
  return researchLines.find((line) => line.id === id);
}
