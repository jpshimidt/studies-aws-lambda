# AWS Lambda com S3 – Estudo Prático

Este repositório contém um exemplo de **função AWS Lambda** escrita em **Node.js** para processar eventos de upload no **Amazon S3**.  

A ideia foi estudar como a Lambda recebe eventos do S3, acessar o objeto carregado e realizar uma validação simples de tamanho.

---

## 📌 O que a função faz?

1. Recebe um **evento do S3** (quando um arquivo é criado no bucket).  
2. Lê o objeto usando o **AWS SDK v3**.  
3. Verifica o tamanho do arquivo:  
   - Se maior que **1 MB**, loga: `"Que objeto grande rsrsrsr lá ele"` e retorna `"Objeto grande"`.  
   - Caso contrário, loga `"Objeto comum"` e retorna `"Objeto Ok"`.  
4. Trata erros e exibe logs caso não consiga buscar o objeto.

---

## 🛠️ Tecnologias Utilizadas
- **AWS Lambda**
- **Amazon S3**
- **Node.js**
- **AWS SDK v3 (`@aws-sdk/client-s3`)**

---

## 📂 Estrutura do Código

```javascript
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
