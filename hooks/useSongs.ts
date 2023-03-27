import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useSongs = () => {
    const { data, error, isLoading } = useSWR('/api/songs', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return{
        data,
        error,
        isLoading,
    }
}

export default useSongs;