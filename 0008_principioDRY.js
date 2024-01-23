/*
DRY (Don´t repeat yourself), en español "No repetirse"
Siempre es mejor extraer el codigo duplicado a una clase o funcion
y utilizarlo donde nos haga falta.
*/

const reportData = {
    name: "Software Crafters",
    createdAt: new Date(),
    purcahses: 100,
    conversionRate: 10
}

function withoutDRY() {

    function showReport(reportData) {
        const reportFormatted = `
            Name: ${reportData.name}
            Created at: ${reportData.createdAt}
            Purchases: ${reportData.purcahses}
            ConversionRate: ${reportData.conversionRate}%`

        console.log("Showing report", reportFormatted)
    }

    function saveReport(reportData) {
        const reportFormatted = `
            Name: ${reportData.name}
            Created at: ${reportData.createdAt}
            Purchases: ${reportData.purcahses}
            ConversionRate: ${reportData.conversionRate}%`

        console.log("Saving report...", reportFormatted)
    }

    showReport(reportData)
    saveReport(reportData)
}

function withDRY() {
    function formatReport(reportData) {
        return `
        Name: ${reportData.name}
        Created at: ${reportData.createdAt}
        Purchases: ${reportData.purcahses}
        ConversionRate: ${reportData.conversionRate}%`
    }

    function showReport(reportData) {
        console.log("Showing report...", formatReport(reportData))
    }

    function saveReport(reportData) {
        console.log("Saving report...", formatReport(reportData))
    }

    showReport()
    saveReport()
}

withDRY()

