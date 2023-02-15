# **Chat-App**

This application is created with vite react and supabase for data storage and authentication

## How to start?

1. fill data in .env file (Supabase_URL, Anon_Key)
2. Configuring supabase with github provider authenticate
3. configure supabase tables (chat, messages, users)

![Image tables supabase](./Previews/tables-supabase.png)

4. in the chats table it should contain `id`, `created_at`, `user_id (Array)` and `users_name (Array)`
5. in the messages table it should contain `id`, `created_at`, `author_id`, `author_name`, `chat_id`, `content`
6. in the users table it should contain `id`, `email`, `raw_user_meta_data (username, avatar_url)`
7. start server with command `npm run dev`

# Version Desktop

![Image Preview Desktop Landing](./Previews/Landing-Desktop.png)
![Image Preview Desktop Authenticate](./Previews/Authenticate-Desktop.png)
![Image Preview Desktop Register](./Previews/Register-Desktop.png)
![Image Preview Desktop Login](./Previews/Login-Desktop.png)
![Image Preview Desktop Chat](./Previews/Chat-Desktop.png)
![Image Preview Desktop Chat 2](./Previews/Chat-2-Desktop.png)

# Version Mobile

![Image Preview Mobile Landing](./Previews/Landing-Mobile.png)
![Image Preview Mobile Authenticate](./Previews/Authenticate-Mobile.png)
![Image Preview Mobile Register](./Previews/Register-Mobile.png)
![Image Preview Mobile Login](./Previews/Login-Mobile.png)
![Image Preview Mobile Chat](./Previews/Chat-Mobile.png)
![Image Preview Mobile Chat 2](./Previews/Chat-2-Mobile.png)
