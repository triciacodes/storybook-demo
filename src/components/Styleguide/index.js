import React from 'react'
import styles from './index.module.css'

import Button from '../Button'
import PageWrapper from '../Util/PageWrapper'

const Styleguide = () => {
  const handleOnClick = () => console.log('Button clicked')

  return (
    <PageWrapper>
      <div className={styles.styleguide}>
        <Button
          label={'Click'}
          size={'small'}
          variant={'primary'}
          onClick={handleOnClick}
        />
      </div>
    </PageWrapper>
  )
}

export default Styleguide
