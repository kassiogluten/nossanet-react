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
            <Link to="/">
              <li>Para você</li>
            </Link>
            <Link to="/empresarial">
              <li>Para empresas</li>
            </Link>

            <FiMenu size={30} onClick={onOpen} />
          </ul>

          <Button leftIcon={<FiUser size={20} />}>Minha conta</Button>
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <h1>Menu Mobile</h1>
              <h1>Menu Mobile</h1>
              <h1>Menu Mobile</h1>
              <h1>Menu Mobile</h1>
              <ul>
            <Link to="/">
              <li>Para você</li>
            </Link>
            <Link to="/empresarial">
              <li>Para empresas</li>
            </Link>

          </ul>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HeaderContent>
    </HeaderContainer>
  );
}
