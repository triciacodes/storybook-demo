import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import '../../../index.css'

const PageWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default PageWrapper

PageWrapper.propTypes = {
  children: PropTypes.node,
}
