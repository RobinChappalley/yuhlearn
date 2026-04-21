import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../app/App.vue'

describe('App', () => {
  it('renders the app shell', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          RouterView: true,
        },
      },
    })

    expect(wrapper.find('main').exists()).toBe(true)
  })
})
