import React, { createElement } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

export default function Button({ size, children }) {
    return createElement('button', {
        className: cn('bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold hover:bg-[#1a8cd8] transitions-colors', {
            'px-4 h-9': size === 'normal',
            'px-4 h-[52px] w-full': size === 'large'
        })
    }, children)
}

Button.prototype = {
    size: PropTypes.oneOfType(['normal', 'large'])
}

Button.defaultProps = {
    size: 'normal'
}
