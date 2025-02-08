import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    let model = '';

    if (event.queryStringParameters
        && event.queryStringParameters.model
        && event.queryStringParameters.model !== "") {
        model = event.queryStringParameters.model;
    }

    const input = {
        Key: {
            ModelID: parseInt(model),
        },
        ConsistentRead: true,
        TableName: "General"
    }

    try {

        const command = new GetCommand(input);
        const response = await docClient.send(command);
        return response;

    } catch (err) {
        console.error("Error", err);
    }
};
