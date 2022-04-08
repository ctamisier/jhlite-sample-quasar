import { describe, expect, it } from '@jest/globals';
import {
  installQuasarPlugin,
  qLayoutInjections,
} from '@quasar/quasar-app-extension-testing-unit-jest';
import { mount } from '@vue/test-utils';
import route from 'app/src/router';
import MainLayout from 'layouts/MainLayout';

installQuasarPlugin();

const router = route();

describe('MainLayout', () => {
  it('should have a page', async () => {
    router.push('/');
    await router.isReady();

    const wrapper = mount(MainLayout, {
      global: {
        provide: qLayoutInjections(),
        plugins: [router],
      },
    });

    expect(wrapper.find('.q-page').exists()).toBeTruthy();

    wrapper.find('.q-btn').trigger('click');
    //TODO what could we assert ?
  });
});
