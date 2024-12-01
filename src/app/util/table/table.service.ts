import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TableService {
  convertDate(dateString : string): string{
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };

    return date.toLocaleString('es-ES', options);
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }
}
