import { checkBucketExists, createBucket, uploadFileToS3 } from "../aws-s3.js";

export default async function report(req, res, next) {
  let isExist = await checkBucketExists(process.env.BUCKET);

  if (!isExist) {
    createBucket(process.env.BUCKET);
  }

  const data = await uploadFileToS3(
    process.env.BUCKET,
    "myFile.txt",
    req.body.text
  );

  console.log(data);
  res.locals.data = data;
  res.json(data);
  next();
}
