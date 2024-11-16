interface Submenu {
  label: string;
  descripcion: string;
  route: string;
  icon: string;
}

interface Menu {
  label: string;
  descripcion: string;
  submenus: Submenu[];
  icon: string;
}
