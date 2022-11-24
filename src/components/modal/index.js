import React from 'react';

import RCModal from 'rc-dialog';

import 'rc-dialog/assets/index.css';
import styles from './index.module.css';

export const Modal = ({
    active,
    setActive,
    children,
    animation,
    maskAnimation,
}) => {
    return (
        <RCModal
            visible={active}
            animation={animation}
            maskAnimation={maskAnimation}
            onClose={() => setActive((state) => !state)}
            rootClassName={styles.modal}
        >
            {children}
        </RCModal>
    );
};
