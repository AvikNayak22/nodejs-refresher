import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test1.txt";

//basename() - test1.txt
console.log(path.basename(filePath));

//dirname() - ./dir1/dir2
console.log(path.dirname(filePath));

//extname() - .txt
console.log(path.extname(filePath));

//parse() - {
//   root: '',
//   dir: './dir1/dir2',
//   base: 'test1.txt',
//   ext: '.txt',
//   name: 'test1'
// }
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

//join()
const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath2);

//resolve()
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePath3);
