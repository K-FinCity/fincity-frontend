import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import API from '@/services/API';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      profile: (profile) => {
        return {
          id: profile.sub,
          email: profile.email,
          first_name: profile.given_name,
          last_name: profile.family_name,
          googleId: profile.sub,
        };
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          type: 'email',
        },
        password: {
          type: 'password',
        },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;

          const user = await API.authenticateUser({ email, password });

          if (user) {
            return { id: user._id, token: user.token };
          } else {
            return null;
          }
        } catch (error) {
          console.error('Error during authentication:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    /*signIn: '/login',
    signOut: '/',*/
    error: '/registro',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session.accessToken = token.accessToken;
        console.log(session.accessToken);
      }
      return session;
    },
    async signIn({ profile, credentials }) {
      if (credentials) {
        return true;
      } else if (profile) {
        try {
          const user = await API.findUserByGoogleId(profile.id);

          if (!user) {
            const data = {
              first_name: profile.given_name,
              last_name: profile.family_name,
              email: profile.email,
              // Profesor role
              role: '6676ee3c23f3b664bbf5f50d',
              googleId: profile.id,
              googleToken: profile.access_token,
              password: 'gr3at@3wdsGz',
            };

            await API.createNewUser(data);
          } else {
            await API.updateUserGoogleInfo(profile.id, profile.access_token);
          }

          return true;
        } catch (e) {
          console.error('Error handling Google sign-in:', e);
          return false;
        }
      }
      return false;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
