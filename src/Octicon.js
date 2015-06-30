require('../css/Octicon.css')

var React = require('react')

var Octicon = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    mega: React.PropTypes.bool,
    spin: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      mega: false,
      spin: false
    }
  },
  render() {
    var {name, className, mega, spin, ...props} = this.props
    var classNames = [mega ? 'mega-octicon' : 'octicon', `octicon-${name}`]
    if (spin) {
      classNames.push('octicon-spin')
    }
    if (className) {
      classNames.push(className)
    }
    return <span {...props} className={classNames.join(' ')}/>
  }
})

module.exports = Octicon
