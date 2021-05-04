import { Section5Container, Section5Content } from "./styles";
import { useState } from "react";

import { Top } from "./Top";
import { Plan } from "./Plan";

export default function Section5() {
  const cidades = [
    "Ipaba, MG",
    "Periquito, MG",
    "Naque, MG",
    "Perpétuo Socorro, MG",
    "Belo Oriente, MG",
    "Vale Verde, MG",
    "Boachá, MG",
  ];

  const planos = [
    {
      tipo: "fibra",
      plano: 30,
      valor: "79",
      cidade: "Ipaba, MG",
      qualifica: false,
    },
    {
      tipo: "fibra",
      plano: 100,
      valor: "99",
      cidade: "Ipaba, MG",
      qualifica: true,
    },
    {
      tipo: "fibra",
      plano: 200,
      valor: "129",
      cidade: "Ipaba, MG",
      qualifica: true,
    },
    {
      tipo: "fibra",
      plano: 300,
      valor: "149",
      cidade: "Ipaba, MG",
      qualifica: true,
    },
    {
      tipo: "fibra",
      plano: 30,
      valor: "79",
      cidade: "Periquito, MG",
      qualifica: false,
    },
    {
      tipo: "fibra",
      plano: 100,
      valor: "99",
      cidade: "Periquito, MG",
      qualifica: true,
    },
    {
      tipo: "fibra",
      plano: 200,
      valor: "129",
      cidade: "Periquito, MG",
      qualifica: true,
    },
    {
      tipo: "fibra",
      plano: 300,
      valor: "149",
      cidade: "Periquito, MG",
      qualifica: true,
    },
    {
      tipo: "rádio",
      plano: 3,
      valor: "59",
      cidade: "Naque, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 5,
      valor: "79",
      cidade: "Naque, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 7,
      valor: "99",
      cidade: "Naque, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 3,
      valor: "59",
      cidade: "Perpétuo Socorro, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 5,
      valor: "79",
      cidade: "Perpétuo Socorro, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 7,
      valor: "99",
      cidade: "Perpétuo Socorro, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 3,
      valor: "59",
      cidade: "Belo Oriente, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 5,
      valor: "79",
      cidade: "Belo Oriente, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 7,
      valor: "99",
      cidade: "Belo Oriente, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 3,
      valor: "59",
      cidade: "Vale Verde, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 5,
      valor: "79",
      cidade: "Vale Verde, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 7,
      valor: "99",
      cidade: "Vale Verde, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 3,
      valor: "59",
      cidade: "Boachá, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 5,
      valor: "79",
      cidade: "Boachá, MG",
      qualifica: false,
    },
    {
      tipo: "rádio",
      plano: 7,
      valor: "99",
      cidade: "Boachá, MG",
      qualifica: false,
    },
  ];

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(cidades[0]);

  function toggleSelect() {
    setIsSelectOpen(!isSelectOpen);
  }

  return (
    <Section5Container>
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
