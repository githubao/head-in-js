/**
 * Created by BaoQiang on 2017/7/5.
 */

const crypto = require('crypto');

function hash_demo() {
    // const hash = crypto.createHash('md5');
    // const hash = crypto.createHash('sha1');
    // const hash = crypto.createHash('sha256');
    const hash = crypto.createHash('sha512');
    hash.update('Hello, world!');
    hash.update('Hello, nodejs!');
    console.log(hash.digest('hex'));
}

function hash_demo2() {
    const hmac = crypto.createHmac('sha256', 'secret-key');
    hmac.update('Hello, world!');
    hmac.update('Hello, nodejs!');
    console.log(hmac.digest('hex'));
}

function hash_demo3() {
    function aesEncrypt(data, key) {
        const cipher = crypto.createCipher('aes192', key);
        let crypted = cipher.update(data, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }

    function aesDecrypt(encrypted, key) {
        // const decipher = crypto.createDecipher('aes192', key);
        // const decipher = crypto.createDecipher('aes128-ecb', key);
        // const decipher = crypto.createDecipher('aes256-cbc', key);
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }

    const data = 'Hello, this is a secret message!';
    const key = 'Password!';
    const encrypted = aesEncrypt(data, key);
    const decrypted = aesDecrypt(encrypted, key);

    console.log('Plain text: ', data);
    console.log('Encrypted text: ', encrypted);
    console.log('Decrypted text: ', decrypted);
}

function hash_demo4() {
    const ming = crypto.createDiffieHellman(512);
    const ming_keys = ming.generateKeys();

    const prime = ming.getPrime();
    const generator = ming.getGenerator();

    console.log('Prime: ', prime.toString('hex'));
    console.log('Generator: ', generator.toString('hex'));

    const hong = crypto.createDiffieHellman(prime, generator);
    const hong_keys = hong.generateKeys();

    const ming_secret = ming.computeSecret(hong_keys);
    const hong_secret = hong.computeSecret(ming_keys);

    console.log('Secret of Xiao Ming: ', ming_secret.toString('hex'));
    console.log('Secret of Xiao Hong: ', hong_secret.toString('hex'));
}

hash_demo4();

