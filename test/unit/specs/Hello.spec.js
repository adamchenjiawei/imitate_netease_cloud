import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
  it('should update msg on activate', () => {
    // This is how to unit test a router hook.
    const _this = {
      msg: 'foo'
    }
    Hello.route.activate.call(_this)
    expect(_this.msg).to.equal('Hey')
  })
  it('should update msg on sayHi', () => {
    // Use Function.prototype.call() (dynamic definition)
    // Please see here: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
    const _this = {
      msg: 'foo'
    }
    Hello.methods.sayHi.call(_this, 'Hello here')
    expect(_this.msg).to.equal('Hello here')
  })
  it('should update msg on sayHi with sinon', () => {
    // This is how to spy object with sinon.
    sinon.spy(Hello.methods, 'sayHi')
    Hello.methods.sayHi('Hello', 'Yume')
    expect(Hello.methods.sayHi.called).to.be.true
    // expect(Hello.data.msg).to.equal('Yume') // There can not get data of msg.
  })
})
