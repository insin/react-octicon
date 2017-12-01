import '../css/Octicon.css'

import React from 'react'
import t from 'prop-types'

let iconNames = process.env.NODE_ENV !== 'production' ? (
  'alert arrow-down arrow-left arrow-right arrow-small-down arrow-small-left arrow-small-right arrow-small-up arrow-up beaker bell bold book bookmark briefcase broadcast browser bug calendar check checklist chevron-down chevron-left chevron-right chevron-up circle-slash circuit-board clippy clock cloud-download cloud-upload code comment-discussion comment credit-card dash dashboard database desktop-download device-camera-video device-camera device-desktop device-mobile diff-added diff-ignored diff-modified diff-removed diff-renamed diff ellipses ellipsis eye file-binary file-code file-directory file-media file-pdf file-submodule file-symlink-directory file-symlink-file file-text file-zip file flame fold gear gift gist-secret gist git-branch git-commit git-compare git-merge git-pull-request globe grabber graph heart history home horizontal-rule hubot inbox info issue-closed issue-opened issue-reopened italic jersey key keyboard law light-bulb link-external link list-ordered list-unordered location lock logo-gist logo-github mail-read mail-reply mail mark-github markdown megaphone mention milestone mirror mortar-board mute no-newline octoface organization package paintcan pencil person pin plug plus-small plus primitive-dot primitive-square pulse question quote radio-tower reply repo-clone repo-force-push repo-forked repo-pull repo-push repo rocket rss ruby search server settings shield sign-in sign-out smiley squirrel star stop sync tag tasklist telescope terminal text-size three-bars thumbsdown thumbsup tools trashcan triangle-down triangle-left triangle-right triangle-up unfold unmute unverified verified versions watch x zap'.split(' ')
) : (
  []
)

export default class Octicon extends React.Component {
  static propTypes = {
    name: t.oneOf(iconNames).isRequired,
    className: t.string,
    mega: t.bool,
    spin: t.bool,
  }
  static defaultProps = {
    mega: false,
    spin: false,
  }
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
}
