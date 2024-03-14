import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

export default class GRPCService {
    private _client;
    private _supportedLanguages = [
        'en', 'pt', 'es', 'fr', 'el', 'de', 'it', 'ru', 'ja'
    ]

    private constructor(url: string) {
        const packageDefinition = protoLoader.loadSync(`${__dirname}/../infra/protos/text.proto`, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });
        const service: any = grpc.loadPackageDefinition(packageDefinition);
        this._client = new service.TextProcessing(url, grpc.credentials.createInsecure())
    }

    public static create(url: string): GRPCService {
        return new GRPCService(url);
    }

    public processText(language: string, text: string): void {
        let call;
        try {
            if (this._supportedLanguages.includes(language)) {
                switch (language) {
                    default:
                        call = this._client.processEnglishText();
                        break;
                }

                // Handling errors
                call.on('error', (error: Error) => {
                    console.error('Error:', error);
                });

                // Handling responses from the server
                call.on('data', (response: any) => {
                    console.log('Received response:', response);
                });

                call.on('end', () => {
                    console.log('End.')
                });

                call.write({ content: text })

            } else {
                throw new Error('Unsupported language.')
            }
        } catch (e) {
            throw e;
        } // finally {
        //     call.end();
        // }
    }

}