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
  { label: 'Research', href: '/#research', order: 1 },
  { label: 'Projects', href: '/projects', order: 2 },
  { label: 'Writing', href: '/blog', order: 3 },
  { label: 'Profile', href: '/about', order: 4 },
  { label: 'Contact', href: '/contact', order: 5 },
];

/**
 * Get navigation items sorted by order
 */
export function getNavItems(): NavItem[] {
  return [...navItems].sort((a, b) => a.order - b.order);
}
