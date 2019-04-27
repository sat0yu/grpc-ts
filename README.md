# gRPC-ts

A minimum implementation of gRPC + typescript + webpack environment
( 🙇 Just follow the example in [grpc_tools_node_protoc_ts](https://github.com/agreatfool/grpc_tools_node_protoc_ts) )

# Launch

At first, you need launch the gRPC server

```
npm run build && node dist/bundle.js
```

Then, you can confirm the behavior with the command below in another terminal

```
npx ts-node client.ts
```
