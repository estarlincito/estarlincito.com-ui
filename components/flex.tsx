// import * as CSS from 'csstype';
// import React, { forwardRef } from 'react';

// import generateClassName from '@/lib/generateClassName';

// interface Props extends CSS.Properties<string | number> {
//   children?: React.ReactNode;
//   as?: keyof React.JSX.IntrinsicElements; // Allows specifying the HTML tag (e.g., div, span)
// }

// export const Flex = forwardRef<HTMLElement, Props>(
//   ({ as = 'div', children, ...props }, ref) => {
//     const classID = generateClassName(props);
//     return React.createElement(as, { className: classID, ref }, children);
//   },
// );
