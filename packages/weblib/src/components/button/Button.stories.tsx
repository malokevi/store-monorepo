import {Meta, Story} from "@storybook/react";
import Button, { ButtonPropsType } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template : Story<ButtonPropsType> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Test Button",
  onClick: (e: any) => console.log('test click'),
  version: "primary",
  type: "button"
};