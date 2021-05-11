import { FormControl, FormLabel, Select, HStack, Box } from "@chakra-ui/react";
import Input from "the-mask-input";
import "../styles/formcontato.css";
import { cidades } from "../components/cities";
import { useState } from "react";

export function FormModal1() {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
  });
  const handleNome = (event) =>
    setDados({ ...dados, nome: event.target.value });
  const handleEmail = (event) =>
    setDados({ ...dados, email: event.target.value });
  const handleTelefone = (event) =>
    setDados({ ...dados, telefone: event.target.value });
  const handleCPF = (event) => setDados({ ...dados, cpf: event.target.value });
  return (
    <form
      id="formcontato"
      as={FormControl}
      /* onSubmit={handleSubmit(onSubmit)} */
      noValidate
      mt={10}
    >
      {dados.nome && <h1>Nome: {dados.nome}</h1>}
      {dados.email && <h1>Email: {dados.email}</h1>}
      {dados.telefone && <h1>Telefone: {dados.telefone}</h1>}
      {dados.cpf && <h1>CPF: {dados.cpf}</h1>}
      <FormLabel htmlFor="nome">Nome completo</FormLabel>
      <Input
      key="nome"
        value={dados.nome}
        onChange={handleNome}
        type="text"
        id="nome"
        placeholder="Qual o seu nome ?"
        name="nome"
        /*         {...register("name", {
          required: {
            value: true,
            message: "Nome obrigatório.",
          },
        })} */
      />
      {/*  {errors.name && <span>{errors.name.message}</span>} */}

      <FormLabel htmlFor="email">E-mail</FormLabel>
      <Input
      key="email"
        value={dados.email}
        onChange={handleEmail}
        type="email"
        id="email"
        placeholder="Qual seu e-mail ?"
        name="email"
        /*  {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        })} */
      />
      {/*  {errors.email && <span>Ops! O e-mail é inválido.</span>} */}
      <HStack>
        <Box w="50%">
          <FormLabel htmlFor="telefone">Telefone</FormLabel>
          <Input
            value={dados.telefone}
            onChange={handleTelefone}
            mask="cellTelephone"
            type="text"
            id="telefone"
            placeholder="(__) _____-____"
            name="telefone"
            /* {...register("telefone", {
          required: {
            value: true,
            message: "Telefone obrigatório",
          },
          maxLength: {
            value: 75,
            message: "telefone cannot exceed 75 characters",
          },
        })} */
          />
          {/*  {errors.telefone && <span>{errors.telefone.message}</span>} */}
        </Box>
        <Box w="50%">
          <FormLabel htmlFor="CPF">CPF</FormLabel>
          <Input
            value={dados.cpf}
            onChange={handleCPF}
            mask="cpf"
            type="text"
            id="CPF"
            placeholder="___.___.___-__"
            name="CPF"
            /* {...register("CPF", {
          required: {
            value: true,
            message: "CPF obrigatório",
          },
          maxLength: {
            value: 75,
            message: "CPF cannot exceed 75 characters",
          },
        })} */
          />
          {/*  {errors.telefone && <span>{errors.telefone.message}</span>} */}
        </Box>
      </HStack>
    </form>
  );
}
export function FormModal2({city}) {
  return (
    <form
      id="formcontato"
      as={FormControl}
      /* onSubmit={handleSubmit(onSubmit)} */
      noValidate
      mt={10}
    >
      <Box w="60%">
        <FormLabel htmlFor="nome">CEP</FormLabel>
        <Input
          mask="cep"
          type="text"
          id="cep"
          placeholder="_____-___"
          name="cep"
          /*         {...register("name", {
          required: {
            value: true,
            message: "Nome obrigatório.",
          },
        })} */
        />
        {/*  {errors.name && <span>{errors.name.message}</span>} */}
      </Box>

      <FormLabel htmlFor="email">Rua</FormLabel>
      <Input
        type="text"
        id="rua"
        placeholder="Digite seu endereço"
        name="rua"
        /*  {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        })} */
      />
      {/*  {errors.email && <span>Ops! O e-mail é inválido.</span>} */}
      <HStack>
        <Box w="40%">
          <FormLabel htmlFor="numero">Numero</FormLabel>
          <Input
            type="text"
            id="numero"
            placeholder="Numero da residência"
            name="numero"
            /* {...register("telefone", {
          required: {
            value: true,
            message: "Telefone obrigatório",
          },
          maxLength: {
            value: 75,
            message: "telefone cannot exceed 75 characters",
          },
        })} */
          />
          {/*  {errors.telefone && <span>{errors.telefone.message}</span>} */}
        </Box>
        <Box w="40%">
          <FormLabel htmlFor="complemento">Complemento</FormLabel>
          <Input
            type="text"
            id="complemento"
            placeholder="EX: AP 202"
            name="complemento"
            /* {...register("CPF", {
          required: {
            value: true,
            message: "CPF obrigatório",
          },
          maxLength: {
            value: 75,
            message: "CPF cannot exceed 75 characters",
          },
        })} */
          />
          {/*  {errors.telefone && <span>{errors.telefone.message}</span>} */}
        </Box>
      </HStack>
      <HStack>
        <Box w="50%">
          <FormLabel>Cidade</FormLabel>
          <Select disabled defaultValue={city}
            name="cidade"
            /*  {...register("departamento")} */
            placeholder="Selecione sua cidade"
          >
            {cidades.map((cidade) => (
              <option key={cidade} value={cidade}>
                {cidade}
              </option>
            ))}
          </Select>
        </Box>
        <Box w="50%">
          <FormLabel htmlFor="estado">Estado</FormLabel>
          <Input
            disabled
            defaultValue="Minas Gerais"
            type="text"
            id="estado"
            name="estado"
            /* {...register("CPF", {
          required: {
            value: true,
            message: "CPF obrigatório",
          },
          maxLength: {
            value: 75,
            message: "CPF cannot exceed 75 characters",
          },
        })} */
          />
          {/*  {errors.telefone && <span>{errors.telefone.message}</span>} */}
        </Box>
      </HStack>
    </form>
  );
}
