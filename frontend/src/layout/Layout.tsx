import { ReactNode } from 'react';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return <div className='bg-base100'>{children}</div>;
};

export default Layout;