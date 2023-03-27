import Billboard from '@/components/Billboard';
import Navbar from '@/components/Navbar';
import SongList from '@/components/SongList';
import useFavorites from '@/hooks/useFavorites';
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
    return{
      redirect:{
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props:{}
  }
}


export default function Home() {
  const { data: song = [] } = useFavorites();

  return (
    <>
      <Navbar active={false}/>
      <Billboard />
      <div className='flex items-center justify-center w-full pb-8 pt-48 lg:pt-0'>
      <SongList title="Favourite's: " data={song}/>
      </div>
    </>
  )
}
