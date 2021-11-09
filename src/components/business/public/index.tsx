import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Hero from './hero'
import Info from './info'
import Reputation from './reputation'
import Carousel from './carousel'

function PublicProfile(props: { data?: any }): JSX.Element {
  const { data } = props

  return (
    <div className={styles.containerPublicProfile}>
      <Hero data={null} />
      <div className={styles.contentPublicProfile}>
        <Reputation data={null} />
        <Carousel data={null} />
        <Info data={null} />
      </div>
    </div>
  )
}
export default PublicProfile
