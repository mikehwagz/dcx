import test from 'ava'
import dcx from './dist/dcx.js'
import { JSDOM } from 'jsdom'

const dom = new JSDOM(`<body>
  <div></div>
</body>`)

test('base', (t) => {
  const node = dom.window.document.children[0]
  const cx = dcx(node)

  node.className = 'yes no'

  cx('foo', { bar: true, baz: false, 'hi hello': true, yes: false }, 'qux')

  t.true('no foo bar hi hello qux' === node.className)
})
