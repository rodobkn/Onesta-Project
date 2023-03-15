import { NextPage } from 'next';

interface Props {}

const Home: NextPage<Props> = () => {
  return (
    <div className="bg-slate-400">
      <div className="text-3xl text-center font-bold underline max-w-3xl mx-auto px-0">
        Hello World!
      </div>
    </div>
  );
};

export default Home;
