import { Section5Container, Section5Content } from "./styles";
import { useState } from "react";

import { Top } from "./Top";
import { Plan } from "./Plan";

import { cidades } from "../../../components/cities";
import { planos } from "../../../components/planosEmpresariais";

export default function Section5({
  pag,
  setPag,
  onOpen,
  myPlan,
  setMyPlan,
}) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [city, setCity] = useState(cidades[0]);

  function toggleSelect() {
    setIsSelectOpen(!isSelectOpen);
  }

  return (
    <Section5Container id="planos">
      <Section5Content>
        <Top
          isSelectOpen={isSelectOpen}
          city={city}
          setcity={setCity}
          cidades={cidades}
          toggleSelect={toggleSelect}
          setIsSelectOpen={setIsSelectOpen}
          setCity={setCity}
        />
        <Plan
          planos={planos}
          city={city}
          myPlan={myPlan}
          setMyPlan={setMyPlan}
          setCity={setCity}
          pag={pag}
          setPag={setPag}
          onOpen={onOpen}
        />
      </Section5Content>
    </Section5Container>
  );
}
