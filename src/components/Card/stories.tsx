import { Story, Meta } from '@storybook/react/types-6-0'
import { Card } from '.'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Basic: Story = () => (
  <Card imgUrl={'https://via.placeholder.com/150'} buttonLabel={'Storybook'} />
)
