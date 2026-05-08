/**
 * Navigation Configuration
 *
 * Defines which pages appear in the site navigation and their display order.
 * Astro handles routing via the filesystem — this only controls nav menus.
 */

export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export const navItems: NavItem[] = [
  { label: 'Crypto / PQC', href: '/#crypto-security', order: 1 },
  { label: 'ML / Formal', href: '/#ml-ai-formal', order: 2 },
  { label: 'Artifacts', href: '/projects', order: 3 },
  { label: 'Papers', href: '/papers', order: 4 },
  { label: 'Profile', href: '/about', order: 5 },
  { label: 'Contact', href: '/contact', order: 6 },
];

/**
 * Get navigation items sorted by order
 */
export function getNavItems(): NavItem[] {
  return [...navItems].sort((a, b) => a.order - b.order);
}
