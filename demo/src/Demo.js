import './demo.css'

import copy from 'copy-to-clipboard'
import React from 'react'

import Octicon from '../../src/index'

const OCTICON_NAMES = 'alert arrow-down arrow-left arrow-right arrow-small-down arrow-small-left arrow-small-right arrow-small-up arrow-up beaker bell bold book bookmark briefcase broadcast browser bug calendar check checklist chevron-down chevron-left chevron-right chevron-up circle-slash circuit-board clippy clock cloud-download cloud-upload code comment-discussion comment credit-card dash dashboard database desktop-download device-camera-video device-camera device-desktop device-mobile diff-added diff-ignored diff-modified diff-removed diff-renamed diff ellipses ellipsis eye file-binary file-code file-directory file-media file-pdf file-submodule file-symlink-directory file-symlink-file file-text file-zip file flame fold gear gift gist-secret gist git-branch git-commit git-compare git-merge git-pull-request globe grabber graph heart history home horizontal-rule hubot inbox info issue-closed issue-opened issue-reopened italic jersey key keyboard law light-bulb link-external link list-ordered list-unordered location lock logo-gist logo-github mail-read mail-reply mail mark-github markdown megaphone mention milestone mirror mortar-board mute no-newline octoface organization package paintcan pencil person pin plug plus-small plus primitive-dot primitive-square pulse question quote radio-tower reply repo-clone repo-force-push repo-forked repo-pull repo-push repo rocket rss ruby search server settings shield sign-in sign-out smiley squirrel star stop sync tag tasklist telescope terminal text-size three-bars thumbsdown thumbsup tools trashcan triangle-down triangle-left triangle-right triangle-up unfold unmute unverified verified versions watch x zap'.split(' ').sort()
const OCTICON_NAMES_LOOKUP = OCTICON_NAMES.reduce(
  (lookup, name) => (lookup[name] = true, lookup), {} // eslint-disable-line
)

export default class Demo extends React.Component {
  state = {copied: false, mega: true, search: 'sync', name: 'sync', spin: false}

  copyCode = () => {
    copy(this.getCode())
    this.setState({copied: true})
    if (this._copyTimeout) {
      window.clearTimeout(this._copyTimeout)
    }
    this._copyTimeout = window.setTimeout(() => this.setState({copied: false}), 500)
  }
  getCode() {
    let {mega, name, spin} = this.state
    return `<Octicon name="${name}"${mega ? ' mega' : ''}${spin ? ' spin' : ''}/>`
  }
  updateSearch(search) {
    this.setState({
      search,
      name: search in OCTICON_NAMES_LOOKUP ? search : this.state.name
    })
  }

  handleCheckedChange = (e) => {
    this.setState({[e.target.name]: e.target.checked})
  }
  handleIconClick = (name) => {
    this.updateSearch(name)
    window.scrollTo(0, 0)
  }
  handleIconKeyPress = (e, name) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.updateSearch(name)
      window.scrollTo(0, 0)
    }
  }
  handleNameChange = (e) => {
    let name = e.target.value
    this.setState({name, search: name})
  }
  // <select> doesn't have its value updated yet when onKeyDown fires
  handleNameChangeDelayed = (e) => {
    let {target} = e
    setTimeout(() => this.handleNameChange({target}), 0)
  }
  handleSearchChange = (e) => {
    this.updateSearch(e.target.value)
  }

  render() {
    let {copied, mega, name, search, spin} = this.state
    return <div className="Demo">
      <h1>
        <a href="https://github.com/insin/react-octicon">
          react-octicon
        </a>
      </h1>
      <p>
        <Octicon name={name} mega={mega} spin={spin}/>
      </p>
      <p>
        <code>{this.getCode()}</code>
        <br/>
        <button type="button" onClick={this.copyCode}>
          <Octicon name={copied ? 'check' : 'clippy'}/> {copied ? 'Copied' : 'Copy'} code
        </button>
      </p>
      <p>
        <input
          list="names"
          name="search"
          onChange={this.handleSearchChange}
          type="search"
          value={search}
        />
        <datalist id="names">
          {OCTICON_NAMES.map(name => <option key={name} value={name}/>)}
        </datalist>{' '}
        <select
          name="name"
          onChange={this.handleNameChange}
          onKeyDown={this.handleNameChangeDelayed}
          value={name}
        >
          {OCTICON_NAMES.map(name => <option key={name}>{name}</option>)}
        </select>{' '}
        <label>
          <input type="checkbox" name="mega" checked={mega} onChange={this.handleCheckedChange}/> mega
        </label>{' '}
        <label>
          <input type="checkbox" name="spin" checked={spin} onChange={this.handleCheckedChange}/> spin
        </label>
      </p>
      <div className="Demo__icons">
        {OCTICON_NAMES.map(name =>
          <div
            className="Demo__icon"
            key={name}
            onClick={() => this.handleIconClick(name)}
            onKeyPress={(e) => this.handleIconKeyPress(e, name)}
            tabIndex="0"
            title={name}
          >
            <Octicon key={name} name={name} mega/>
          </div>
        )}
      </div>
      <p><small>
        <a href="https://github.com/insin/react-octicon">
          <Octicon name="repo-forked" mega/> me on <Octicon name="logo-github" mega/>
        </a>
      </small></p>
    </div>
  }
}
