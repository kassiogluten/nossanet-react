import { Section5Container, Section5Content } from "./styles";
import { useState } from "react";

import { Top } from "./Top";
import { Plan } from "./Plan";

import { cidades } from "../../../components/cities";
import { planos } from "../../../components/planos";

export default function Section5({
  pag,
  setPag,
  onOpen,
  myPlan,
  setMyPlan,
  city,
  setCity,
}) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cidades[0]);

  function toggleSelect() {
    setIsSelectOpen(!isSelectOpen);
  }

  return (
    <Section5Container id="planos">
      <Section5Content>
        <Top
          city={city}
          setCity={setCity}
          isSelectOpen={isSelectOpen}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          cidades={cidades}
          toggleSelect={toggleSelect}
          setIsSelectOpen={setIsSelectOpen}
        />
        <Plan
          myPlan={myPlan}
          setMyPlan={setMyPlan}
          city={city}
          setCity={setCity}
          pag={pag}
          setPag={setPag}
          onOpen={onOpen}
          planos={planos}
        />
      </Section5Content>
    </Section5Container>
  );
}
