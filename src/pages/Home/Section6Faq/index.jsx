import { Section6Container, Section6Content } from "./styles";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default function Section6() {
  return (
    <Section6Container id="faq">
      <Section6Content>
        <h1>Possui alguma dúvida?</h1>
        <h1>Veja nosso FAQ.</h1>
        <div className="faq">
          <Accordion allowMultiple w="100%">
            <AccordionItem bg="white" mb="1rem" borderRadius={5}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    O que é e como funciona a Fibra Óptica?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="var(--azul)">
                A fibra ótica é uma estrutura de vidro cilíndrica, transparente,
                flexível e com dimensões microscópicas, parecidas com um fio de
                cabelo. É uma forma de transmissão que permite o tráfego de
                dados com velocidades próximas à velocidade da luz. O sinal da
                fibra óptica é transmitido por meio de reflexões de raios laser
                ao longo de todo o cabo, atingindo uma capacidade de transmissão
                única.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem bg="white" mb="1rem" borderRadius={5}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Como funciona o Wi-Fi e instalação grátis?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="var(--azul)">
                Ao adquirir qualquer um dos planos de internet, o serviço é
                instalado na residência do cliente sem a cobrança da taxa de
                instalação. Para cada plano de internet fibra a empresa fornece
                um roteador (Wi-Fi) em comodato para que você possa conectar
                seus dispositivos (computador, celular, notebook, tablet) à
                internet, sem a utilização de fios. O modelo do roteador varia
                conforme o plano contratado.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem bg="white" mb="1rem" borderRadius={5}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    O que significa download/upload iguais?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="var(--azul)">
                A banda simétrica é o que torna o download/upload iguais e
                possibilita ao cliente fazer download e upload na mesma
                velocidade contratada.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem bg="white" mb="1rem" borderRadius={5}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    O que é Qualifica e como tenho direito?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="var(--azul)">
                O Qualifica é uma plataforma de Qualificação Profissional com
                centenas de cursos on-line, com MBA, e Carteirinha de estudante.
                Todos os cursos possuem certificados, e podem ser usados como
                horas complementares na faculdade. O aplicativo está disponível
                apenas para os clientes assinantes dos planos 100 mega, 200 mega
                e 300 mega. Para ter acesso ao aplicativo, os clientes devem
                fazer o download das plataformas pelo smartphone (Android ou
                iOS), tablet ou computadores e realizar o login com os dados
                cadastrais fornecidos pela Nossa Net.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultiple w="100%">
            <AccordionItem bg="white" mb="1rem" borderRadius={5}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Por que em algumas cidades não possui Fibra Óptica
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="var(--azul)">
                Para levar a cobertura de internet por fibra óptica, a Nossa Net
                realiza um estudo de viabilidade para a implantação da rede de
                fibra na cidade ou bairro a ser atendido. Se a estrutura da
                região for viável para realizar a instalação da rede por fibra
                óptica, mediante a demanda, a Nossa Net realiza a implantação.
                Ou seja, quanto maior a demanda, maior é a possibilidade de ter
                cobertura fibra óptica da Nossa Net no seu bairro ou na sua
                cidade.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem bg="white" mb="1rem" borderRadius={5}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Como posso pagar minha internet?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="var(--azul)">
                A sua fatura de internet pode ser paga em qualquer banco,
                lotérica e internet banking. Para ter acesso a suas faturas
                acesse o aplicativo da Nossa Net no seu smartphone ou tablet e
                clique na opção “faturas“, nesta tela, irão aparecer na sua tela
                o seu histórico de faturas, que já foram pagas ou que estão com
                pagamento pendente. Para pagar, uma fatura em aberto clique no
                botão “Copiar Código de Barras” e realize o pagamento pelo
                aplicativo de seu banco.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem bg="white" mb="1rem" borderRadius={5}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Onde posso tirar a 2º via da minha fatura?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="var(--azul)">
                Você pode tirar a segunda via de sua fatura pelo nosso site em
                “2ª via do boleto” e “Minha conta” ou pela nossa Central do
                Cliente (http://central.nossanettelecom.net.br). Para entrar
                basta informar em “Login” o CPF do titular, a senha será o CPF
                completo ou os cinco primeiros números (sem pontos). Você também
                pode tirar a segunda via por meio do aplicativo Nossa Net
                informando o CPF do titular como “Login”, e a senha será o CPF
                completo ou os cinco primeiros números (sem pontos)
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem bg="white" mb="1rem" borderRadius={5}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Minha internet está lenta ou não funcionando oque devo
                    fazer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="var(--azul)">
                Desligue os equipamentos (roteadores e modem) da tomada por
                aproximadamente um minuto. Após religar, faça um teste de
                velocidade pelo site speedtest.net, utilizando preferencialmente
                um computador conectado por cabo ao roteador. Caso não possua um
                computador, não tem problema, basta ficar perto do roteador e
                realizar o teste pelo aplicativo “speedtest” através de seu
                celular, tablet ou notebook. Atenção: Antes de realizar o teste
                de conexão, desconecte todos os outros aparelhos da internet, é
                importante que nenhum outro equipamento esteja conectado à sua
                rede Wi-Fi. Em caso de dúvida ou caso persista o problema de
                desconexão ou lentidão, entre em contato com nosso suporte
                técnico.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </Section6Content>
    </Section6Container>
  );
}
