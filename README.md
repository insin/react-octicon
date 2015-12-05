## react-octicon

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A [React](https://facebook.github.io/react/) component which renders a [GitHub Octicons](https://octicons.github.com/) icon.

![All Octicons](octicons.gif)

### Demo

https://insin.github.io/react-octicon/

### Usage

**Note: [Webpack](http://webpack.github.io/) is _required_ in order to use this component.**

Install and use the Octicon component like so:

```
npm install --save react-octicon
```

```js
import React from 'react'
import {render} from 'react-dom'
import Octicon from 'react-octicon'

let App = () => <div>
  <Octicon mega spin name="sync"/>
</div>

render(<App/>, document.querySelector('#app'))
```

#### Usage with nwb

If you use [nwb](https://github.com/insin/nwb) to build and serve the React app you're using this component in, it will automatically configure Webpack to handle CSS, image and font dependencies for you.

#### Usage with Webpack

This component handles the Octicons CSS dependency for you, but you must use Webpack and configure it to handle CSS and associated font and image files.

For example, using the following webpack loaders:

```
npm install --save-dev css-loader file-loader style-loader url-loader
```

```js
 module: {
   loaders: [
     /* ...other loader config here... */
     {test: /\.css$/, loader: 'style!css'},
     {test: /\.(otf|eot|svg|ttf|woff|woff2).*$/, loader: 'url?limit=8192'}
   ]
 }
```

See the [webpack Stylesheets documentation](http://webpack.github.io/docs/stylesheets.html) for more info.

### Required props

Prop | Description
---- | -------------
`name` | The name of an icon in the Octicons set, e.g. `'trashcan'`

### Other props

Prop | Description
---- | -------------
`className` | An additional class name for the element rendered by the component
`mega` | If `true`, a double-size icon will be displayed
`spin` | If `true`, the icon will spin

Any additional props given, such as event handlers or `aria-*` attributes, will be passed to the element rendered by the component.

## MIT licensed

[build-badge]: https://img.shields.io/travis/insin/react-octicon/master.svg?style=flat-square
[build]: https://travis-ci.org/insin/react-octicon

[npm-badge]: https://img.shields.io/npm/v/react-octicon.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-octicon

[coveralls-badge]: https://img.shields.io/coveralls/insin/react-octicon/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/insin/react-octicon
