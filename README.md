This plugin generates a set of css classes to add fixed margins to container children, except last one, to spread content in a consistent manner.

This can be useful when you want to spread items in the container with a set interval but don't want to add margins to every child manually and remove it from last child to make separation look proper.

## Install
yarn
```bash
yarn add tailwindcss-spaced-items
```
npm
```bash
npm i tailwindcss-spaced-items
```

## API

#### `spacedItems({ values, children = ['*']} = {})`

- _`values`_: [optional] an object with values to generate classes, defaults to configs 'margin' object values. If config does not contain margin values you have to pass your own values for classes to be generated.
- _`children`_: [optional] array of selectors of which child tags should be affected, defaults to `['*']`

## Usage
In tailwind config
```javascript
const spacedItems = require('tailwindcss-spaced-items')
module.exports = {
  plugins: [
    spacedItems(),
  ],
}
```
This will produce css like this for each value in configs `margin` object:
```css
.space-x-1 > * { margin-left: .25rem; }
.space-y-1 > * { margin-top: .25rem; }
.space-xy-1 > * { margin-top: .25rem;
                   margin-left: .25rem; }

/* ... */

```
To override values:
```javascript
const spacedItems = require('tailwindcss-spaced-items')
module.exports = {
  plugins: [
    spacedItems({
      values: {
        '1': '1px',
        '5': '5px',
        '10': '10px',
        '20': '20px',
      },
    }),
  ],
}
```
This will produce:
```css
.space-x-1 > * + * { margin-left: 1px; }

/* ... */

