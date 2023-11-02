import React from 'react';
import styles from './Typography.module.scss';

function Typography({ type, children }) {
	return <div className={styles[type]}>{children}</div>;
}

export default Typography;
