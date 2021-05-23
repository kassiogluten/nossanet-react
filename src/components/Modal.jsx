import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import {motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function ModalTest({
  pag,
  prevPag,
  proxPag,
  onClose,
  isOpen,
  progress,
  Pages,
  city,
  setCity,
  formLoading,
  handleForm,
  setPag,
  myPlan,
  setMyPlan,
  pessoas,
  setPessoas,
  jogaOnline,
  setJogaOnline,
  usaTrabalho,
  setUsaTrabalho,
  dispositivos,
  setDispositivos,
  streaming,
  setStreaming,
  estudar,
  setEstudar,
}) {
  return (
    <Modal size="3xl" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent
        as={motion.div}
        layout
        mx={5}
        borderTopRadius={10}
      >
        <ModalHeader
          className="modalHeader"
          color="white"
          borderTopRadius="5px"
          bg="var(--acessibilidade)"
          fontSize="1.5rem"
          fontWeight="700"
        >
          {pag === 2
            ? "Vamos escolher o plano ideial para você"
            : pag === 3
            ? "Pronto! Este é seu plano ideial "
            : pag === 4
            ? "Parabéns! Agora falta pouco."
            : pag === 5
            ? "Endereço da instalação"
            : pag === 6
            ? "Revise as informações"
            : pag === 7
            ? "Informações enviadas"
            : "Vamos escolher o plano ideial para você"}
          <div
            className={
              pag === 2
                ? "pag2"
                : pag === 3
                ? "pag3"
                : pag === 5
                ? "pag2"
                : pag === 6
                ? "pag3"
                : pag === 7
                ? "pag3"
                : "pag1"
            }
          >
            <div>{progress}</div>
          </div>
        </ModalHeader>
        <ModalCloseButton
          mt="-25px"
          _hover={{ color: "#51a84e" }}
          color="var(--azul)"
          bg="white"
        />
        <Pages
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
          setPag={setPag}
          myPlan={myPlan}
          setMyPlan={setMyPlan}
          city={city}
          setCity={setCity}
          pag={pag}
        />
        <ModalFooter>
          {pag > 1 && pag !== 3 && pag !== 4 && (
            <Button color="#BFBFBF" variant="ghost" mr="10px" onClick={prevPag}>
              Anterior
            </Button>
          )}
          {(pag === 1) | (pag === 2) ? (
            <Button
              className="avancar"
              rightIcon={<FiArrowRight size="18" />}
              fontWeight={800}
              w="242px"
              h="54px"
              _hover={{ bg: "#51a84e" }}
              color="white"
              bg="var(--acessibilidade)"
              onClick={proxPag}
            >
              Avançar
            </Button>
          ) : null}

          {pag > 6 && (
            <div>
              <Button
                m="5px"
                rightIcon={<FiCheck />}
                fontWeight={800}
                w="150px"
                h="54px"
                _hover={{ bg: "#51a84e" }}
                color="white"
                bg="blackAlpha.500"
                onClick={onClose}
              >
                Finalizar
              </Button>
            </div>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
