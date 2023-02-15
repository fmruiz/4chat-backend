import express, { Express } from 'express';
import { ChatServer } from './setup/setupServer';
import dbConnection from './setup/setupDatabase';

class Application {
    public initialize(): void {
        dbConnection();
        const app: Express = express();
        const server: ChatServer = new ChatServer(app);
        server.start();
    }
}

const application: Application = new Application();
application.initialize();
