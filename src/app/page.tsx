import Link from "next/link";

const Home = async () => {
  const datas = await fetch('https://jsonplaceholder.typicode.com/posts');

  const response = await datas.json();
  // return response;
  // console.log(response);
  interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  return (
    <div>
      <p>this is home page</p>
      <br />
      <div className="grid grid-col-3 gap-2">
        {response?.slice(0, 5).map((res: Posts) => (
          <div key={res.id}>{res.title}
          <br />
          <button className="text-white bg-black p-2 rounded ml-2"><Link  href={`/${res.id}`}>details</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
