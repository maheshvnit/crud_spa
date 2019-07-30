// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {

  production: false,
  //mode: 2,    // local-0 / sqlite-1 / remote-2
  remote : true,
  ws_url : "http://localhost:8000",
  bearer_token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI5ZWU0YWU2NmFkNzA0YjMyNmQ4NzM5MWZmNzhhZWRjMjc0ZjhmOGJiZjYwYzgzNDY2OWNhYzRkZTA1N2MyYjMyOGNlZGVjNDQyNjY4MmUxIn0.eyJhdWQiOiIxMSIsImp0aSI6IjI5ZWU0YWU2NmFkNzA0YjMyNmQ4NzM5MWZmNzhhZWRjMjc0ZjhmOGJiZjYwYzgzNDY2OWNhYzRkZTA1N2MyYjMyOGNlZGVjNDQyNjY4MmUxIiwiaWF0IjoxNTY0MjkxMzMxLCJuYmYiOjE1NjQyOTEzMzEsImV4cCI6MTU2NTU4NzMzMSwic3ViIjoiIiwic2NvcGVzIjpbIioiXX0.AO9nGog0qbVrfw5MzYFe1LBUX_7dVoREp7tjyvPz-RzL_XZwslq7meQAFvUBkz2_IUHeqCSWjht9NHccPE9u_GnKgiUutTjZlNT4LMIDEy5rzNlrcMF4C_4Kex8PU5RQwKgZprT9XdsWUTh4Ydzg6H4sumHGDESa4wHxPxFFrCQvSiFluqkEf3yii0f6NLCsUKxetD9SKuY77CTRBB3TkmOuirBZFZNJ6eyPGlVZycG7fesJVCP5gHs9-8zWd09FQhR6I7PtHTs2roMIE265qggpQvjgWsE-UuL9lN5SPvtSOyAe9QN01-lwWAQuT4wSb9-HzYyZVAHfNlIzws4mHaMEhKSL_Zua169E18XVXJ02mcAWNH6HgmwMIz1aP3Vz1X6LgOiIgN6RDzfSxxaN2p781RzMhK3zczyZ-QVWYa-gYlhllt8DgMQey3QskGlcUy-WyuRIM5fkwvTzGwX7kF6ot14tOl7n1cdqgXaP3YXqjLB59Fyh_h58SLioSg_44iJP_KEWinjBtlh2QgBUOxRNtN1apZ_xzMtqgiSM18lB1ESBJLKygnLPx9wiHUYdNtZxm3g2xz3woB68CEutMW65FBBptddXe96P0rTEqQptXXACUb5FhdBSe5MqC-agVxH8KNh5g-raUVLceypFLJ_6OkP65sehxiv7P5F4Hro",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
