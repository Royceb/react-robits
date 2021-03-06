import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { addDecorator, addParameters } from '@storybook/react'
import { withContexts } from '@storybook/addon-contexts/react'
import { withKnobs } from '@storybook/addon-knobs'
import { create } from '@storybook/theming/create'
import { SyntaxHighlighter } from '@storybook/components'
import { getComponentMarkdown } from '../src/stories/pages/componentUtils'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Props,
  DocsContext
} from '@storybook/addon-docs/blocks'
import GlobalStyles from '../src/stories/pages/GlobalStyles'
const rnpTheme = create({
  base: 'light',

  appBg: '#e5e8ec',
  colorPrimary: '#056AE6',
  colorSecondary: '#5ba0d0',

  brandTitle: 'React Robits',
  brandUrl: 'https://www.robotsandpencils.com/',
  brandImage: '/rnp-logo.svg'
})

const ThemeDefiner = React.createContext({
  themeName: 'talentPortal'
})

const topLevelContexts = [
  {
    icon: 'mirror',
    title: 'Theme',
    components: [ThemeDefiner.Provider],
    params: [
      {
        name: 'Unstyled',
        props: {
          value: { themeName: 'unstyled' }
        }
      },
      {
        name: 'Talent Portal',
        props: {
          value: { themeName: 'talentPortal' }
        },
        default: true
      }
    ],
    options: {
      deep: true
    }
  }
]

const ContextDecorator = storyFn => {
  const [count, setCount] = useState(0)

  return (
    <ThemeDefiner.Consumer>
      {({ themeName }) => (
        <>
          <button onClick={() => setCount(count + 1)}>Rerender Parent</button>{' '}
          <small>Count: {count}</small>
          <GlobalStyles themeName={themeName} />
          <div style={{ padding: '30px' }}>{storyFn({ themeName, count })}</div>
        </>
      )}
    </ThemeDefiner.Consumer>
  )
}

addDecorator(ContextDecorator)
addDecorator(withContexts(topLevelContexts))
addDecorator(withKnobs)

addParameters({
  options: {
    theme: rnpTheme,
    showRoots: true
  },
  backgrounds: [
    { name: 'White', value: '#FFFFFF', default: true },
    { name: 'Black', value: '#000000' },
    { name: 'Talent Portal Background', value: '#f9fafc' }
  ],
  docs: {
    page: () => {
      const context = React.useContext(DocsContext)
      return (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Props />
          <SyntaxHighlighter bordered copyable format={false} language='jsx'>
            {getComponentMarkdown(context.parameters.component)}
          </SyntaxHighlighter>
        </>
      )
    }
  }
})
