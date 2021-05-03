import { Section5Container, Section5Content } from "./styles";
import { useState } from "react";

import { Top } from "./Top";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          {planos
            .filter((plano) => plano.cidade === selectedCity)
            .map((plano, index) => (
              <motion.div
                initial={{ scale: 0.9, top: 100, opacity: 0 }}
                animate={{
                  scale: 1,
                  top: 0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: index / 15 },
                }}
                className="plano"
                key={index + plano.cidade}
              >
                <div className="box1">
                  <p>Nossanet {plano.tipo}</p>
                  <h1>{plano.plano} Mega</h1>
                  {plano.tipo === "fibra" && (
                    <span>+{plano.plano <= 30 ? "20" : "100"} mega bônus</span>
                  )}
                </div>
                <div className="box2">
                  {plano.qualifica && <span>Incluso Qualifica</span>}
                  <ul>
                    <li>
                      {plano.tipo === "fibra"
                        ? "Fibra Óptica"
                        : "Internet via rádio"}
                    </li>
                    <li>Instalação Grátis</li>
                    <li>Suporte Técnico 24h</li>
                    <li>Wi-Fi Grátis</li>
                    <li>Download: {plano.plano} Mbps</li>
                    <li>Upload: {plano.plano} Mbps</li>
                  </ul>
                </div>
                <div className="box3">
                  <div className="preco">
                    <span>R$</span>
                    <span>{plano.valor}</span>
                    <span>,90</span>
                    <span>por mês</span>
                  </div>
                  <button type="button">Quero esse</button>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </Section5Content>
    </Section5Container>
  );
}
