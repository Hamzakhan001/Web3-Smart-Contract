const {ethers}=require("hardhat")
const {assert}=require("chai")

describe("SimpleStorage",function(){
	let SimpleStorage

	beforeEach(async function (){
		simpleStorageFactory=await ethers.getContractFactory("SimpleStorage")
		SimpleStorage=simpleStorageFactory.deploy()
	})

	it("Should start with favorite number 0",async function (){
		const currentVal=SimpleStorage.retrieve()
		const expectedValue="0"
		assert.equal(currentVal.toString(),expectedValue)



	})
})