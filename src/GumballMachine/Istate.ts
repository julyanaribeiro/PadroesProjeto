export interface IGumballMachineState {
  InsertQuarter(): string;
  EjectQuarter(): string;
  TurnCrank(): string;
  Dispense(): string;
  DefaultMessage(): string;
  ClassName(): string;
}
