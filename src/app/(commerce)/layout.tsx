import { ReactNode } from 'react';

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <div>marketing navbar</div>
        {children}
        <footer>marketing footer</footer>
      </body>
    </html>
  );
};

export default MarketingLayout;
