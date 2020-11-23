import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-exercice2",
  templateUrl: "./exercice2.component.html",
  styleUrls: ["./exercice2.component.css"],
})
export class Exercice2Component {
  public valeur: string;
  @ViewChild("inputField") public inputField: ElementRef;

  constructor() {}

  setValue() {
    console.log("new input");
    this.valeur = this.inputField.nativeElement.value;
  }
}
