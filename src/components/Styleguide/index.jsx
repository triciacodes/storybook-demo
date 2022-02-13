import React from 'react'
import styles from './index.module.css'

import Button from '../Button'

const Styleguide = () => {
  const handleOnClick = () => console.log('Button clicked')

  return (
    <div className={styles.styleguide}>
      <Button
        label={'Click'}
        size={'small'}
        variant={'primary'}
        onClick={handleOnClick}
      />
      <Button
        label={'Click'}
        size={'medium'}
        variant={'primary'}
        onClick={handleOnClick}
      />
      <Button
        label={'Click'}
        size={'large'}
        variant={'primary'}
        onClick={handleOnClick}
      />
      <Button
        label={'Click'}
        size={'small'}
        variant={'secondary'}
        onClick={handleOnClick}
      />
      <Button
        label={'Click'}
        size={'medium'}
        variant={'secondary'}
        onClick={handleOnClick}
      />
      <Button
        label={'Click'}
        size={'large'}
        variant={'secondary'}
        onClick={handleOnClick}
      />
      <Button
        label={'Click'}
        size={'large'}
        variant={'secondary'}
        onClick={handleOnClick}
        isDisabled
      />
    </div>
  )
}

export default Styleguide
