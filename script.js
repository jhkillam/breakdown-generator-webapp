const generateBreakdownButton = document.getElementById('generateBreakdownButton')

const noteStatus = {
    "on": "(0.6 0.5).16 ",
    "off": "r.16 "
}

const tabContainer = document.getElementById('tabContainer')

function setTabContainer() {
    tabContainer.innerHTML = `
        <div id="alphaTabScriptInit" data-tex="true">
                
        </div>
    `
}

function renderTabHTML(notesToRender) {
    
    console.log("renderTabHTML function running")

    let alphaTabRenderContainer = document.getElementById('alphaTabScriptInit')
    const myBackslash = `\\`;
    alphaTabRenderContainer.innerHTML = `
        ${myBackslash}title "Breakdown"
        ${myBackslash}tuning e5 b4 g4 d4 a3 d3
        .
        ${notesToRender}
    `
}

generateBreakdownButton.addEventListener('click', function () { 

    console.log("button pressed")
    const min = 0
    const max = 4
    let breakdownHolder = ""
    let incrementor = 0

    while (incrementor < 16) {
        var random = Math.floor(Math.random() * (+max - +min)) + +min
        console.log(random)
        if (random > 1) {
            breakdownHolder = breakdownHolder + noteStatus.on
        } else {
            breakdownHolder = breakdownHolder + noteStatus.off
        }

        incrementor++
    }
    
    console.log(breakdownHolder)

    setTabContainer()

    renderTabHTML(breakdownHolder)

    $('#alphaTabScriptInit').alphaTab({
        staves: {
            id: 'tab',
            additionalSettings: {
                rhythm: true
            }
        }
      })
})

