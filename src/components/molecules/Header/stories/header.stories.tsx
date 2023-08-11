import React from 'react';
import { Header } from '..'; // Replace with the correct path
import { ProjectsContainer } from '../styles';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'components/molecules/Header',
  component: Header,
} as Meta;

const Template: StoryFn = (args) => (
  <ProjectsContainer>
    <Header {...args} />
  </ProjectsContainer>
);

export const Primary = Template.bind({});
Primary.args = {};
