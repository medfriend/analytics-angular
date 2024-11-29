import {Component, Input, OnInit} from "@angular/core";
import {LoadingTunnel} from "../../core/tunnel/loading/loading.tunnel";
import {CommonModule} from "@angular/common";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"],
  imports: [CommonModule],
  standalone: true
})
export class NotFound implements OnInit {
  @Input() title: string = 'Página no encontrada';
  @Input() description: string = 'Lo sentimos, la página que buscas no existe';
  isLoading: boolean = false;

  constructor(
    private loadingTunnel: LoadingTunnel
  ) {}

  ngOnInit() {
    this.loadingTunnel.loading$.subscribe(loadingTunnel => {
      this.isLoading = loadingTunnel;
    })
  }
}
