import GoogleLogin from '@/components/google/google';
import Logout from '@/components/logout/logout';

const SocialLogin = () => {
  return (
    <div className=" justify-center items-center">
      <div>
        <h1 className="text-center text-2xl mt-5 font-bold">
          Welcome to social login..
        </h1>
        <br />
        <br />
        <div className='flex justify-center items-center'>

          <GoogleLogin />
          <Logout/>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
