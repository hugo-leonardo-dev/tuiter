import React from 'react'
import styles  from './Tweet.module.css'
import { DateService } from '../../../../data/services/DateService'

export const Tweet = ({tweet}) => {

  const {user} = tweet;

  return (
    <div className={styles['tweet-container']}>
        <img 
            className={styles['avatar']} 
            src={user.picture} 
            alt={user.name}
        />
        <div className={styles['user']}>
            <span className={styles['user-name']}>{user.name}</span>
            <span className={styles['user-username']}> @{user.username}</span>
            <span className={styles['date']}> - {DateService.relativeTime(tweet.date)}</span>
        </div>
        <div className={styles['tweet-text']}>
            {tweet.text}
        </div>
    </div>
  )
}

export default Tweet