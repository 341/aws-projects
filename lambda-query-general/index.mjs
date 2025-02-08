import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {
    const command = new QueryCommand({
        TableName: "General",
        KeyConditionExpression:
            "Date.age = :age",
        ExpressionAttributeValues: {
            ':age': {S: "30"},

        },
        ConsistentRead: true,
    });

    const response = await docClient.send(command);
    console.log(response);
    return response;
};
