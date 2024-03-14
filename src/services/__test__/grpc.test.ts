import GRPCService from "../GRPCService";

describe('Um test aí', () => {
    it ('should work', () => {
        const service = GRPCService.create('localhost:50051');
        service.processText('en', 'This is a text that is expected to be processed.');
    });
});