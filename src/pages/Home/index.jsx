import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";

import "./home.css";
import { progress } from "../../assets/progress";
import { cidades } from "../../components/cities";

import Section1Hero from "./Section1Hero";
import Section2 from "./Section2Shortcuts";
import Section3 from "./Section3Fiber";
import Section4 from "./Section4Test";
import Section5 from "./Section5Plans";
import Section6 from "./Section6Faq";
import Section7 from "./Section7App";
import Section8 from "./Section8Contact";
import { Pages } from "./modalPages";
import ModalTest from "../../components/Modal";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [pag, setPag] = useState(1);
  const proxPag = () => setPag(pag + 1);
  const prevPag = () => setPag(pag - 1);
  const [formLoading, setFormLoading] = useState(false);
  const [city, setCity] = useState(cidades[0]);
  const [myPlan, setMyPlan] = useState(0);

  const [pessoas, setPessoas] = useState(0);
  const [jogaOnline, setJogaOnline] = useState(0);
  const [usaTrabalho, setUsaTrabalho] = useState(0);
  const [dispositivos, setDispositivos] = useState(0);
  const [streaming, setStreaming] = useState(0);
  const [estudar, setEstudar] = useState(0);

  function handleForm() {
    setFormLoading(true);
    setTimeout(fakeSend, 2000);
  }
  function fakeSend() {
    setFormLoading(false);
    setPag(pag + 1);
  }

  return (
    <>
      <Section1Hero />
      <Section2 />
      <Section3 />
      <Section4 setPag={setPag} onOpen={onOpen} />
      <Section5
        myPlan={myPlan}
        setMyPlan={setMyPlan}
        city={city}
        setCity={setCity}
        pag={pag}
        setPag={setPag}
        onOpen={onOpen}
      />
      <Section6 />
      <Section7 />
      <Section8 />
      <ModalTest
        myPlan={myPlan}
        setMyPlan={setMyPlan}
        pag={pag}
        Pages={Pages}
        setPag={setPag}
        onClose={onClose}
        isOpen={isOpen}
        city={city}
        setCity={setCity}
        prevPag={prevPag}
        proxPag={proxPag}
        formLoading={formLoading}
        handleForm={handleForm}
        progress={progress}
        pessoas={pessoas}
        setPessoas={setPessoas}
        jogaOnline={jogaOnline}
        setJogaOnline={setJogaOnline}
        usaTrabalho={usaTrabalho}
        setUsaTrabalho={setUsaTrabalho}
        dispositivos={dispositivos}
        setDispositivos={setDispositivos}
        streaming={streaming}
        setStreaming={setStreaming}
        estudar={estudar}
        setEstudar={setEstudar}
      />
    </>
  );
}
