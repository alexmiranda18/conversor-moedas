const buttom = document.getElementById(`section-button`)
const select = document.getElementById(`currency-select`)
const dolar = 5.35
const euro = 5.42
const bitcoin = 112721

const convertValues = () => {
    const inputreal = document.getElementById(`input-real`).value
    const realTValueText = document.getElementById(`real-value-text`)
    const dolarValueText = document.getElementById(`dolar-value-text`)
    const inputDolar = inputreal / dolar
    const inputEuro = inputreal / euro
    const inputBitcoin = inputreal / bitcoin
    realTValueText.innerHTML = new Intl.NumberFormat(`pt-BR`, {
        style: `currency`,
        currency: `BRL`,
    }).format(inputreal)

    if (select.value === `US$ Dólar americano`) {

        dolarValueText.innerHTML = new Intl.NumberFormat(`en-US`, {
            style: `currency`,
            currency: `USD`,
        }).format(inputDolar)
    }

    if (select.value === `€ Euro`) {

        dolarValueText.innerHTML = new Intl.NumberFormat(`de-DE`, {
            style: `currency`,
            currency: `EUR`,
        }).format(inputEuro)
    }
    if (select.value === `Bitcoin`) {
        dolarValueText.innerHTML = new Intl.NumberFormat(`de-DE`, {
            style: `currency`,
            currency: `BTC`,
        }).format(inputBitcoin)
    }

}

currencyChange = () => {
    const currencyName = document.getElementById(`currency-name`)
    const currencyImg = document.getElementById(`currency-img`)

    if (select.value === `US$ Dólar americano`) {
        currencyName.innerHTML = `Dólar americano`
        currencyImg.src = `./assets/estados-unidos (1) 1.png`
    }
    if (select.value === `€ Euro`) {
        currencyName.innerHTML = `Euro`
        currencyImg.src = `./assets/euro.png`
    }
    if (select.value === `Bitcoin`) {
        currencyName.innerHTML = `Bitcoin`
        currencyImg.src = `./assets/bitcoin.png`
    }
    convertValues()
}
buttom.addEventListener('click', convertValues)
select.addEventListener('change', currencyChange)