const ImageKit = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

async function uploadFile(buffer) {
  const result =  await imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: Date.now() + "-post.jpg",
    folder:"imagekit-upload-api"
  })
  return result;
}

module.exports = uploadFile;