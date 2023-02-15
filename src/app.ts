import express, { Express } from 'express';
import { config } from './config';
import { ChatServer } from './setup/setupServer';
import dbConnection from './setup/setupDatabase';

class Application {
    public initialize(): void {
        this.loadConfig();
        dbConnection();
        const app: Express = express();
        const server: ChatServer = new ChatServer(app);
        server.start();
    }

    private loadConfig(): void {
        config.validateConfig();
    }
}

const application: Application = new Application();
application.initialize();
