import { Text, Page } from "@vercel/examples-ui";
import { NextPage } from "next";
import { Chat } from "../components/Chat";
import { initFirebase } from "../firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import router, { useRouter } from "next/router";
import Logo from '../public/images/logo.gif'
import GoogleLogo from '../public/images/google-logo.png'
import  Image  from 'next/image'



const Home: NextPage = () => {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if(loading) {
    return <div>Loading...</div>
  }

  if (user) {
    router.push('/home')
    return <div>Loading...</div>
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  }



  return (
    <div className='w-full h-screen overflow-hidden bg-[#fff] flex justify-center items-center flex-col space-y-10'>
        <div className='flex flex-col items-center space-x-4'>
            <Image src={Logo} width={100} height={100} priority={true} quality={100} alt="" />
            <h1 className='text-5xl font-bold text-red-500 mt-5'>እሳት AI</h1>
        </div>
        <div>
            <button className='flex items-center text-3xl bg-white text-black px-5 py-2 rounded-md hover:bg-[#e2e2e2] transition-colors font-semibold space-x-3' onClick={signIn}>
            <Image src={GoogleLogo} width={40} height={40} priority={true} quality={100} alt="" />
            </button>
        </div>
    </div>
  );
};

export default Home;
