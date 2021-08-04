import { useEffect, useState } from "react";
import "./App.css"

function App() {
  let [valueBuy, setValueBuy] = useState("")
  let [percent, setPercent] = useState("")
  let [result, setResult] = useState(0.0)

  useEffect(() => {
    console.log(result)
  }, [result])

  const calculate = () => {

    if (!isNaN(valueBuy)
      && !isNaN(percent)) {

      valueBuy = parseFloat(valueBuy)
      percent = parseFloat(percent) / 100

      let formula = valueBuy * (1.0 + percent)
      setResult(formula.toFixed(2))

    } else {
      alert("Digite um número")
    }

  }

  return (
    <div className="App">
      <section>
        <form>
          <div id="title">
            <h1>Calculo Gorjeta</h1>
          </div>
          <div>
            <input type="text" onChange={(e) => setValueBuy(e.target.value)} />
          </div>
          <div>
            <input type="text" onChange={(e) => setPercent(e.target.value)} />
          </div>
          <div>
            <button type="button" onClick={calculate}>Calcular</button>
          </div>
          <div>
            <div>
              <div>

                <strong>Sub-total:</strong> {`${valueBuy !== "" ? `R$ ${parseFloat(valueBuy)
                  .toFixed(2)
                  .replace(".", ",")}` : ""}`}
                  
              </div>
              <div>

                <strong>Gorjeta:</strong> {
                  valueBuy !== "" ? `R$ ${(parseFloat(valueBuy) * (parseFloat(percent) / 100))
                    .toFixed(2)
                    .replace('.', ',')
                    }` : ""}

              </div>
              <div>

                <strong>Total:</strong> {`${valueBuy !== "" ? `R$ 
                  ${parseFloat(result)
                    .toFixed(2)
                    .replace(".", ",")}` : ""}`}

              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
