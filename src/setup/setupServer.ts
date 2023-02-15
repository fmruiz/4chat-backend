import * as dotenv from 'dotenv';
dotenv.config();
import {
    Application,
    json,
    urlencoded,
    Response,
    Request,
    NextFunction,
} from 'express';
import https from 'https';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieSession from 'cookie-session';
import HTTP_STATUS from 'http-status-codes';
import compression from 'compression';
import 'express-async-errors';

export class ChatServer {
    private app: Application;

    constructor(app: Application) {
        this.app = app;
    }

    public start(): void {
        this.securityMiddleware(this.app);
        this.standartMiddleware(this.app);
        this.routeMiddleware(this.app);
        this.globalErrorHandler(this.app);
        this.startServer(this.app);
    }

    private securityMiddleware(app: Application): void {
        app.use(
            cookieSession({
                name: 'session',
                keys: ['test1', 'test2'],
                maxAge: 24 * 7 * 3600000,
                secure: false,
            })
        );
        app.use(hpp());
        app.use(helmet());
        app.use(
            cors({
                origin: process.env.URL_LOCAL,
                credentials: true,
                optionsSuccessStatus: 200,
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            })
        );
    }

    private standartMiddleware(app: Application): void {
        app.use(compression());
        app.use(json({ limit: '50mb' }));
        app.use(urlencoded({ extended: true, limit: '50mb' }));
    }

    private routeMiddleware(app: Application): void {}

    private globalErrorHandler(app: Application): void {}

    private async startServer(app: Application): Promise<void> {
        try {
            const httpServer: https.Server = new https.Server(app);
            this.startHttpsServer(httpServer);
        } catch (error) {
            console.log(error);
        }
    }

    private createSocketIO(httpsServer: https.Server): void {}

    private startHttpsServer(httpsServer: https.Server): void {
        httpsServer.listen(
            (process.env.PORT,
            () => {
                console.log(`Server running on PORT: ${process.env.PORT}`);
            })
        );
    }
}
