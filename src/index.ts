import * as CryptoJS from 'crypto-js';
class Block {
    //static method -> 클래스가 생성되지 않았어도 호출할 수 있는 함수
    static calculateBlockHash = (index:number, previousHash:string, data:string, timestamp:number) :string => {
        return CryptoJS.SHA256(index + previousHash + data + timestamp).toString();
    }
    //블록의 구조가 유효한지
    static validateStructure = (aBlock:Block) :boolean => 
        typeof aBlock.index === 'number' && 
        typeof aBlock.hash === 'string' &&
        typeof aBlock.previousHash === 'string' &&
        typeof aBlock.timestamp === 'number' &&
        typeof aBlock.data === 'string';

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

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

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getLatestBlock();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash:string = Block.calculateBlockHash(newIndex, 
        previousBlock.hash, data, newTimestamp );
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
        //제공되는 블록이 유효한지 판단
    
    return newBlock;
};

const getHashForBlock = (aBlock: Block) :string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.data, aBlock.timestamp);

const isBlockValid = (candidateBlock: Block, previousBlock: Block) :boolean => {
    if(!Block.validateStructure(candidateBlock)) {
        return false;
    }else if(candidateBlock.index !== previousBlock.index + 1){
        return false;
    }else if(candidateBlock.previousHash !== previousBlock.hash){
        return false;
    }else if(getHashForBlock(candidateBlock) !== candidateBlock.hash){
        return false;
    }else{
        return true;
    }
};

const addBlock = (candidateBlock:Block) :void => {
    if(isBlockValid(candidateBlock, getLatestBlock())){
        blockchain.push(candidateBlock);
    }
};

export {};