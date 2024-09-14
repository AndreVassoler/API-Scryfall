"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cluster = require('cluster');
const os = require('os');
async function bootstrap() {
    if (cluster.isMaster) {
        const numCPUs = os.cpus().length;
        console.log(`Número de CPUs disponíveis: ${numCPUs}`);
        console.log(`Master ${process.pid} está rodando`);
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} morreu. Iniciando novo worker...`);
            cluster.fork();
        });
    }
    else {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.useGlobalPipes(new common_1.ValidationPipe());
        await app.listen(3000);
        console.log(`Worker ${process.pid} está rodando na porta 3000`);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map