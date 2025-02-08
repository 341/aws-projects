import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, DeleteCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    const { ModelID } = event;

    const input = {
        Key: {
            ModelID: ModelID,
        },
        TableName: "General"
    }

    try {

        const command = new DeleteCommand(input);
        const response = await docClient.send(command);
        return response;

    } catch (err) {
        console.error("Error", err);
    }
};
