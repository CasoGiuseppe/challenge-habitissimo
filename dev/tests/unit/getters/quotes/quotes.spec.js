import getters from '@/store/modules/quotes/getters'
import { datas } from './mock'
  

describe('Getters', () => {
  it('get all store quotes', () => {
    const actual = getters.getAllQuotes(datas)
    const length = actual.length
    expect(length).toBeGreaterThan(0);
  })
})