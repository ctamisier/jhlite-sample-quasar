import { describe, expect, it } from '@jest/globals';
import {
  installQuasarPlugin,
  qLayoutInjections,
} from '@quasar/quasar-app-extension-testing-unit-jest';
import { mount } from '@vue/test-utils';
import App from 'app/src/App';
import route from 'app/src/router';

installQuasarPlugin();

const router = route();

describe('App', () => {
  it('should init', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(App, {
      global: {
        provide: qLayoutInjections(),
        plugins: [router],
      },
    });

    expect(wrapper.find('.q-page').exists()).toBeTruthy();
  });
});
