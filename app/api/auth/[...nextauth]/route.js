import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


export const  authOptions={
    
    providers: [
        CredentialsProvider({
          name:'Credentials',
          credentials: {},
          async authorize(credentials, authorizeOptions) {
            const { isSignUp } = authorizeOptions; // Check if it's a signup action
        
            if (isSignUp) {
              // Handle user creation logic
              const newUser = await createUser(credentials);
              // Return the user object or an identifier for the new user
              return newUser;
            } else {
            if(username.length <= 0 || password.length <=0){
              return null
            }
            // Add logic here to look up the user from the credentials supplied
            const { username,password } = credentials;
            console.log(username, password);
            const user = { id: "1", name: username, Password: password}
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              return null
      
            }
          }
          }
        }),
      ],
      pages:{
        signIn:'/login',
      }
    }

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }