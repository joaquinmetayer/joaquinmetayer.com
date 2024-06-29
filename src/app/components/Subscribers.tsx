'use client'
import { useEffect, useState } from 'react';

const apiKey = process.env.YOUTUBE_API_KEY;
const channelId = 'UChepHxgZmukOteW-6c796wQ';

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState(0);

  useEffect(() => {
    async function fetchSubscribers() {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`);
        const data = await response.json();
        
        if (data.items.length === 0) {
          console.log('Channel not found');
          setSubscribers(0);
        } else {
          setSubscribers(data.items[0].statistics.subscriberCount);
        }
      } catch (error) {
        console.error('Error fetching data from YouTube API', error);
        setSubscribers(0);
      }
    }

    fetchSubscribers();
  }, []);

  return subscribers
}
