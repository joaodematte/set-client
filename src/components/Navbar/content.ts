export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: string;
};

export const navbarContent: Array<NavItem> = [
  {
    label: 'Início',
    href: '/dashboard'
  },
  {
    label: 'Diagramas',
    children: [
      {
        label: 'Unifilar',
        subLabel: 'Gerador de diagramas unifilares',
        href: '#'
      },
      {
        label: 'Unifilar simplificado',
        subLabel: 'Gerador de diagramas unifilares simplificados',
        href: '#'
      }
    ],
    href: '#'
  },
  {
    label: 'Logs',
    children: [
      {
        label: 'Unifilar',
        subLabel: 'Logs de diagramas unifilares',
        href: '#'
      },
      {
        label: 'Unifilar simplificado',
        subLabel: 'Logs de diagramas unifilares simplificados',
        href: '#'
      }
    ],
    href: '#'
  },
  {
    label: 'Acessos',
    href: '#'
  }
];
