import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Theme',
  },
  {
    name: 'List des Médecins',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' },
  },
  {
    name: 'Components',
    title: true,
  },
  {
    name: 'List des RDVs',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' },
  },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE',
  //       },
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags',
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //     },
  //   ],
  // },
];
