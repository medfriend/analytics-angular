import { Type } from '@angular/core';

export type routeInformation = {
  name: string;
  hasActionPanel: boolean;
  actionPanelComponent?: {
    component: Type<any>; // Componente dinámico
    injectors: Record<string, any>; // Valores para los @Input del componente
  };
};

