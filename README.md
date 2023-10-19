# pi-services
A NodeJS & express app for fetching data from Firebase storage without exposing the API key in front-end code.

## Setup & Run the App
* First install all the dependencies using `npm install`.
* Run the server app with the following using `node index.js` from the root directory of the project.
* Add the environment variables to your local development environment.
    * For use with Visual Studio Code debugger you can add the environment variables to the *launch.json* file as in the following example using the configuration to your firebase > firestore database:
    ```JSON
    {
         "configurations": [{
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/index.js",
            "env": {
                "FB_APP_ID": "<FIRESTORE_APP_ID>",
                "FB_API_KEY": "<FIRESTORE_API_KEY>",
                "FB_AUTH_DOMAIN": "<FIRESTORE_AUTH_DOMAIN>",
                "FB_PROJECT_ID": "<FIRESTORE_PROJECT_ID>",
                "FB_STORAGE_BUCKET": "<FIRESTORE_STORAGE_BUCKET>",
                "FB_MESSAGING_SENDER_ID": "<FIRESTORE_MESSAGING_SENDER_ID>",
                "FB_DATABASE_URL": "<FIRESTORE_URL>",
                "FB_DEFAULT_RECORDS": "24"
            }
        }]
    }
    ```
    * If you are running the app from outside of VSCode then you need to be sure to set these in some other manner or the API calls will fail.

## API Routes
The following describes each of the API routes that are included in this app:

### /
Returns text response of "Hello World". This can be used for easy test to validate if the API is working.

### /hpt
Gets the humidity, air pressure, and temperature readings from the firestore DB. These are recorded by the Node JS app on my Raspberry Pi and is currently running in Berwick, ME.

#### Route Allowed Querystring Parameters
* `count: Number` - The number of HPT records to be returned. The Raspberry Pi records 1 reading per hour, so `24` would get 1 full days worth of records.

### /job_experience
Gets the job experience entries from the firestore DB & their associated job highlights for display in my digital resume.
