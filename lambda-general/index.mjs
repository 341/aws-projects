import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient, ScanCommand} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
        const command = new ScanCommand({
            TableName: "General",
        });

        const response = await docClient.send(command);

        return response;
    } catch (err) {
        console.error("Error", err);
    }
};
