import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as feather from "feather-icons";
import { LayoutService } from "../../../services/layout.service";
import { NavService } from "../../../services/nav.service";
import { fadeInAnimation } from "../../../data/router-animation/router-animation";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  animations: [fadeInAnimation],
})
export class ContentComponent implements OnInit, AfterViewInit, AfterViewChecked {
  constructor(private route: ActivatedRoute, public navServices: NavService, public layout: LayoutService, private changeRef: ChangeDetectorRef) {
    this.route.queryParams.subscribe((params) => {
      this.layout.config.settings.layout = params.layout ? params.layout : this.layout.config.settings.layout;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      feather.replace();
    });
  }

  ngAfterViewChecked(): void {
    this.changeRef.detectChanges();
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : "";
  }

  get layoutClass() {
    return "compact-wrapper";
  }

  ngOnInit() {}
}
