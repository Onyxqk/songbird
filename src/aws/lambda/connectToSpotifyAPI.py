import requests

# client ID is not included in source code for security reasons
CLIENT_ID = "exampleClientId"

# client secret key is not included in source code for security reasons
CLIENT_SECRET = "exampleClientSecretKey"

# spotify authorization URL
AUTH_URL = "https://accounts.spotify.com/api/token"

# lambda function to connect to Spotify Web API; has event and context parameters
# the context parameter is not utilized within this function but is required as part of Lambda
# the query from API Gateway is passed to this function as the rawQueryString property of the event object
def lambda_handler(event, context):
    # send POST request to get Spotify authorization credentials
    auth_response = requests.post(
        AUTH_URL,
        {
            "grant_type": "client_credentials",
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
        },
    )

    # convert response from Spotify to JSON
    auth_response_data = auth_response.json()

    # store the Spotify access token
    access_token = auth_response_data["access_token"]

    # authorization headers
    headers = {"Authorization": "Bearer {token}".format(token=access_token)}

    # base URL for Spotify Web API
    BASE_URL = "https://api.spotify.com/v1/"

    # get the first seven track results from Spotify for a given query and set as the response
    response = requests.get(
        BASE_URL + "search?" + event["rawQueryString"] + "&type=track&offset=0&limit=7",
        headers=headers,
    )

    # return the response in JSON format
    return response.json()
