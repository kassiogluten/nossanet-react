import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";

import Input from "the-mask-input";

import './formcontato.css'

export default function FormHome() {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    // Send form email
    setIsLoading(true);
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        telefone: data.telefone,
        departamento: data.departamento,
        message: data.message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      setIsLoading(false);
      alert("enviado");
      reset();
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <form id='formcontato' as={FormControl} onSubmit={handleSubmit(onSubmit)} noValidate mt={10}>
      <FormLabel htmlFor="nome">Nome completo</FormLabel>
      <Input
        type="text"
        id="nome"
        placeholder="Qual o seu nome ?"
        name="name"
        {...register("name", {
          required: {
            value: true,
            message: "Nome obrigatório.",
          },
        })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <Input
        type="email"
        id="email"
        placeholder="Qual seu e-mail ?"
        name="email"
        {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        })}
      />
      {errors.email && <span>Ops! O e-mail é inválido.</span>}
      <FormLabel htmlFor="telefone">Telefone</FormLabel>
      <Input
        mask="cellTelephone"
        type="text"
        id="telefone"
        placeholder="(__) _____-____"
        name="telefone"
        {...register("telefone", {
          required: {
            value: true,
            message: "Telefone obrigatório",
          },
          maxLength: {
            value: 75,
            message: "telefone cannot exceed 75 characters",
          },
        })}
      />
      {errors.telefone && <span>{errors.telefone.message}</span>}

      <FormLabel>Departamento</FormLabel>
      <Select
        name="departamento"
        {...register("departamento")}
        placeholder="Selecione o departamento"
      >
        <option value="Administrativo">Administrativo</option>
        <option value="Operacional">Operacional</option>
        <option value="Técnico">Técnico</option>
      </Select>

      <FormLabel htmlFor="mensagem">Mensagem</FormLabel>
      <Textarea
        h="150"
        placeholder="Digite sua mensagem"
        id="mensagem"
        name="message"
        {...register("message", {
          required: true,
        })}
      />
      {errors.message && (
        <span className="errorMessage">Mensagem obrigatória.</span>
      )}

      <Button isLoading={isLoading} mt="4" h="49" w="full" type="submit">
        Enviar
      </Button>
    </form>
  );
}
