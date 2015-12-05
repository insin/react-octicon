import expect from 'expect'
import React from 'react'
import {Simulate} from 'react-addons-test-utils'
import {render, unmountComponentAtNode} from 'react-dom'

import Octicon from 'src/'

let {click} = Simulate

describe('Octicon', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  let testClassName = (component, expectedClassName) =>
    it('renders a suitable className', () => {
      render(component, node, () => {
        let span = node.querySelector('span')
        expect(span).toExist()
        expect(span.className).toEqual(expectedClassName)
      })
    })

  testClassName(<Octicon name="sync"/>, 'octicon octicon-sync')
  testClassName(<Octicon mega name="sync"/>, 'mega-octicon octicon-sync')
  testClassName(<Octicon spin name ="sync"/>, 'octicon octicon-sync spin-octicon')
  testClassName(<Octicon mega spin name="sync"/>, 'mega-octicon octicon-sync spin-octicon')
  testClassName(<Octicon mega spin name="sync" className="custom"/>, 'mega-octicon octicon-sync spin-octicon custom')

  it('passes additional props through', () => {
    var onClick = expect.createSpy()
    render(<Octicon name="sync" onClick={onClick} role="progressbar"/>, node, () => {
      let span = node.querySelector('span')
      expect(span).toExist()
      expect(span.className).toEqual('octicon octicon-sync')
      expect(span.getAttribute('role')).toEqual('progressbar')
      click(span)
      expect(onClick).toHaveBeenCalled()
    })
  })
})
