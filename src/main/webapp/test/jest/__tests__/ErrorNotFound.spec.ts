import { describe, expect, it } from '@jest/globals';
import {
  installQuasarPlugin,
  qLayoutInjections,
} from '@quasar/quasar-app-extension-testing-unit-jest';
import { mount } from '@vue/test-utils';
import route from 'app/src/router';
import ErrorNotFound from 'pages/ErrorNotFound';

installQuasarPlugin();

const router = route();

describe('ErrorNotFound', () => {
  it('should have an error page', async () => {
    router.push('/unknown');
    await router.isReady();

    const wrapper = mount(ErrorNotFound, {
      global: {
        provide: qLayoutInjections(),
        plugins: [router],
      },
    });
    expect(wrapper.find('div').exists()).toBeTruthy();
  });
});
