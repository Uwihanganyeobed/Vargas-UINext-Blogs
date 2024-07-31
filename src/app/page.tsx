import Navbar from '@/components/Navbar';
import AuthButton from '@/components/AuthButton';
import FollowMe from '@/components/FollowMe';

const Home = () => {
  return (
    <div className="bg-white flex w-full flex-col h-full">
      <div className="flex items-center h-full">
        <Navbar />
      </div>
      <div className="flex justify-end p-4">
        <AuthButton />
      </div>
      <FollowMe />
    </div>
  );
};

export default Home;
