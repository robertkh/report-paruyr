import "dotenv/config";
import AWS from "aws-sdk";

//
AWS.config.update({
  secretAccessKey: process.env.ACCESS_SECRET,
  accessKeyId: process.env.ACCESS_KEY,
  region: process.env.REGION,
});

//💦
export const s3 = new AWS.S3();

//💧 checkBucketExists
export const checkBucketExists = async (bucketName) => {
  const options = {
    Bucket: bucketName,
  };
  try {
    await s3.headBucket(options).promise();
    console.log(`Bucket '${bucketName}' exists.`);
    return true;
  } catch (err) {
    if (err.statusCode === 404) {
      console.log(`Bucket '${bucketName}' does not exist.`);
    } else {
      console.error("Error checking bucket existence:", err);
    }
    return false;
  }
};

//💧
export const createBucket = async (bucketName) => {
  try {
    const params = {
      Bucket: bucketName,
    };
    const data = await s3.createBucket(params).promise();
    console.log(`Bucket '${bucketName}' created successfully.`);
    console.log(data);
  } catch (err) {
    console.error("Error creating bucket:", err);
  }
};

//💧
export const uploadFileToS3 = async (bucketName, fileName, fileContent) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileContent,
    };

    const response = await s3.upload(params).promise();
    const fileUrl = response.Location;
    console.log(
      `File '${fileName}' uploaded to S3 bucket '${bucketName}' successfully.`
    );
    return fileUrl;
  } catch (err) {
    console.error("Error uploading file to S3:", err);
    throw err;
  }
};
