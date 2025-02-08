import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const { ModelID, name, age } = event;

    const input = {
        Item : {
            ModelID: ModelID,
            Data: {
                name,
                age
            }
        },
        TableName: "General"
    }

    const command = new PutCommand(input);

    try {
        const response = await docClient.send(command);

        return response;
    } catch (err) {
        console.error("Error", err);
    }
};
