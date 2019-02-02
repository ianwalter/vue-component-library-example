import test from 'ava'
import withPage from './helpers/withPage'

test('render', withPage, async (t, page) => {
  t.snapshot(await page.evaluate(() =>
    VueTestUtils.mount(vueComponentLibrary.Tooltip).html()
  ))
})
