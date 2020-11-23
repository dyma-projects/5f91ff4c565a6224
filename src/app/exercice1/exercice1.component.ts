import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public compteur: number = 0;
  public result: number;

  constructor() {}

  updateCounter(event) {
    this.result = event.newCount;
  }

  ngOnInit() {
    this.result = this.compteur;
  }
}
