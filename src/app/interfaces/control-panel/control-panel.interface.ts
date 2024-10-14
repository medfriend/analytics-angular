import {Type} from "@angular/core";

export type routeInformation = {
  name: string;
  hasActionPanel: boolean;
  actionPanelComponent?: Type<any>;
}
