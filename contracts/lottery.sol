pragma solidity  ^0.4.26;

contract Lottery{
    address public Manager;
    address[] public players;
    constructor()public{
        Manager = msg.sender;
    }
    function enter()public payable  {
        require(msg.value > .01 ether);//used for validation, pass a boolean expression inside the require function call if returnes false then no changes will be made to the contract, if true then the code inside the block contiunes to run as usual
        players.push(msg.sender);
    }
    function random()public  view returns (uint) {
        bytes32 output = keccak256(abi.encodePacked(block.difficulty, now, players));
        return uint(output);
      // return  uint(keccak256(block.difficulty , now , players));
    }
    function pickWinner() public{
        uint index = random() % players.length;
        address player = players[index];
        player.transfer(address(this).balance);
    }
}