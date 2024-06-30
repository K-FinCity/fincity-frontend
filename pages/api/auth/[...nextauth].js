import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import API from '@/services/API';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize() {
        return true;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 432000, //5days
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/registro',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async signIn({ profile, credentials }) {
      if (credentials) {
        /// REMOVE
        // Lógica de petición a la BD en búsquieda del usuario con match en email y password
        // PUEDE SER: const userFound = await find or email and password match... (<- back)
        const user = {
          password: 'gr3at@3wdsG',
          email: 'moi@prueba.com',
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          console.log(user);
          return user;
        } else {
          return null;
        }
        /// REMOVE
      } else {
        try {
          const data = {
            user: null,
            first_name: profile.given_name.split(' ')[0],
            last_name: profile.family_name.split(' ')[0],
            email: profile.email,
            role: '6676ee3c23f3b664bbf5f50d',
            password: 'gr3at@3wdsGz',
          };

          await API.createNewUser(data);

          return true;
        } catch (e) {
          console.error(e);
        }
      }
    },
  },
});
