import { GumballMachine } from "./GumballMachine";
import { IGumballMachineState } from "./Istate";

export class SoldOutState implements IGumballMachineState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
    console.log("inicializando módulo soldOut");
  }

  InsertQuarter(): string {
    return "You can't insert a quarter, the machine is sold out\n";
  }

  EjectQuarter(): string {
    return "You can't eject, you haven't insert a quarter yet\n";
  }

  TurnCrank(): string {
    return "[SoldOutsState]Sorry, you already turned the crank\n";
  }

  Dispense(): string {
    return (
      this.gumballMachine.ReleaseBall() +
      " You turned, but there are no gumballs\n"
    );
  }

  DefaultMessage(): string {
    return "sold out";
  }

  ClassName(): string {
    return "SoldOutState";
  }
}
