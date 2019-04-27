import { ServerUnaryCall } from "grpc";
import { HelloRequest, HelloReply } from "./protos/helloworld_pb";

export async function sayHello(
  call: ServerUnaryCall<HelloRequest>,
  callback: any
): Promise<void> {
  const request = call.request;
  const name = request.getName();
  const reply = new HelloReply();
  reply.setMessage(`Hi, ${name}👋`);
  callback(null, reply);
}
