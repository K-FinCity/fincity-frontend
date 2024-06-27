import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import API from '@/services/API';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    error: '/registro',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const data = {
          user: null,
          first_name: profile.given_name.split(' ')[0],
          last_name: profile.family_name.split(' ')[0],
          email: profile.email,
          role: '6676ee3c23f3b664bbf5f50d',
          password: 'gr3at@3wdsGz',
        };

        const response = await API.createNewUser(data);

        return true;
      } catch (e) {
        console.error(e);
        return false;
      }
    },
  },
});
