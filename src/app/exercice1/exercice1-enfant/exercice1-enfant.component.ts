import { Component, Output, EventEmitter, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() inputCounter: number;
  @Output() sendCounter = new EventEmitter();

  public childCounter: number;

  constructor() {}

  changeCounter(value) {
    this.childCounter += value;
    this.sendCounter.emit({ newCount: this.childCounter });
  }

  ngOnInit() {
    this.childCounter = this.inputCounter;
  }
}
