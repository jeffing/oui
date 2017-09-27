import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Dropdown from './index.js';
import BlockList from '../BlockList';
import Icon from 'react-oui-icons';

const data = [
  {title: 'Manual', description: 'Dolcelatte cheeseburger swiss paneer cow gouda edam cheese slices'},
  {title: 'Maximize Conventions', header: 'Automation',
    description: 'Everyone loves cut the cheese cow squirty cheese emmental jarlsberg halloumi camembert de normandie.'},
  {title: 'Faster Results', description: 'Cauliflower cheese stilton paneer hard cheese fondue.'},
];

const stories = storiesOf('Dropdown', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.addWithInfo('default', () => {
  return (
    <Dropdown
      isDisabled={ boolean('isDisabled', false) }
      fullWidth={ boolean('fullWidth', false) }
      handleClick={ action('dropdown clicked') }
      style={ select('style', {
        default: 'default',
        highlight: 'highlight',
        danger: 'danger',
        'danger-outline': 'danger-outline',
        outline: 'outline',
        underline: 'underline'}, '') }
      buttonContent={ text('text', 'Dropdown') }
      width={ number('width', 300) }>
      <ul className="lego-dropdown width--200" style={{display: 'block'}}>
        <li className="lego-dropdown__item">
          <a onClick={ action('clicked on link 1') } className="lego-dropdown__block-link">Manage Collaborators</a>
          <a onClick={ action('clicked on link 2') } className="lego-dropdown__block-link">Manage This Thing</a>
        </li>
        <li className="lego-dropdown__item">
          <a onClick={ action('clicked on link 3') } className="lego-dropdown__block-link">Experiment Change History</a>
        </li>
      </ul>
    </Dropdown>
  );
});

stories.addWithInfo('with BlockList elements', () => {
  return (
    <Dropdown
      isDisabled={ boolean('isDisabled', false) }
      fullWidth={ boolean('fullWidth', false) }
      handleClick={ action('dropdown clicked') }
      style={ select('style', {
        default: 'default',
        highlight: 'highlight',
        danger: 'danger',
        'danger-outline': 'danger-outline',
        outline: 'outline',
        underline: 'underline'}, '') }
      buttonContent='Dropdown'
      width={ number('width', 300) }>
      <BlockList>
        {
          data.map((item, index) => {
            return (
              <BlockList.Category header={ item.header } key={ index }>
                <BlockList.Item onClick={ action('click on complex item') }>
                  <div className="flex flex-align--center">
                    <div className="flex--1">
                      <div>{ item.title }</div>
                      <div className="muted micro">{ item.description }</div>
                    </div>
                  </div>
                </BlockList.Item>
              </BlockList.Category>
            );
          })
        }
      </BlockList>
    </Dropdown>
  );
});


stories.addWithInfo('three dots', () => {
  return (
    <Dropdown
      icon={ false }
      isDisabled={ boolean('isDisabled', false) }
      fullWidth={ boolean('fullWidth', false) }
      handleClick={ action('dropdown clicked') }
      buttonContent={<Icon name='ellipsis' />}
      width={ number('width', 100) }>
      <BlockList>
        <BlockList.Category >
          <BlockList.Item onClick={ action('click on complex item') }>
            <div className="flex flex-align--center">
              <div className="flex--1">
                <a href='#'>un link </a>
              </div>
            </div>
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Category >
        <BlockList.Item onClick={ action('click on complex item') }>
          <div className="flex flex-align--center">
            <div className="flex--1">
              <a href='#'>otro link</a>
            </div>
          </div>
        </BlockList.Item>
        </BlockList.Category>
        <BlockList.Category >
          <BlockList.Item onClick={ action('click on complex item') }>
            <div className="flex flex-align--center">
              <div className="flex--1">
                <a href='#'>un más</a>
              </div>
            </div>
          </BlockList.Item>
        </BlockList.Category>
        <BlockList.Category >
          <BlockList.Item onClick={ action('click on complex item') }>
            <div className="flex flex-align--center">
              <div className="flex--1">
                <a href='#'>el último</a>
              </div>
            </div>
          </BlockList.Item>
        </BlockList.Category>
      </BlockList>
    </Dropdown>
  );
});


stories.addWithInfo('text behind', () => {
  return (
    <div>
      <Dropdown
        isDisabled={ boolean('isDisabled', false) }
        fullWidth={ boolean('fullWidth', false) }
        handleClick={ action('dropdown clicked') }
        buttonContent='Dropdown'
        width={ number('width', 100) }>
        <BlockList>
          <BlockList.Category >
            <BlockList.Item onClick={ action('click on complex item') }>
              <div className="flex flex-align--center">
                <div className="flex--1">
                  <a href='#'>un link </a>
                </div>
              </div>
            </BlockList.Item>
          </BlockList.Category>
          <BlockList.Category >
          <BlockList.Item onClick={ action('click on complex item') }>
            <div className="flex flex-align--center">
              <div className="flex--1">
                <a href='#'>otro link</a>
              </div>
            </div>
          </BlockList.Item>
          </BlockList.Category>
          <BlockList.Category >
            <BlockList.Item onClick={ action('click on complex item') }>
              <div className="flex flex-align--center">
                <div className="flex--1">
                  <a href='#'>un más</a>
                </div>
              </div>
            </BlockList.Item>
          </BlockList.Category>
          <BlockList.Category >
            <BlockList.Item onClick={ action('click on complex item') }>
              <div className="flex flex-align--center">
                <div className="flex--1">
                  <a href='#'>el último</a>
                </div>
              </div>
            </BlockList.Item>
          </BlockList.Category>
        </BlockList>
      </Dropdown>
      <h1>This text should be behind the open dropdown</h1>
    </div>
  );
});