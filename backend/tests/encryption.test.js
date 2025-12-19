const { encrypt, decrypt } = require("../utils/cryptoUtils");

test("Should encrypt and then decrypt back to original value", () => {
  const originalText = "1234-5678-9012";
  const encrypted = encrypt(originalText);
  const decrypted = decrypt(encrypted);

  expect(decrypted).toBe(originalText);
  expect(encrypted).not.toBe(originalText);
});
