import { useState, useMemo } from 'react';
import { mutate } from 'swr';
import { useApi } from '../useApi';
import { ApiService } from '../../services/ApiService';

export function useIndex() {
  const maxTextLength = 125, 
  user = {
    name: 'Hugo Leonardo',
    username: 'hugoleonardodev',  
    picture: "https://github.com/hugo-leonardo-dev.png",
  };
  const [text, setText] = useState(''); // Corrected state initialization
  const tweetsList = useApi('tweets').data;
  const sortedTweetList = useMemo(() => {
     return (tweetsList || []).sort((a, b) => (a.data.date < b.data.date ? 1 : -1));
  }, [tweetsList]);
 
  function onTextChange(e) {
     const text = e.target.value;
     if (text.length <= maxTextLength) {
       setText(text);
     }
  }

  async function sendTweet (){
    await ApiService.post('tweets',{
      data: {
        user, 
        text,
        date: new Date().toISOString(), 
      }
    })
    setText('');
    mutate('tweets');
  }

  return {
    user,
    text,
    onTextChange,
    maxTextLength,
    sendTweet,
    sortedTweetList
  };
}