const fs = require(`fs`);
const randomstring = require("randomstring");


let list = [
    "a8eb79d7c5c2d3448cc2b18907b52a172e439a9d2c008bdc6a6d5b3de91f3aa1",
    "3fcb14802d96ba834085bb13344c768fde9765f2203cee4f415079d101496485",
    "07988cd3b74c0e943febcb5cf29e98edb99ed657b7a8a2a0284f6d3fbf0ab17d",
    "fc23576dba59065dfbe9a29b6b9f128e3f5e0a6861099698c04143416618716e",
    "5bc52c6e06d542f91249a53f9928f9ed09e1ed49a05098d007f8bf9e9996af7f",
    "b0f93445e7b9657d4ab3a085592ad075f10e828aaeff7ae50f69bd5222a34552",
    "82def6a208cdaab9a1dbe0dfa8a52450d35466f7afc4b819763df8c10ff6bd6a",
    "055cf10b42bb65e497cb4cce0b47212a391db993a4b556f0bc8952382e67993d",
    "d1254503e85a4a4d86bfe8378fcaa60007ee8c62fdb9c8b43dda09d8f638f5f8",
    "00af8d5d675238c874646384862c192b55469c51f071f840393a6d1d07635896",
    "189f34dd93f0f048b03ee1dcf3736ff39a5f2cd506042298a8835a4c1924fc64",
    "579f5697f7e499e8c881f8b87ca004ff606a66c4c3f9e07fbf7bdd48f356ac56",
    "ffd0dce43946154d449a855677096edecbf645a3b77efb228ec46ed11ac5a3c7",
    "40f3c49c7c47b5146cb155a8d07e2ebe2f6ffcc94849cbc126ce0ca2fcd9b9b1"
];


let config = [];
let keys = [];
for (let i = 0; i < list.length; i++) {
    let url = "http://135.181.195.242:80"
    let api_key = randomstring.generate({
        length: 12,
        charset: 'alphabetic'
    });
    keys.push(api_key)
    config.push({
        api_key: api_key,
        private_key: list[i],
        node: url
    })
}
console.log(keys);

fs.writeFileSync("./config.json", JSON.stringify(config));
fs.writeFileSync("./keys.json", JSON.stringify(keys));
