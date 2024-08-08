import { RequestInternal, Awaitable, User } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
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
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };
