import path from 'path';

export default {
    entry: './src/app',
    output: {
        path: path.join(process.cwd(), 'public'),
        filename: 'test.js'
    }
};