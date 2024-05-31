import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, Props } from "../components/MyLabel";

const meta: Meta<Props> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: {
            control: 'inline-radio'
        },
        fontColor: {
            control: 'color'
        }
    }
} satisfies Meta<typeof MyLabel>;

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = { 
    args: {
        label: 'Basic label'
    }
 };

 export const AllCaps: Story = { 
    args: {
        label: 'AllCaps label',
        allCaps: true
    }
 };

 export const Secondary: Story = { 
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
 };

 export const CustomColor: Story = { 
    args: {
        label: 'CustomColor label',
        fontColor: '#5571ac'
    }
 };

 export const CustomBackgroundColor: Story = { 
    args: {
        label: 'CustomColor label',
        fontColor: 'white',
        size: 'h1',
        backgroundColor: 'black'
    }
 };