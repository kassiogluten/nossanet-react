import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button
} from "@chakra-ui/react";

export default function FormHome() {
  return (
    <FormControl mt={10}>
      <FormLabel htmlFor="nome">Nome completo</FormLabel>
      <Input type="text" id="nome" placeholder="Qual o seu nome ?"/>

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <Input type="email" id="email" placeholder="Qual seu e-mail ?"/>

      <FormLabel htmlFor="telefone">Telefone</FormLabel>
      <Input type="text" id="telefone" placeholder="(__) _____-____"/>

      <FormLabel>Departamento</FormLabel>
      <Select placeholder="Selecione o departamento">
        <option value="option1">Administrativo</option>
        <option value="option2">Operacional</option>
        <option value="option3">Técnico</option>
      </Select>

      <FormLabel htmlFor="mensagem">Mensagem</FormLabel>
      <Textarea h="150" placeholder="Digite sua mensagem" id="mensagem" />

      <Button mt="4" h="49" w="full">Enviar</Button>
    </FormControl>
  );
}
