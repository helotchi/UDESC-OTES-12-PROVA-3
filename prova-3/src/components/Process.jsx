import PropTypes from 'prop-types';
import React from 'react';

class Process extends React.Component {
  render() {
    const {
      nameProject,
      manage1,
      manage2,
      manage3,
      engine1,
      engine2,
      engine3,
    onDeleteButtonClick,
    } = this.props;

    return (    
      <table>
        <tr>
        </tr>

        <tr>
          <td><p>Projeto { nameProject }</p></td>
        </tr>

        <tr>
          <td><p>O processo produz os resultados definidos</p></td>
          <td><p>Evidência</p></td>
        </tr>

        <tr>
          <td>Gerência de Projetos</td>
          <td>{ manage1 }</td>
        </tr>

        <tr>
          <td>Engenharia de Requisitos</td>
          <td>{ engine1 }</td>
        </tr>
        <tr>
          <td><p>A execução do processo é planejada e monitorada</p></td>
        </tr>

        <tr>
          <td>Gerência de Projetos</td>
          <td>{ manage2 }</td>
        </tr>
        <tr>
          <td>Engenharia de Requisitos</td>
          <td>{ engine2 }</td>
        </tr>

        <tr>
          <td><p>As pessoas estão preparadas para executar suas responsabilidades no processo</p></td>
        </tr>

        <tr>
          <td>Gerência de Projetos</td>
          <td>{ manage3 }</td>
        </tr>
        <tr>
          <td>Engenharia de Requisitos</td>
          <td>{ engine3 }</td>
        </tr>

        <tr>
          <td>
            <button
              type="submit"
              data-testid="delete-button"
              onClick={ () => onDeleteButtonClick(nameProject) }
            >
              Excluir
            </button>
          </td>
        </tr>
      </table>
    );
  }
}
  
Process.propTypes = {
  nameProject: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  smi: PropTypes.number.isRequired,
  integridade: PropTypes.number.isRequired,
  dre: PropTypes.number.isRequired,
  risco: PropTypes.number.isRequired,
  onDeleteButtonClick: PropTypes.func,
};

Process.defaultProps = {
onDeleteButtonClick: () => {},
};

export default Process;