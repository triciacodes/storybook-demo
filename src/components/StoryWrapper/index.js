import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import '../../index.css'

const StoryWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default StoryWrapper

StoryWrapper.propTypes = {
  children: PropTypes.node,
}
