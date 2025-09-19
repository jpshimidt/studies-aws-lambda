import { S3 } from '@aws-sdk/client-s3';

const s3Client = new S3({ region: 'sa-east-1' });

export const handler = async (event) => {
  const record = event.Records[0];
  const Bucket = record.s3.bucket.name;
  const Key = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));

  try {
    const getObjectResult = await s3Client.getObject({ Bucket, Key });

    const mega_byte = 1024 * 1024;

    if (getObjectResult.ContentLength > 1 * mega_byte) {
      console.log('Que objeto grande rsrsrsr lá ele');
      return 'Objeto grande';
    }

    console.log('Objeto comum');
    return 'Objeto Ok';

  } catch (err) {
    console.error("Erro ao buscar objeto do S3:", err);
    throw err;
  }
};
