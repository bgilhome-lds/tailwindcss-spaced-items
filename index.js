module.exports = function spacedItems({ values } = {}) {
  return function tailwindSpacedItems({ addUtilities, addUtilitiesaddComponents, e, prefix, config }) {
    let css = {}
    if (!values) {
      values = Object.assign({}, config('margin'))
      delete values['auto']
    }

    const getSelector = (variant, name) => `.space-${variant}-${name} > * + *`

    Object.keys(values).forEach(name => {
      let str = name
      let val = values[name]

      css[getSelector('x', str      )] = {'margin-left': `${val}`}

      css[getSelector('y', str      )] = {'margin-top': `${val}`}

      css[getSelector('xy', str      )] = {
        'margin-left': `${val}`,
        'margin-top': `${val}`,
      }

    })

    addUtilities(css, { variants: ['responsive'] })
  }
}
