import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext) {
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
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter();
    const {data: user} = useCurrentUser();
    // const json = JSON.stringify(user);
    // const data = JSON.parse(json);
    // const name = data[0].name;
    return(
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <p className="text-white text-2xl text-center mb-4">
                    Hi, {user?.name}
                </p>
                <h1 className="text-3xl md:text-6xl text-white text-center">
                    Welcome to loud
                </h1>
                <p className="text-white text-2xl text-center mt-8">
                    It&apos;s time to turn up the volume and immerse yourself in the world of music! 
                </p>
                <div className="flex items-center justify-center gap-8 mt-10 text-white cursor-pointer hover:font-semibold hover:underline transition">
                    <div onClick={() => router.push('/')}>

                        <h1>Click here to continue.</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles;