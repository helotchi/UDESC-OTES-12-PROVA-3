import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    const {
      nameProject,
      manage1,
      manage2,
      manage3,
      engine1,
      engine2,
      engine3,
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
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
      isCalcButtonDisabled,
      onCalcButtonClick,
    } = this.props;

    return (
      <div>
        <form id="form">
          <Input
            inputHtmlFor="nameProject"
            inputLabel="Nome do Projeto"
            inputName="nameProject"
            inputType="text"
            inputId="name-input"
            inputValue={ nameProject }
            inputOnChange={ onInputChange }
            inputPlaceholder="Nome"
          />
          
          <div className='border'>
            <h2>Capacidade de Processos</h2>
            <div>
              <p>O processo produz os resultados definidos</p>

              <label htmlFor="manage1">
                Gerência de Projetos
                <select className='numb'
                  id="manage1"
                  data-testid="manage1-input"
                  name="manage1"
                  value={ manage1 }
                  onChange={ onInputChange }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>

              <label htmlFor="engine1">
                Engenharia de Requisitos
                <select className='numb'
                  id="engine1"
                  data-testid="engine1-input"
                  name="engine1"
                  value={ engine1 }
                  onChange={ onInputChange }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>

            <div>
              <p>A execução do processo é planejada e monitorada</p>

              <label htmlFor="manage2">
                Gerência de Projetos
                <select className='numb'
                  id="manage2"
                  data-testid="manage2-input"
                  name="manage2"
                  value={ manage2 }
                  onChange={ onInputChange }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>

              <label htmlFor="engine2">
                Engenharia de Requisitos
                <select className='numb'
                  id="engine2"
                  data-testid="engine2-input"
                  name="engine2"
                  value={ engine2 }
                  onChange={ onInputChange }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>

            <div>
              <p>As pessoas estão preparadas para executar suas responsabilidades no processo</p>

              <label htmlFor="manage3">
                Gerência de Projetos
                <select className='numb'
                  id="manage3"
                  data-testid="manage3-input"
                  name="manage3"
                  value={ manage3 }
                  onChange={ onInputChange }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>

              <label htmlFor="engine3">
                Engenharia de Requisitos
                <select className='numb'
                  id="engine3"
                  data-testid="engine3-input"
                  name="engine3"
                  value={ engine3 }
                  onChange={ onInputChange }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
            </div>

            <div>
                <button
                type="submit"
                data-testid="save-button"
                disabled={ isSaveButtonDisabled }
                onClick={ onSaveButtonClick }
                >
                Salvar
                </button>
            </div>
          </div>

          <div className='border'>
            <h2>Métricas</h2>
            <div>
              <p>Volume Mínimo do Algoritmo
                {/* <span data-tooltip="Proin gravida fringilla venenatis">
                  ?
                </span> */}
              </p>
              
              <Input
                inputHtmlFor="varn1"
                inputLabel="n¹"
                inputName="varn1"
                inputType="number"
                inputId="varn1-input"
                inputValue={ varn1 }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0"
              />

              <Input
                inputHtmlFor="varn2"
                inputLabel="n²"
                inputName="varn2"
                inputType="number"
                inputId="varn2-input"
                inputValue={ varn2 }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0"
              />

                <Input
                inputHtmlFor="varN2"
                inputLabel="N²"
                inputName="varN2"
                inputType="number"
                inputId="varN2-input"
                inputValue={ varN2 }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0"
                />
            </div>

            <div>
                <p>SMI - Índice de Maturidade de Software</p>
                <Input
                inputHtmlFor="varMt"
                inputLabel="Mₜ"
                inputName="varMt"
                inputType="number"
                inputId="varMt-input"
                inputValue={ varMt }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0"
                />

                <Input
                inputHtmlFor="varFc"
                inputLabel="F²"
                inputName="varFc"
                inputType="number"
                inputId="varFc-input"
                inputValue={ varFc }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0"
                />

                <Input
                inputHtmlFor="varFa"
                inputLabel="Fa"
                inputName="varFa"
                inputType="number"
                inputId="varFa-input"
                inputValue={ varFa }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0"
                />

                <Input
                inputHtmlFor="varFe"
                inputLabel="Fe"
                inputName="varFe"
                inputType="number"
                inputId="varFe-input"
                inputValue={ varFe }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0"
                />
            </div>

            <div>
                <p>Integridade</p> 
                <Input
                inputHtmlFor="varA"
                inputLabel="A"
                inputName="varA"
                inputType="number"
                inputId="varA-input"
                inputValue={ varA }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0.00"
                inputStep=".01"
                />

                <Input
                inputHtmlFor="varS"
                inputLabel="S"
                inputName="varS"
                inputType="number"
                inputId="varS-input"
                inputValue={ varS }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0.00"
                inputStep=".01"
                />
            </div>

            <div>
                <p>DRE - Eficiência da Remoção de Defeitos para um Projeto </p> 
                <Input
                inputHtmlFor="varE"
                inputLabel="E"
                inputName="varE"
                inputType="number"
                inputId="varE-input"
                inputValue={ varE }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0"
                />

                <Input
                inputHtmlFor="varD"
                inputLabel="D"
                inputName="varD"
                inputType="number"
                inputId="varD-input"
                inputValue={ varD }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0"
                />
            </div>

            <div>
                <p>Exposição Geral ao Risco </p> 
                <Input
                inputHtmlFor="varP"
                inputLabel="P"
                inputName="varP"
                inputType="number"
                inputId="varP-input"
                inputValue={ varP }
                inputOnChange={ onInputChange }
                inputClass='numb'
                inputPlaceholder="0.00"
                inputStep=".01"
                />

                <Input
                inputHtmlFor="varC"
                inputLabel="C"
                inputName="varC"
                inputType="number"
                inputId="varC-input"
                inputValue={ varC }
                inputOnChange={ onInputChange }
                inputPlaceholder="R$1000.00"
                inputStep=".01"
                />
            </div>

            <div>
                <button
                type="submit"
                data-testid="save-button"
                disabled={ isCalcButtonDisabled }
                onClick={ onCalcButtonClick }
                >
                Calcular
                </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  nameProject: PropTypes.string.isRequired,
  varn1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  varn2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  varN2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isCalcButtonDisabled: PropTypes.bool.isRequired,
  onCalcButtonClick: PropTypes.func.isRequired,
};

export default Form;
