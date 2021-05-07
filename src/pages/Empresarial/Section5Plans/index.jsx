import { Section5Container, Section5Content } from "./styles";
import { useState } from "react";

import { Top } from "./Top";
import { Plan } from "./Plan";

import {cidades} from '../../../components/cities'
import {planos} from '../../../components/planos'

export default function Section5() {

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cidades[0]);

  function toggleSelect() {
    setIsSelectOpen(!isSelectOpen);
  }

  return (
    <Section5Container id="planos">
      <Section5Content>
        <Top
          isSelectOpen={isSelectOpen}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          cidades={cidades}
          toggleSelect={toggleSelect}
          setIsSelectOpen={setIsSelectOpen}
        />
        <Plan planos={planos} selectedCity={selectedCity} />
      </Section5Content>
    </Section5Container>
  );
}
