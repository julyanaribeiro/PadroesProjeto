import React, { useState } from "react";
import PropTypes from "prop-types";
import "./estilo.css";

const GumballMachine = (props) => {
  const [updateScreen, setUpdateScreen] = useState("");
  const { gumballMachine } = props;

  const insertCoin = (e) => {
    
    const msg =
      gumballMachine.InsertQuarter() +
      gumballMachine.MachineStateHeader();
    setUpdateScreen(msg);
    console.log(msg);
  };

  const getGumball = (e) => {
    const msg = updateScreen + gumballMachine.TurnCrank(); 

    setUpdateScreen(msg);
    console.log(msg);
  };

  return (
    <>
      <button
        className="form-cadastro_input"
        size="100"
        onClick={insertCoin}
        label="Insert coin"
      >
        Inserir moeda
      </button>

      <button label="Pegar chicletes" size="100" onClick={getGumball}>
        Pegar chicletes
      </button>

      <textarea className="text" rows={15} value={updateScreen} readOnly />
    </>
  );
};

GumballMachine.propTypes = {
  gumballMachine: PropTypes.object,
};

export default GumballMachine;
