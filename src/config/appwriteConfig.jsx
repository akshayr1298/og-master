import { Client , Account ,Databases} from 'appwrite';
// import { Server } from './config';



const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("645c78f78d44613c4084");

export const account = new Account(client);

//Database 

export const  databases = new Databases(client , "645c78f78d44613c4084");