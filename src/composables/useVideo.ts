import moment from 'moment'

const useConverter = () => {
  const convertViews = (number: number) => {
    if (number < 1e3) {
      return number.toString() // No change for numbers less than 1,000
    }
    else if (number < 1e6) {
      // Convert to thousands (e.g., 1051K)
      return `${(number / 1e3).toFixed(0)}K`
    }
    else {
      // Convert to millions (e.g., 1.05M)
      return `${(number / 1e6).toFixed(2)}M`
    }
  }

  const formatTimeDifference = (timestamp: any) => {
    const now = moment();
    const timeDiffInSeconds = now.diff(timestamp, 'seconds');
  
    switch (true) {
      case timeDiffInSeconds < 60:
        return `${timeDiffInSeconds} seconds ago`;
      case timeDiffInSeconds < 3600:
        const minutes = Math.floor(timeDiffInSeconds / 60);
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
      case timeDiffInSeconds < 86400:
        const hours = Math.floor(timeDiffInSeconds / 3600);
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
      case timeDiffInSeconds < 604800:
        const days = Math.floor(timeDiffInSeconds / 86400);
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
      case timeDiffInSeconds < 2419200: // 4 weeks in seconds
        const weeks = Math.floor(timeDiffInSeconds / 604800);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
      case timeDiffInSeconds < 29030400: // 12 months in seconds
        const months = Math.floor(timeDiffInSeconds / 2419200);
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
      default:
        const years = Math.floor(timeDiffInSeconds / 29030400);
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  };

  return { convertViews, formatTimeDifference }
}

export default useConverter
