import { Client, Account } from 'appwrite';

const client = new Client();
    client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Replace with your Appwrite endpoint
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your project ID
export const account = new Account(client);
export default client;
