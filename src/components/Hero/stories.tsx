import { Story, Meta } from '@storybook/react/types-6-0'
import Hero from '.'

export default {
  title: 'Hero',
  component: Hero
} as Meta

export const Basic: Story = () => <Hero />
