import React, { useEffect, useRef } from 'react';

export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  useEffect(() => {
    if (ref) {
      ref.current.indeterminate = indeterminate;
    }
  }, [ref, indeterminate]);

  return <input type='checkbox' ref={ref} {...rest} />;
});