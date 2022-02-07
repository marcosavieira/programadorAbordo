import { HelloWorld, List } from "./components";
import pessoas from "./mock/pessoas";
import { idadeMaiorMenor } from './modules/utils'

const { maiorIdade, menorIdade} = idadeMaiorMenor(pessoas);

const renderHtml = `${HelloWorld('Programador Devmarcosav')}
  
  <h3>Maiores</h3>
  ${List(maiorIdade)}
  <h3>Menores</h3>
  ${List(menorIdade)}
`
document.querySelector('#app').innerHTML = renderHtml;


