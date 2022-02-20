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
      onAlterButtonClick,
    } = this.props;

    return (    
      <table>
        <thead>
            <tr>
            <td><p>Projeto { nameProject }</p></td>
            </tr>
        </thead>

        <tbody>
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
        </tbody>

        <tfoot>
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
          <td>
            <button
              type="submit"
              data-testid="alter-button"
              onClick={ () => onAlterButtonClick(nameProject) }
            >
              Alterar
            </button>
          </td>
        </tr>
        </tfoot>
      </table>
    );
  }
}
  
Process.propTypes = {
  nameProject: PropTypes.string.isRequired,
  manage1: PropTypes.string.isRequired,
  manage2: PropTypes.string.isRequired,
  manage3: PropTypes.string.isRequired,
  engine1: PropTypes.string.isRequired,
  engine2: PropTypes.string.isRequired,
  engine3: PropTypes.string.isRequired,
  onDeleteButtonClick: PropTypes.func,
  onAlterButtonClick: PropTypes.func,
};

Process.defaultProps = {
  onDeleteButtonClick: () => {},
  onAlterButtonClick: () => {},
};

export default Process;