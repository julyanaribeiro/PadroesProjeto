import { HasQuarterState } from "./HasQuarterState";
import { IGumballMachineState } from "./Istate";
import { NoQuarterState } from "./NoQuarterState";
import { SoldOutState } from "./SoldOutState";
import { SoldState } from "./SoldState";

export class GumballMachine {
  soldOutState: IGumballMachineState;
  noQuarterState: IGumballMachineState;
  hasQuarterState: IGumballMachineState;
  soldState: IGumballMachineState;
  state: IGumballMachineState;

  count: any = 0;

  get Count(): Number {
    return this.count;
  }
  set Count(value: Number) {
    this.count = value;
  }

  get State(): IGumballMachineState {
    return this.state;
  }
  set State(value: IGumballMachineState) {
    this.state = value;
  }

  constructor(numberOfGumballs: Number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.count = numberOfGumballs;

    if (numberOfGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      //maquina vazia
      this.state = this.soldOutState;
    }
  }

  InsertQuarter(): string {
    return this.state.InsertQuarter();
  }

  EjectQuarter(): string {
    return this.state.EjectQuarter();
  }

  TurnCrank(): string {
    const ret = this.state.TurnCrank() + " " + this.state.Dispense();
    return ret;
  }

  ReleaseBall(): string {
    if (this.count !== 0) {
      this.count = this.count - 1;
    }

    return "A Gumball comes rolling out the slot...\n ";
  }

  Refill(numberOfGumballs: Number): string {
    this.count = this.count + numberOfGumballs;
    this.state = this.noQuarterState;

    return (
      "\nRefill: " +
      numberOfGumballs +
      " gumballs were added. " +
      "The gumball count in now: " +
      this.count +
      "\n"
    );
  }

  MachineStateHeader(): string {
    return (
      "There is : " +
      this.count +
      " Gumballs -> Machine is " +
      this.state.DefaultMessage()
    );
  }

  ClassName(): string {
    return "GumballMachine";
  }
}

export default GumballMachine;
