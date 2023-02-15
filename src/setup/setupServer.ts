import {
    Application,
    json,
    urlencoded,
    Response,
    Request,
    NextFunction,
} from 'express';
import https from 'https';

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

    private securityMiddleware(app: Application): void {}

    private standartMiddleware(app: Application): void {}

    private routeMiddleware(app: Application): void {}

    private globalErrorHandler(app: Application): void {}

    private startServer(app: Application): void {}

    private createSocketIO(httpsServer: https.Server): void {}

    private startHttpsServer(httpsServer: https.Server): void {}
}
