
import { DadosContrato, Adicionais, Resultados } from '@/types/calculadora';
import { realizarCalculos } from '@/utils/calculadora/calculosUtils';
import { 
  validarDadosContrato, 
  notificarCalculoRealizado, 
  notificarErroCalculo, 
  expandirAcordeoes 
} from '@/utils/calculadora/validacaoUtils';

export const useCalculos = (
  dadosContrato: DadosContrato,
  adicionais: Adicionais,
  setResultados: React.Dispatch<React.SetStateAction<Resultados>>
) => {
  // Função para calcular os resultados
  const calcularResultados = () => {
    // Validação dos dados do contrato
    if (!validarDadosContrato(dadosContrato)) {
      return;
    }

    try {
      // Realizar cálculos usando a função utilitária
      const resultadosCalculados = realizarCalculos(dadosContrato, adicionais);
      
      // Atualiza o estado com os resultados calculados
      setResultados(resultadosCalculados);

      // Notifica o usuário e expande os acordeões
      notificarCalculoRealizado();
      expandirAcordeoes();
      
      console.log("Cálculos realizados:", resultadosCalculados);
    } catch (error) {
      notificarErroCalculo(error);
    }
  };

  return { calcularResultados };
};
