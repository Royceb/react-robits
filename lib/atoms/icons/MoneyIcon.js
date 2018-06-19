import React from 'react'
import PropTypes from 'prop-types'
import colors from '../../../styles/_0colors.scss'

const MoneyIcon = ({width, fillColor, isFilled, ...props}) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width} viewBox='0 0 24 24' {...props}>
      {
        isFilled
          ? <path fill={fillColor} d='M13,17.6699 L13,13.2299 C14.93,13.6999 15.75,14.1999 15.75,15.3799 C15.75,16.7199 14.49,17.4499 13,17.6699 M8.25,8.5899 C8.25,7.2499 9.51,6.5299 11,6.3099 L11,10.7399 C9.07,10.2699 8.25,9.7699 8.25,8.5899 M13,11.1699 L13,6.3399 C14.57,6.6299 15.47,7.5499 15.52,7.5999 C15.9,7.9999 16.52,8.0299 16.93,7.6599 C17.33,7.2799 17.36,6.6499 16.99,6.2399 C16.92,6.1699 15.49,4.6499 13,4.3099 L13,2.9999 C13,2.4499 12.55,1.9999 12,1.9999 C11.45,1.9999 11,2.4499 11,2.9999 L11,4.2999 C8.16,4.6099 6.25,6.2899 6.25,8.5899 C6.25,11.4999 8.79,12.3199 11,12.8099 L11,17.6399 C9.42,17.3499 8.52,16.4199 8.49,16.3799 C8.11,15.9699 7.48,15.9399 7.07,16.3199 C6.67,16.6899 6.64,17.3199 7.01,17.7299 C7.08,17.7999 8.51,19.3299 11,19.6699 L11,20.9999 C11,21.5499 11.45,21.9999 12,21.9999 C12.55,21.9999 13,21.5499 13,20.9999 L13,19.6799 C15.84,19.3699 17.75,17.6899 17.75,15.3799 C17.75,12.4799 15.21,11.6499 13,11.1699' />
          : <path fill={fillColor} d='M12.75,17.9502 L12.75,12.9202 C14.74,13.3602 16,13.9002 16,15.3802 C16,16.9602 14.46,17.7702 12.75,17.9502 Z M11.25,11.0602 C9.26,10.6102 8,10.0702 8,8.5902 C8,7.0202 9.54,6.2102 11.25,6.0302 L11.25,11.0602 Z M12.75,11.3702 L12.75,6.0402 C14.59,6.2902 15.64,7.3702 15.7,7.4302 C15.98,7.7302 16.46,7.7502 16.76,7.4702 C17.06,7.1902 17.08,6.7202 16.8,6.4102 C16.74,6.3402 15.28,4.8002 12.75,4.5302 L12.75,2.7502 C12.75,2.3402 12.41,2.0002 12,2.0002 C11.59,2.0002 11.25,2.3402 11.25,2.7502 L11.25,4.5302 C8.42,4.7602 6.5,6.3602 6.5,8.5902 C6.5,11.3802 9.09,12.1502 11.25,12.6002 L11.25,17.9402 C9.4,17.6902 8.34,16.5902 8.3,16.5402 C8.02,16.2402 7.55,16.2202 7.24,16.5002 C6.94,16.7802 6.92,17.2602 7.2,17.5602 C7.26,17.6302 8.72,19.1802 11.25,19.4502 L11.25,21.2502 C11.25,21.6602 11.59,22.0002 12,22.0002 C12.41,22.0002 12.75,21.6602 12.75,21.2502 L12.75,19.4502 C15.58,19.2202 17.5,17.6102 17.5,15.3802 C17.5,12.5902 14.91,11.8302 12.75,11.3702 Z' />
      }
    </svg>
  )
}

MoneyIcon.defaultProps = {
  fillColor: colors.x_light_gray_10,
  width: 34,
  isFilled: false
}
MoneyIcon.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fillColor: PropTypes.string,
  isFilled: false
}

export default MoneyIcon