import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ThemeWrapper from '../../utils/ThemeWrapper'

const FormInputAddon = React.memo(
  ({ styling, className, children, tag: Tag = 'div', type, ...rest }) => {
    const classes = classNames(className, `input-group-${type}`)

    return (
      <Tag {...rest} className={classes}>
        {typeof children === 'string' ? (
          <div class='input-group-text'>{children}</div>
        ) : (
          <>{children}</>
        )}
      </Tag>
    )
  }
)

FormInputAddon.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node,
  /**
   * The addon type.
   */
  type: PropTypes.oneOf(['append', 'prepend', 'leading', 'trailing']).isRequired,
  /**
   * The component's tag type.
   */
  tag: PropTypes.string
}

export default ThemeWrapper(themeName => `formInput/formInput_${themeName}.module.scss`)(
  FormInputAddon
)
