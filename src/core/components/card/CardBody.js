import React from 'react'
import PropTypes from 'prop-types'
import ThemeWrapper from '../../utils/ThemeWrapper'
import classNames from 'classnames'

/**
 * Card body, with baked in padding
 */
export const CardBody = ({ styling, children, className = '', innerRef, ...props }) => {
  const classes = classNames(className, styling['card-body'])

  return (
    <div ref={innerRef} className={classes} {...props}>
      {children}
    </div>
  )
}

CardBody.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.any.isRequired,
  /**
   * The inner ref.
   * @type {[type]}
   */
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string])
}

export default ThemeWrapper(themeName => `card/card_${themeName}.module.scss`)(CardBody)
