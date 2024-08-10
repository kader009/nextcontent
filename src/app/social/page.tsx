import GoogleLogin from "@/components/google/google";


const SocialLogin = () => {
  return (
    <div className='flex justify-center items-center'>
      <div>

      <h1 className="text-center text-2xl mt-5 font-bold">
        Welcome to social login..
      </h1>
      <br />
      <GoogleLogin/>
      </div>
    </div>
  );
};

export default SocialLogin;
