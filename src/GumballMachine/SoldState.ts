import { IGumballMachineState } from "./Istate";
import { GumballMachine } from "./GumballMachine";
import { NoQuarterState } from "./NoQuarterState";
import { SoldOutState } from "./SoldOutState";

export class SoldState implements IGumballMachineState {
  gumballMachine: GumballMachine;
  noQuarterState: IGumballMachineState;
  soldOutState: IGumballMachineState;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
    this.noQuarterState = new NoQuarterState(gumballMachine);
    this.soldOutState = new SoldOutState(gumballMachine);
    console.log("inicializando módulo estado sold");
  }

  InsertQuarter(): string {
    return "Please wait, we're alredy giving you a gumball\n";
  }

  EjectQuarter(): string {
    return "Sorry, you already turned the crank\n";
  }

  TurnCrank(): string {
    return "[SoldState]Turning twice doesn't get you another gumball!\n";
  }

  Dispense(): string {
    let outPut = this.gumballMachine.ReleaseBall();
    if (this.gumballMachine.Count > 0) {
      this.gumballMachine.State = this.noQuarterState;
    } else {
      this.gumballMachine.State = this.soldOutState;
      outPut += "Oops, out of gumballs!\n";
    }
    return outPut;
  }

  DefaultMessage(): string {
    return "delivering a gumball";
  }

  ClassName(): string {
    return "SoldState";
  }
}
