import { Story, Meta } from '@storybook/react/types-6-0'
import { Product } from '.'

export default {
  title: 'Product',
  component: Product
} as Meta

export const Basic: Story = () => (
  <Product
    imgUrl={'https://via.placeholder.com/150'}
    title={'Storybook'}
    description={'Storybook'}
    buttonLabel={'Storybook'}
  />
)
