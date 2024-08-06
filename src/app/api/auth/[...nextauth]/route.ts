import { RequestInternal, Awaitable, User } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          request: true,
          placeholder: 'Your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          request: true,
          placeholder: 'Your password',
        },
      },

      authorize: function (
        credentials: Record<'email' | 'password', string> | undefined,
        req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>
      ): Awaitable<User | null> {
        throw new Error('Function not implemented.');
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization:{
        params:{
          prompt:'consent',
          access_type:'offline',
          response_type:'code',
        }
      }
    }),

    /**
     *
     * async authorize(credential){
     * if(!credential){
     * return null;
     * }
     * return true
     * }
     */
  ],
});

export { handler as GET, handler as POST };