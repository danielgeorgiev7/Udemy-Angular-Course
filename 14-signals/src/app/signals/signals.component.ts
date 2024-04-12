import { NgFor } from "@angular/common";
import { Component, computed, effect, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions: string[] = [];
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log(this.counter()));
  }

  increment() {
    // this.counter.set(this.counter() + 1);
    this.counter.update((oldCounter) => oldCounter + 1);
    this.actions.push("INCREMENT");
  }

  decrement() {
    // this.counter.set(this.counter() - 1);
    this.counter.update((oldCounter) => oldCounter - 1);
    this.actions.push("DECREMENT");
  }
}