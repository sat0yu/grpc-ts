import { Server, ServerCredentials } from "grpc";
import { sayHello } from "./service";
import { GreeterService } from "./protos/helloworld_grpc_pb";

const grpcServer = new Server();
grpcServer.addService(GreeterService, { sayHello });

grpcServer.bind("localhost:8080", ServerCredentials.createInsecure());
grpcServer.start();
