import Vue from 'vue'
import Music from '@/components/music'

describe('music', () => {
  it('should render correct music title', () => {
    const vm = new Vue(Music).$mount()
    expect(vm.$el.querySelector('.music-title').textContent).to.contain('なんでもないや')
    // vm.$el.querySelector('.music-title').textContent.should.exist('なんでもないや')
  })
  it('should expose the Chai should property', () => {
    expect(1).to.not.equal(2)
    expect(1).to.exist
  })
  it('can spy on objects', () => {
    // let foo = bar
    // sinon.spy foo, 'bar'
    // foo = bar, () => {
    //   foo.bar 'baz'
    //   foo.bar.should.have.been.calledWith 'baz'
    // }
  })
})
