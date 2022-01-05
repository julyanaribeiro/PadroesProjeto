import { IGumballMachineState } from "./Istate";
import { GumballMachine } from "./GumballMachine";
import { SoldState } from "./SoldState";
export class HasQuarterState implements IGumballMachineState {
  gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
    console.log("inicializando módulo estado hasQuarter");
  }

  InsertQuarter(): string {
    return "You can't insert another quarter\n";
  }

  EjectQuarter(): string {
    return "Quarter returned\n";
  }

  TurnCrank(): string {
    let outPut = "[HasQuarterState]You turned...\n";
    if (this.gumballMachine.Count > 1) {
      outPut = outPut + "go outing..";
    } else {
      outPut = outPut + "no has gumball..";
    }
    this.gumballMachine.State = new SoldState(this.gumballMachine);

    return outPut;
  }

  Dispense(): string {
    let outPut = this.gumballMachine.ReleaseBall() + "No gumball dispensed\n";
    return outPut;
  }

  DefaultMessage(): string {
    return "waiting for turn of crank";
  }

  ClassName(): string {
    return "HasQuarterState";
  }
}
