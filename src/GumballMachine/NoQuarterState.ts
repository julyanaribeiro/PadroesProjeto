import { GumballMachine } from "./GumballMachine";
import { HasQuarterState } from "./HasQuarterState";
import { IGumballMachineState } from "./Istate";

export class NoQuarterState implements IGumballMachineState {
  gumballMachine: GumballMachine;
  hasQuarterState: IGumballMachineState;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
    this.hasQuarterState = new HasQuarterState(gumballMachine);
    console.log("inicializando módulo estado noQuarter");
  }

  InsertQuarter(): string {
    this.gumballMachine.State = this.hasQuarterState;
    return "You inserted a quarter\n";
  }

  EjectQuarter(): string {
    return "You haven't inserted a quarter\n";
  }

  TurnCrank(): string {
    return "[NoQuarterState]You turned but there's no quarter\n";
  }

  Dispense(): string {
    return this.gumballMachine.ReleaseBall() + " You need to pay first\n";
  }

  DefaultMessage(): string {
    return "waiting for quarter";
  }

  ClassName(): string {
    return "NoQuarterState";
  }
}
