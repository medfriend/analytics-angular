import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {sharedModules} from "../../../shared/shared.module";
import {LoadingTunnel} from "../../../core/tunnel/loading/loading.tunnel";

@Component({
  selector: "app-basic-loading",
  templateUrl: "./basic-loading.component.html",
  styleUrls: ["./basic-loading.component.scss"],
  standalone: true,
  imports: [...sharedModules],
})
export class BasicLoadingComponent implements OnChanges, OnInit {
  @Input() isLoading: boolean = false;
  @Input() message: string = 'Por favor, espera...';

  overlayClass: string = '';

  constructor(
    private loadingTunnel: LoadingTunnel
  ) {}

  ngOnChanges() {
    this.overlayClass = this.isLoading ? 'active' : '';
  }

  ngOnInit(): void {
    this.loadingTunnel.loading$.subscribe(loadingTunnel => {
      this.isLoading = loadingTunnel;
    })
  }
}
