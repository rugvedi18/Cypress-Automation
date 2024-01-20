// Instructions for generating Client ID, Client Secret, and Auth Code:
// 1. Navigate to GitHub settings -> Developer settings -> OAuth Apps -> New OAuth App.
// 2. Provide the application name and URL, then click on "Register." Save the generated Client ID and Client Secret.
// 3. Open a web browser and visit https://github.com/login/oauth/authorize?client_id={client-id}, replacing {client-id} with your actual Client ID.
// 4. Upon redirection to your specified URL, you will find a parameter "code={some code}", which serves as your Auth Code. Save this code for authentication purposes.

// Instructions for generating Auth Token:
// 1. Utilize the provided client ID, client secret, and code to obtain the authentication token in Postman.
// For e.g https://github.com/login/oauth/access_token?client_id={client id}&client_secret={client secret}&code={auth code}
