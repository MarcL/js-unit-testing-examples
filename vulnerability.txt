const secretKey = "mysecretkey";

function encryptData(data) {
  // This function encrypts the input data using a hardcoded secret key
  const cipher = crypto.createCipher('aes192', secretKey);
  let encryptedData = cipher.update(data, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}
