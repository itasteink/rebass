import AWS from "aws-sdk"

const endpoint = new AWS.Endpoint("s3.wasabisys.com")
export const storage = new AWS.S3({ endpoint })
