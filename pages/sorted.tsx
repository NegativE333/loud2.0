import Navbar from "@/components/Navbar";
import Sorted from "@/components/Sorted";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

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

const sorted = () => {
    return(
        <div>
            <Navbar active={true}/>
            <div className="flex flex-wrap lg:flex-row flex-col h-full pt-32 lg:pl-8 lg:pr-8">
                    <Sorted title="English" link="/english" img="/images/party.jpg" />
                    <Sorted title="Love" link="/love" img="/images/love.jpg" />
                    <Sorted title="Divine" link="/" img="/images/divine.jpg" />
                    <Sorted title="90's" link="/90s" img="/images/90s.jpg" />
                    <Sorted title="Party" link="/" img="/images/hero.jpg" />
            </div>
        </div>
    )
}

export default sorted;