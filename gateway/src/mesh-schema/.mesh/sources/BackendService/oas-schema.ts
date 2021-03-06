// @ts-nocheck
export default [
  {
    "openapi": "3.0.0",
    "paths": {
      "/hello/{name}": {
        "get": {
          "operationId": "AppController_findOneRole",
          "parameters": [
            {
              "name": "name",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            },
            "404": {
              "description": ""
            }
          },
          "tags": [
            "hello"
          ]
        }
      }
    },
    "info": {
      "title": "Backen service",
      "description": "Backend service",
      "version": "1.0",
      "contact": {}
    },
    "tags": [
      {
        "name": "Backend",
        "description": ""
      }
    ],
    "servers": [],
    "components": {
      "schemas": {}
    }
  }
]