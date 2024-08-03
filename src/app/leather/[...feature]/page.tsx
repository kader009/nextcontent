interface Params{
  id:string;
}

const LeatherDetials = ({params}:{params:Params}) => {
  console.log(params);
  return (
    <div>
      <h1>leather details</h1>
    </div>
  );
};

export default LeatherDetials;
