import PropTypes from 'prop-types';
import React from 'react';

class Metric extends React.Component {
  render() {
    const {
    nameProject,
    volume,
    smi,
    integridade,
    dre,
    risco,
    onDeleteButtonClick,
    onAlterButtonClick,
    } = this.props;

    return (
      <div className="metrics">
        <h3 data-testid="name-project">{ nameProject }</h3>
        <p>
          Volume mínimo do algoritmo:
          <span data-testid="metrica1-project">{ volume.toFixed(2) }</span>
        </p>
        <p>
          SMI:
          <span data-testid="metrica2-project">{ smi.toFixed(2) }</span>
        </p>
        <p>
          Integridade:
          <span data-testid="metrica3-project">{ integridade.toFixed(2) }</span>
        </p>
        <p>
          DRE para um projeto:
          <span data-testid="metrica4-project">{ dre.toFixed(2) }</span>
        </p>
        <p>
          Exposição geral ao risco:
          <span data-testid="metrica5-project">{ risco.toFixed(2) }</span>
        </p>

        <button
          type="submit"
          data-testid="delete-button"
          onClick={ () => onDeleteButtonClick(nameProject) }
        >
          Excluir
        </button>

        <button
          type="submit"
          data-testid="alter-button"
          onClick={ () => onAlterButtonClick(nameProject) }
        >
          Alterar
        </button>
      </div>
    );
  }
}
  
Metric.propTypes = {
  nameProject: PropTypes.string.isRequired,
  volume: PropTypes.number.isRequired,
  smi: PropTypes.number.isRequired,
  integridade: PropTypes.number.isRequired,
  dre: PropTypes.number.isRequired,
  risco: PropTypes.number.isRequired,
  onDeleteButtonClick: PropTypes.func,
  onAlterButtonClick: PropTypes.func,
};

Metric.defaultProps = {
  onDeleteButtonClick: () => {},
  onAlterButtonClick: () => {},
};

export default Metric;
  