import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={logoNossanetBrancaImg} alt="Logo NossaNet" />
        </Link>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/empresarial">Empresarial</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <Link to="/vagas">Vagas</Link>
            </li>
            <FiMenu size={30} onClick={onOpen} />
          </ul>

          <Button leftIcon={<FiUser size={20} />}>Minha Conta</Button>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <h1>Menu Mobile</h1>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
}
