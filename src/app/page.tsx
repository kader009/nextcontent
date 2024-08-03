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
      <br />
      {response.map((res: Posts) => (
        <div key={res.id}>{res.title}</div>
      ))}
    </div>
  );
};

export default Home;
