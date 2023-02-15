import * as dotenv from 'dotenv';
dotenv.config();

class Config {
    public SECRET_KEY_ONE: string | undefined;
    public SECRET_KEY_TWO: string | undefined;
    public DB_PASS: string | undefined;
    public DB_USERNAME: string | undefined;
    public PORT: string | number;
    public URL_LOCAL: string | undefined;
    public NODE_ENV: string | undefined;
    public JWT_TOKEN: string | undefined;

    constructor() {
        this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
        this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
        this.DB_PASS = process.env.DB_PASS || '';
        this.DB_USERNAME = process.env.DB_USERNAME || '';
        this.PORT = process.env.PORT || 5000;
        this.URL_LOCAL = process.env.URL_LOCAL || '';
        this.NODE_ENV = process.env.NODE_ENV || '';
        this.JWT_TOKEN = process.env.JWT_TOKEN || '1234';
    }

    public validateConfig(): void {
        for (const [key, value] of Object.entries(this)) {
            if (value === undefined) {
                throw new Error(`Configuration ${key} is undefined.`);
            }
        }
    }
}

export const config: Config = new Config();
