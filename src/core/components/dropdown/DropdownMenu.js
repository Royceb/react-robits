import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ThemeWrapper from '../../utils/ThemeWrapper'
import classNames from 'classnames'
import { Popper } from 'react-popper'
import DropdownContext from '../../utils/DropdownContext'
import { DROPDOWN_POSITION_MAP } from '../../constants/constants'

export const DropdownMenu = ({
  alignment,
  className,
  children,
  flip = true,
  modifiers,
  persist,
  size,
  styling,
  tag: Tag = 'div',
  ...rest
}) => {
  const context = useContext(DropdownContext)

  const classes = classNames(
    className,
    'dropdown-menu',
    size && `dropdown-menu-${size}`,
    // right && styling['dropdown-menu-right'],
    context.open && 'show'
  )

  if (persist || (context.open && !context.inNavbar)) {
    const pos1 = DROPDOWN_POSITION_MAP[context.direction.toUpperCase()] || 'bottom'
    let pos2
    if (alignment === 'right') pos2 = 'end'
    if (alignment === 'left') pos2 = 'start'
    rest.placement = `${pos1}${pos2 ? `-${pos2}` : ''}`
    rest.component = Tag
    rest.modifiers = !flip
      ? {
        ...modifiers,
        ...{
          flip: {
            enabled: false
          }
        }
      }
      : modifiers

    return (
      <Popper {...rest}>
        {({ ref, placement, style }) => (
          <div
            style={style}
            ref={ref}
            className={classes}
            x-placement={placement}
            aria-hidden={!context.open}
            tabIndex='-1'
            role='menu'>
            {children}
          </div>
        )}
      </Popper>
    )
  }

  return (
    <Tag tabIndex='-1' role='menu' {...rest} className={classes}>
      {children}
    </Tag>
  )
}

DropdownMenu.propTypes = {
  /**
   * The alignment of the dropdown relative to the trigger (center, right, left). Defaults to center
   */
  alignment: PropTypes.string,
  /**
   * The children nodes.
   */
  children: PropTypes.node.isRequired,
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * Whether or not it should flip based on the viewport real estate. Defaults to true.
   */
  flip: PropTypes.bool,
  /**
   * The modifiers config object. See Popper.js
   */
  modifiers: PropTypes.object,
  /**
   * Whether it should persist, or not.
   */
  persist: PropTypes.bool,
  /**
   * Size of the dropdown
   */
  size: PropTypes.string,
  /**
   * The component tag.
   */
  tag: PropTypes.string
}

export default ThemeWrapper(themeName => `dropdown/dropdown_${themeName}.module.scss`)(DropdownMenu)
