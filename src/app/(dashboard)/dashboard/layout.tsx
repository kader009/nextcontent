import {ReactNode} from 'react';

const layout = ({children}:{children : ReactNode}) => {
  return (
    <div>
      <div>this navbar</div>
      {children}
      <footer>this is footer</footer>
    </div>
  );
};

export default layout;