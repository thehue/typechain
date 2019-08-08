import * as CryptoJS from 'crypto-js';
class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    //static method -> 클래스가 생성되지 않았어도 호출할 수 있는 함수
    static calculateBlockHash = (index:number, previousHash:string, data:string, timestamp:number) :string => {
        return CryptoJS.SHA256(index + previousHash + data + timestamp).toString();
    }

    constructor(index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number){
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0,"202020303020","","Hello",123456);
let blockchain: Block[] = [genesisBlock];

//블록체인이 얼마나 긴지 알려주는 함수 -> 블록체인에 블록을 하나 더 추가할 수 있기 때문
const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};