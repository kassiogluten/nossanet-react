import {
  FormControl,
  FormLabel,
  Select,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import Input from "the-mask-input";
import "../styles/formcontato.css";
import { cidades } from "../components/cities";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export function FormModal1({ dados, setDados, setPag, pag }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const telefoneRef = useRef(null);
  const cpfRef = useRef(null);

  const handleSubmitButton = (event) => {
    event.preventDefault();
    setDados({
      ...dados,
      nome: nameRef.current.value,
      email: emailRef.current.value,
      telefone: telefoneRef.current.value,
      cpf: cpfRef.current.value,
    });
    setPag(pag + 1);
  };
  return (
    <form
      id="formcontato"
      as={FormControl}
      /* onSubmit={handleSubmit(onSubmit)} */
      noValidate
      mt={10}
    >
      <FormLabel htmlFor="nome">Nome completo</FormLabel>
      <Input
        defaultValue={dados.nome}
        ref={nameRef}
        /* value={dados.nome}
        onChange={handleNome} */
        type="text"
        placeholder="Qual o seu nome ?"
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
        defaultValue={dados.email}
        ref={emailRef}
        type="email"
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
            defaultValue={dados.telefone}
            ref={telefoneRef}
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
          <FormLabel htmlFor="cpf">CPF</FormLabel>
          <Input
            defaultValue={dados.cpf}
            ref={cpfRef}
            mask="cpf"
            type="text"
            id="cpf"
            placeholder="___.___.___-__"
            name="cpf"
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
      <Button
        id="avanca-form"
        rightIcon={<FiArrowRight color="white" size="18" />}
        fontWeight={800}
        w="242px"
        h="54px"
        _hover={{ bg: "#51a84e" }}
        color="white"
        bg="var(--acessibilidade)"
        onClick={handleSubmitButton}
      >
        Avançar
      </Button>
    </form>
  );
}
export function FormModal2({ dados, setDados, setPag, pag, city }) {
  const cepRef = useRef(null);
  const ruaRef = useRef(null);
  const numeroRef = useRef(null);
  const complementoRef = useRef(null);

  const handleSubmitButton = (event) => {
    event.preventDefault();
    setDados({
      ...dados,
      cep: cepRef.current.value,
      rua: ruaRef.current.value,
      numero: numeroRef.current.value,
      complemento: complementoRef.current.value,
    });
    setPag(pag + 1);
  };
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
        defaultValue={dados.cep}
        ref={cepRef}
          mask="cep"
          type="text"
          placeholder="_____-___"
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
      defaultValue={dados.rua}
      ref={ruaRef}
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
          defaultValue={dados.numero}
          ref={numeroRef}
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
          defaultValue={dados.complemento}
          ref={complementoRef}
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
          <Select
            disabled
            defaultValue={city}
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
      <Button
        id="avanca-form"
        rightIcon={<FiArrowRight color="white" size="18" />}
        fontWeight={800}
        w="242px"
        h="54px"
        _hover={{ bg: "#51a84e" }}
        color="white"
        bg="var(--acessibilidade)"
        onClick={handleSubmitButton}
      >
        Avançar
      </Button>
    </form>
  );
}
