import './App.css';
import React from 'react';
import Form from './components/Form';
import { getDates, addDates, deleteDate } from './services/storage.js'
import Metric from './components/Metric';
import Process from './components/Process';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      nameProject: '',
      manage1: '1',
      manage2: '1',
      manage3: '1',
      engine1: '1',
      engine2: '1',
      engine3: '1',
      varn1: '',
      varn2: '',
      varN2: '',
      varMt: '',
      varFc: '',
      varFa: '',
      varFe: '',
      varA: '',
      varS: '',
      varE: '',
      varD: '',
      varP: '',
      varC: '',
      metrics: [...getDates('metrics')],
      process: [...getDates('process')],
      isCalcButtonDisabled: false,
      isSaveButtonDisabled: true,
    };
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }, this.handleSaveButtonDisable);
  }

  handleSaveButtonDisable = () => {
    const {
      nameProject,
      manage1,
      manage2,
      manage3,
      engine1,
      engine2,
      engine3,
    } = this.state;
    let verifyDisable = false;

    if (!(nameProject && manage1 && manage2 && manage2 && manage3 && engine1 && engine2 && engine3)) {
      verifyDisable = true;
    }

    // Muda estado do disable button
    this.setState({ isSaveButtonDisabled: verifyDisable});
  }

  // handleCalcButtonDisable = () => {
  //   const {
  //     nameProject,
  //     varn1,
  //     varn2,
  //     varN2,
  //     varMt,
  //     varFc,
  //     varFa,
  //     varFe,
  //     varA,
  //     varS,
  //     varE,
  //     varD,
  //     varP,
  //     varC,
  //   } = this.state; // Estados a serem verificados
  //   const arrayVar = [
  //     varn1,
  //     varn2,
  //     varN2,
  //     varMt,
  //     varFc,
  //     varFa,
  //     varFe,
  //     varA,
  //     varS,
  //     varE,
  //     varD,
  //     varP,
  //     varC,
  //   ]; // Array das variáveis
  //   let verifyDisable = false;

  //   // Verifica se as variáveis são menores que 0 e maiores que 1 e retorna true para o disable
  //   verifyDisable = (arrayVar.some((v) => v <= 0));

  //   if (!nameProject) {
  //     verifyDisable = true;
  //   }

  //   // Muda estado do disable button
  //   this.setState({ isCalcButtonDisabled: verifyDisable});
  // }

  handleCalcButtonClick = () => {
    const {
      nameProject,
      varn1,
      varn2,
      varN2,
      varMt,
      varFc,
      varFa,
      varFe,
      varA,
      varS,
      varE,
      varD,
      varP,
      varC,
      metrics,
    } = this.state; // Estados a serem verificados

    const volume = ((2 / varn1) * (varn2 / varN2));
    console.log('Volume: ',varn1,varn2,varN2,volume);

    const smi = ((varMt - (varFc + varFa + varFe)) / varMt);
    console.log('SMI: ',varMt,varFc,varFa,varFe,smi);

    const integridade = (1 - (varA * (1 - varS)));
    console.log('Integridade: ',varA,varS,integridade);

    const dre = (varE / (varE + varD));
    console.log('DRE: ',varE,varD,dre);

    const risco = (varP * varC);
    console.log('Risco: ',varP,varC,risco);

    const objectMetrics = {
      nameProject,
      volume,
      smi,
      integridade,
      dre,
      risco
    }

    addDates('metrics', objectMetrics);

    this.setState({
      metrics: [...metrics, objectMetrics],
      nameProject: '',
      varn1: '',
      varn2: '',
      varN2: '',
      varMt: '',
      varFc: '',
      varFa: '',
      varFe: '',
      varA: '',
      varS: '',
      varE: '',
      varD: '',
      varP: '',
      varC: '',
      isCalcButtonDisabled: false,
    });
  }

  handleSaveButtonClick = () => {
    const {
      nameProject,
      manage1,
      manage2,
      manage3,
      engine1,
      engine2,
      engine3,
      process,
    } = this.state; // Estados a serem verificados

    const objectProcess = {
      nameProject,
      manage1,
      manage2,
      manage3,
      engine1,
      engine2,
      engine3,
    }

    addDates('process', objectProcess);

    this.setState({
      process: [...process, objectProcess],
      nameProject: '',
      manage1: '1',
      manage2: '1',
      manage3: '1',
      engine1: '1',
      engine2: '1',
      engine3: '1',
      isSaveButtonDisabled: true,
    });
  }
  
  handleMetricDeleteButtonClick = (nameProject) => {
    const { metrics } = this.state;
    const newMetrics = metrics.filter((metric) => metric.nameProject !== nameProject);
    
    deleteDate('metrics', newMetrics);
    this.setState({ metrics: [...newMetrics]})
  }

  handleProcesDeleteButtonClick = (nameProject) => {
    const { process } = this.state;
    const newProcess = process.filter((proces) => proces.nameProject !== nameProject);
    
    deleteDate('process', newProcess);
    this.setState({ process: [...newProcess]})
  }

  generateMetrics = () => {
    const { metrics } = this.state;

    let generateResult = '';
    // console.log(arrayProjects);

    if (metrics.length !== 0){
      generateResult = metrics.map((metric) => {
        return (
          <li key= { metric.nameProject }>
            <Metric 
              { ...metric }
              onDeleteButtonClick = { this.handleMetricDeleteButtonClick }
            />
          </li>
        );
      })
    }
    return generateResult;
  }

  generateProcess = () => {
    const { process } = this.state;
    let generateResult = '';

    if (process.length !== 0){
      generateResult = process.map((proces) => {
        return (
          <li key= { proces.nameProject }>
            <Process 
              { ...proces }
              onDeleteButtonClick = { this.handleProcesDeleteButtonClick }
            />
          </li>
        );
      })
    }
    return generateResult;
  }

  render () {
    return (
      <div className="App">
        <div className="left">
          <h1>Prova 3</h1>
          <Form 
            { ...this.state } 
            onInputChange={ this.handleInputChange }
            onCalcButtonClick={ this.handleCalcButtonClick }
            onSaveButtonClick={ this.handleSaveButtonClick }
          />
        </div>
        <div className="right">
          <div>
            { this.generateProcess() }
          </div>
          <ul>
            { this.generateMetrics() }
          </ul>
        </div>
      </div>
    );
  } 
}

export default App;
