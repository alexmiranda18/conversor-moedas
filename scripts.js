const buttom = document.getElementById(`section-button`)
const select = document.getElementById(`currency-select`)


const convertValues = async () => {
    const inputreal = document.getElementById(`input-real`).value
    const realTValueText = document.getElementById(`real-value-text`)
    const dolarValueText = document.getElementById(`dolar-value-text`)

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(responde => responde.json())
    const dolar = data.USDBRL.ask
    const euro = data.EURBRL.ask
    const bitcoin = data.BTCBRL.ask

    realTValueText.innerHTML = new Intl.NumberFormat(`pt-BR`, {
        style: `currency`,
        currency: `BRL`,
    }).format(inputreal)

    if (select.value === `US$ Dólar americano`) {

        dolarValueText.innerHTML = new Intl.NumberFormat(`en-US`, {
            style: `currency`,
            currency: `USD`,
        }).format(inputreal / dolar)
    }

    if (select.value === `€ Euro`) {

        dolarValueText.innerHTML = new Intl.NumberFormat(`de-DE`, {
            style: `currency`,
            currency: `EUR`,
        }).format(inputreal / euro)
    }
    if (select.value === `Bitcoin`) {
        dolarValueText.innerHTML = new Intl.NumberFormat(`de-DE`, {
            style: `currency`,
            currency: `BTC`,
            minimumFractionDigits: 8
        })
            .format(inputreal / (bitcoin * 1000))
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