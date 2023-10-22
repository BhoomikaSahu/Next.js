import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GithubProvider({
        clientId: '53937fd7bbcd3d9b2016',
        clientSecret: '4aa59e915698f8213b5fe06744f8404207aa34d5'
    }),
    GoogleProvider({
        clientId: '281220129728-n76vfqslond196k7djsqac5dasru29l4.apps.googleusercontent.com',
        clientSecret: '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'
    })
  ]
}

export default NextAuth(authOptions)
