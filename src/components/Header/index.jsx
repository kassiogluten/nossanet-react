import { NavLink } from "react-router-dom";

import { HeaderContainer, HeaderContent } from "./styles";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure, Button } from "@chakra-ui/react";

import { FiMenu, FiUser } from "react-icons/fi";

import logoNossanetBrancaImg from "../../assets/logo-nossanet-branca.svg";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logoNossanetBrancaImg} alt="Logo NossaNet" />
        </NavLink>
        <div>
          <ul>
            <NavLink
              exact={true}
              activeStyle={{
                borderBottomWidth: "3px",
                borderBottomColor: "var(--acessibilidade)",
              }}
              to="/"
            >
              <li>Para você</li>
            </NavLink>
            <NavLink
              activeStyle={{
                borderBottomWidth: "3px",
                borderBottomColor: "var(--acessibilidade)",
              }}
              to="/empresarial"
            >
              <li>Para empresas</li>
            </NavLink>

            <FiMenu size={30} onClick={onOpen} />
          </ul>

          <a href="https://central.nossanettelecom.net.br/"><Button leftIcon={<FiUser size={20} />}>Minha conta</Button></a>
        </div>
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="full">
          <ModalOverlay />
          <ModalContent onClick={onClose} color="white" bg="var(--azul)">
            <ModalCloseButton />
            <ModalBody>
              <h1>Menu Mobile</h1>
              <h1>Menu Mobile</h1>
              <h1>Menu Mobile</h1>
              <h1>Menu Mobile</h1>
              <ul>
                <NavLink to="/">
                  <li>Para você</li>
                </NavLink>
                <NavLink to="/empresarial">
                  <li>Para empresas</li>
                </NavLink>
              </ul>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
}
