import { Suspense } from 'react';

const LoadingPage = () => {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <div>
        <h4>loading...</h4>
      </div>
    </Suspense>
  );
};

export default LoadingPage;
