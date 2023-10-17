# pi-services
A NodeJS & express app for fetching data from Firebase storage without exposing the API key in front-end code.

## Setup & Run the App
* First install all the dependencies using `npm install`.
* Run the server app with the following using `node index.js` from the root directory of the project.
* Add the environment variables to your local development environment.
    * For use with Visual Studio Code debugger you can add the environment variables to the *launch.json* file as in the following example:
    ```JSON
    {
         "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/index.js",
            "env": {
                "FB_APP_ID": "<YOUR_FIRESTORE_APP_ID>",
                "FB_API_KEY": "<YOUR_FIRESTORE_API_KEY>",
                "FB_AUTH_DOMAIN": "...",
                "FB_PROJECT_ID": "...",
                "FB_STORAGE_BUCKET": "...",
                "FB_MESSAGING_SENDER_ID": "...",
                "FB_DATABASE_URL": "<URL_OF_FIRESTORE_INSTANCE>",
                "FB_DEFAULT_RECORDS": "24"
            }
        }
    ]
    }
    ```