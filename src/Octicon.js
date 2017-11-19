require('../css/Octicon.css')

import React from 'react'
import PropTypes from 'proptypes'

let Octicon = React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    mega: PropTypes.bool,
    spin: PropTypes.bool
  },
  getDefaultProps() {
    return {
      mega: false,
      spin: false
    }
  },
  render() {
    let {name, className, mega, spin, ...props} = this.props
    let classNames = [mega ? 'mega-octicon' : 'octicon', `octicon-${name}`]
    if (spin) {
      classNames.push('spin-octicon')
    }
    if (className) {
      classNames.push(className)
    }
    return <span {...props} className={classNames.join(' ')}/>
  }
})

export default Octicon
