const { Readable } = require("stream");
const advices = [
  'Take time to know yourself. "Know thyself" said Aristotle. ...',
  "A narrow focus brings big results. ...",
  "Show up fully. ...",
  "Dont make assumptions. ...",
  "Be patient and persistent. ...",
  "In order to get, you have to give. ...",
  "Luck comes from hard work. ...",
  "Be your best at all times.",
];

class StreamFromArray extends Readable {
  constructor(array) {
    super({objectMode: true});
    this.array = array;
    this.index = 0;
  }
  _read() {
    if (this.index <= this.array.length) {
      const chunk = this.array[this.index];
      this.push({index: this.index, data: chunk});
      this.index += 1;
    } else {
      this.push(null);
    }
  }
}

const adviceStream = new StreamFromArray(advices);
adviceStream.on("data", (chunk) => {
  console.log(`Index ${chunk.index} - Data is ${chunk.data}`);
});

adviceStream.on("end", () => {
  console.log("!done chunk");
});
