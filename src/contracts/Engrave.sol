// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract NameStore {
    // Address of the contract owner
    address public owner;

    // Mapping of addresses to names
    mapping(address => string) public names;

    // Event for storing the name and ETH amount
    event NameStored(address indexed contributor, string name, uint256 amount);
    event Withdrawn(address indexed owner, uint256 amount);

    // Constructor to set the owner
    constructor() {
        owner = msg.sender;  // The account that deploys the contract becomes the owner
    }

    // Function to store a name and receive ETH amount into the contract address
    function storeName(string memory _name) public payable {
        require(msg.value > 0, "ETH amount must be greater than 0");

        // Save the name associated with the address
        names[msg.sender] = _name;

        // Emit the event
        emit NameStored(msg.sender, _name, msg.value);
    }

    // Function to read the name from Contributor.tsx
    function getName(address _contributor) public view returns (string memory) {
        return names[_contributor];
    }

    // Function for the contract owner to withdraw ETH
    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw");
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        // Transfer the entire balance to the owner
        (bool success, ) = owner.call{value: balance}("");
        require(success, "Transfer failed");

        // Emit the event
        emit Withdrawn(owner, balance);
    }
}
