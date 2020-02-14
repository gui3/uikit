
// add link to your CSS Below, following the same syntax -----------------------
const UI_KITS = [
  {
    name: 'bare',
    longName: 'Bare (no css)', // optionnal
    description: 'no CSS at all',
    css: [
    ]
  },
  {
    name: 'oldproof',
    longName: 'Oldproof (old browsers)', // optionnal
    description: 'using only OOOLD technologies like float for layout',
    css: [
      './Kits/oldproof/layout.css',
      './Kits/oldproof/ui.css'
    ]
  }
  // add your CSS links here
]

function changeUi (elemId) {
  if (elemId === 'cssDropdown') {
    const e = document.getElementById('cssDropdown')
    const uiName = e.options[e.selectedIndex].value

    const ui = UI_KITS.filter(x => x.name === uiName)[0]

    setUikitCss(ui.css)
    document.querySelectorAll('.uiName').forEach(elem => {
      elem.innerHTML = ui.name
    })
    document.querySelectorAll('.uiDescription').forEach(elem => {
      elem.innerHTML = ui.description
    })
  }
}

function setUikitCss (cssList) {
  document.querySelectorAll('link').forEach(tag => {
    tag.parentNode.removeChild(tag)
  })
  const head = document.querySelector('head')
  cssList.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = src
    head.appendChild(link)
  })
}

window.onload = function () {
  const select = document.getElementById('cssDropdown')

  UI_KITS.forEach(kit => {
    // add to the cssDropdown
    const option = document.createElement('option')
    option.value = kit.name
    option.appendChild(
      document.createTextNode(kit.longName || kit.name)
    )
    select.appendChild(option)

  })

  console.log('CSS loaded, ready to go!')
}
