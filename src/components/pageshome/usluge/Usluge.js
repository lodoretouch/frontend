import React from "react";
import ServiceCard from "../components/ServiceCard";

function Usluge() {
  return (
    <div className="usluge">
      <h2>Naše Usluge</h2>
      <ServiceCard title="Anticelulitna Maderoterapija" description="Uklanja celulit i poboljšava cirkulaciju." />
      <ServiceCard title="Relaks Maderoterapija" description="Pomaže opuštanju i smanjenju stresa." />
    </div>
  );
}

export default Usluge;