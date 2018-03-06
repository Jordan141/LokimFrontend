const crypto2 = require('crypto2');

const x = async () => {

const password = await crypto2.createPassword();

const {privateKey, publicKey} = await crypto2.createKeyPair();
console.log(publicKey)

/* 
To load a private key from a .pem file call the readPrivateKey function and specify the name of the key file:
*/

//const privateKey = await crypto2.readPrivateKey('key.pem');

/*
To load a public key from a .pub file call the readPublicKey function and specify the name of the key file:
*/
//const publicKey = await crypto2.readPublicKey('key.pub');


const encrypted = await crypto2.encrypt('the native web', password);

const decrypted = await crypto2.decrypt(encrypted, password);
console.log(decrypted)

/*
To encrypt and decrypt using the AES 256 CBC encryption algorithm call the encrypt.aes256cbc and decrypt.aes256cbc functions:
*/
//const encrypted = await crypto2.encrypt.aes256cbc('the native web', password);
// => 6c9ae06e9cd536bf38d0f551f8150065
 
//const decrypted = await crypto2.decrypt.aes256cbc('6c9ae06e9cd536bf38d0f551f8150065', password);
// => the native web

/*
To encrypt and decrypt using the asymmetric RSA encryption algorithm call the encrypt.rsa and decrypt.rsa functions.
Due to technical limitations of the RSA algorithm the text to be encrypted must not be longer than 215 bytes when using keys with 2048 bits:
*/
//const encrypted = await crypto2.encrypt.rsa('the native web', publicKey);

//const decrypted = await crypto2.decrypt.rsa(encrypted, privateKey);

}

x()