import { credentials } from "grpc";
import { GreeterClient } from "./protos/helloworld_grpc_pb";
import { HelloReply, HelloRequest } from "./protos/helloworld_pb";

const client = new GreeterClient(
  `localhost:8080`,
  credentials.createInsecure()
);

const request = new HelloRequest();
request.setName("sat0yu");

client.sayHello(request, (_err: any, response: HelloReply) => {
  console.log(response.getMessage());
});
