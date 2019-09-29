const generateBreakdownButton = document.getElementById('generateBreakdownButton')

const noteStatus = {
    "on": "(0.6 0.5).16 ",
    "off": "r.16 "
}

const min = 0
const max = 3

const tabContainer = document.getElementById('tabContainer')

function setTabContainer() {
    tabContainer.innerHTML = `
        <div id="alphaTab" data-tex="true">
                
        </div>
    `
}

function renderTabHTML(notesToRender) {
    
    console.log("renderTabHTML function running")
    
    let alphaTabRenderContainer = document.getElementById('alphaTab')

    alphaTabRenderContainer.innerHTML = `
        .
        ${notesToRender}
    `
}

generateBreakdownButton.addEventListener('click', function () { 

    console.log("button pressed")
    let breakdownHolder = ""
    let incrementor = 0

    while (incrementor < 16) {
        var random = Math.floor(Math.random() * (+max - +min)) + +min
        console.log(random)
        if (random > 0) {
            breakdownHolder = breakdownHolder + noteStatus.on
        } else {
            breakdownHolder = breakdownHolder + noteStatus.off
        }

        incrementor++
    }
    
    console.log(breakdownHolder)

    setTabContainer()

    renderTabHTML(breakdownHolder)

    $('#alphaTab').alphaTab()
})

