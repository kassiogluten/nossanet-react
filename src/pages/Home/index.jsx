import { HomeContainer, HomeContent } from "./styles";
import { Button } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";


export default function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <h1>
          conexão para momentos <span>especiais</span>.
        </h1>
        <Button w={295} h={54} rightIcon={<FiArrowRight size={20}/>}>Contrate agora</Button>
        
      </HomeContent>
    </HomeContainer>
  );
}
