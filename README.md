Run:
1. gateway
2. backend-service


Call the gateway mesh GraphQL:
```shell
curl --location --request POST 'http://localhost:4005/graphql' \
--header 'content-type: application/json' \
--header 'header: my-header' \
--data-raw '{"query":"query SayHello {\n  hello(name: \"Jawad\")\n}","variables":{}}'
```

Inspect the NestJS application logs:

```shell
[Nest] 66040  - 06/13/2022, 3:51:58 PM     LOG [NestFactory] Starting Nest application...
[Nest] 66040  - 06/13/2022, 3:51:58 PM     LOG [InstanceLoader] AppModule dependencies initialized +42ms
[Nest] 66040  - 06/13/2022, 3:51:59 PM     LOG [RoutesResolver] AppController {/}: +589ms
[Nest] 66040  - 06/13/2022, 3:51:59 PM     LOG [RouterExplorer] Mapped {/hello/:name, GET} route +2ms
[Nest] 66040  - 06/13/2022, 3:51:59 PM     LOG [NestApplication] Nest application successfully started +2ms
{
  myheader: '',
  accept: 'application/json',
  connection: 'keep-alive',
  'user-agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
  'accept-encoding': 'gzip,deflate',
  host: 'localhost:3002'
}

```

myheader value expected to be equilevant to myheader myheaderValue as configured in the middleware.ts

```javascript
export default {
    addTenantIdAndInstanceIdToHeader: next => (root, args, context, info) => {
        context.req.headers.set('myheader', 'myheaderValue');
        return next(root, args, context, info)
    }
};
```

