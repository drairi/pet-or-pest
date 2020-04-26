import assert from 'assert';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/components/App';

describe('Client', () => {
  it('renders the client without errors', () => {
    const renderSpy = sinon.spy(ReactDOM, 'hydrate');
    require('../src/client');

    sinon.assert.calledOnce(renderSpy);
  });

  describe.only('Page layout', () => {
    let renderedApp;

    beforeEach(() => {
      renderedApp = shallow(<App />);
    });

    it('renders the logo with a hidden h1', () => {
      const header = renderedApp.find('header');
      assert(header.find('h1'));
      assert.strictEqual(header.text(), 'Pet or Pest?');
    });

    it('renders a container with an initial image', () => {
      const animal = renderedApp.find('.animal');
      assert(animal);
      assert(animal.prop('src').includes('.jpg'));
    });

    it('renders Pet and Pest button arrows', () => {
      const arrow = renderedApp.find('button.arrow');
      assert.strictEqual(arrow.length, 2);
      assert.strictEqual(arrow.find('.arrow--pest').text(), 'Pest');
      assert.strictEqual(arrow.find('.arrow--pet').text(), 'Pet');
    });

    it('renders a footer', () => {
      const footer = renderedApp.find('footer');
      assert.strictEqual(
        footer.text(),
        'Pet or Pest? Made by D Goomani and Aimee Rivers'
      );
    });
  });
});
