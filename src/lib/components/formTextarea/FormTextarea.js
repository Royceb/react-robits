import React from 'react'
import PropTypes from 'prop-types'
import ThemeWrapper from '../../utils/ThemeWrapper'
import * as themes from './themes'
import classNames from 'classnames'

/**
 * The form input allows you to create various text style inputs such as `text`, `password`, `email`, `number`, `url`, `search` and more.
 */
export const FormTextarea = ({
  required,
  styling,
  className,
  label,
  size,
  invalid = false,
  valid = false,
  innerRef,
  disabled = false,
  readonly = false,
  errorText,
  hintContent,
  resizeable = true,
  ...props
}) => {
  const textareaClasses = classNames(
    styling['form-control'],
    size && styling[`form-control-${size}`],
    valid && styling['valid'],
    invalid && styling['invalid'],
    disabled && styling['disabled'],
    !resizeable && styling['noresize']
  )

  const containerClasses = classNames(
    className,
    disabled && styling['disabled'],
    styling['form-control-container'],
    props.cols && styling['inline']
  )

  return (
    <div className={containerClasses}>
      {
        label
          ? <label htmlFor={props.id} className={`${size ? styling[`form-control-label-${size}`] : ''}`}>
            {label}{required && '*'}
          </label>
          : []
      }
      {hintContent && label ? <div className={styling['form-control-hint']}>{hintContent}</div> : []}
      <textarea
        {...props}
        ref={innerRef}
        disabled={disabled}
        readOnly={readonly}
        className={textareaClasses} />
      <div className={styling['form-control-descenders']}>
        <div>
          {invalid && errorText ? <div className={styling['form-control-error']}>{errorText}</div> : []}
          {hintContent && !label ? <div className={styling['form-control-hint']}>{hintContent}</div> : []}
        </div>
        {required && !label && !invalid ? <div className={styling['form-control-required']}>Required</div> : []}
      </div>
      
    </div>
  )
}

FormTextarea.propTypes = {
  /**
   * The class name.
   */
  className: PropTypes.string,
  /**
   * The input's size.
   */
  size: PropTypes.string,
  /**
   * Whether it is valid, or not.
   */
  valid: PropTypes.bool,
  /**
   * Whether it is invalid, or not.
   */
  invalid: PropTypes.bool,
  /**
   * The inner ref.
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),
  /**
   * Text to display if the field is invalid.
   */
  errorText : PropTypes.string,
  /**
   * Text to display below the input as clues to the user
   */
  hintContent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  /**
   * Whether the field is required or not
   */
  required: PropTypes.bool
}

export default ThemeWrapper(themes)(FormTextarea)