import { useState, useEffect } from 'react';

function App() {

  const [inputHeight, setInputHeight] = useState('');
  const [inputWeight, setInputWeight] = useState('');

  const [imcValue, setImcValue] = useState('');
  const [imcClass, setImcClass] = useState('');

  // monitora a mudança do estado imcClass. Dessa forma, você garante que o alert seja chamado após o estado imcClass ser atualizado
  /*useEffect(() => {
    if (imcClass !== '') {
      alert(imcClass);
    }
  }, [imcClass]);*/

  function calculateIMC()
  {
    if(inputHeight === '' || inputWeight === '')
    {
      alert("Preencha os dados!");
      return;
    }

    try
    {
      let imc = inputWeight / ((inputHeight/100) * (inputHeight/100));
  
      if (imc < 17)
      {
        setImcClass("Classificação: Muito abaixo do peso");
      }
      else if (imc >= 17 && imc <= 18.4)
      {
        setImcClass("Classificação: Abaixo do peso");
      }
      else if (imc >= 18.5 && imc <= 24.9)
      {
        setImcClass("Classificação: Peso normal");
      }
      else if (imc >= 25 && imc <= 29.9)
      {
        setImcClass("Classificação: Acima do peso");
      }
      else if(imc >= 30 && imc <= 34.9)
      {
        setImcClass("Classificação: Obesidade grau I");
      }
      else if(imc >= 35 && imc <= 40)
      {
        setImcClass("Classificação: Obesidade grau II");
      }
      else
      {
        setImcClass("Classificação: Obesidade grau III");
      }

      setImcValue("Resultado: " + imc.toFixed(1));

    }
    catch
    {
      alert("Algo deu errado");
    }

  }

  return (
    <div className="App">
      <div className="container">
        <h1> Calcular IMC</h1>

        <div className="main">
          <div className="container-weight">
            <label> Informe seu peso:  </label>
            <input type="number"
                  value={inputWeight}
                  onChange={(e) => setInputWeight(e.target.value)}/>
          </div>

          <div className="container-height">
            <label> Informe sua altura: </label>
            <input type="number"
                  value={inputHeight}
                  onChange={(e) => setInputHeight(e.target.value)}/>
          </div>

          <button onClick={calculateIMC}> Calcular </button>
        </div>

      <div className="container-result">
        <div className="container-info">
          <h2> {imcValue} </h2>
          <h2> {imcClass} </h2>
        </div>

        <div className="container-classes">
          <ul>
            <li> Menor que 17 - Muito abaixo do peso </li>
            <li> 17 a 18,4 - Abaixo do peso</li>
            <li> 18,5 a 24,9 - Peso normal</li>
            <li> 25 a 29,9 - Acima do peso</li>
            <li> 30 a 34,9 - Obesidade grau I</li>
            <li> 35 a 40 - Obesidade grau II</li>
            <li> Maior que 40 - Obesidade grau III</li>
          </ul>
        </div> 
      </div>
      
      </div>
    </div>
  );
}

export default App;
