// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/contracts/Engrave.sol";

contract Engrave is Script {
    function run() external {
        vm.startBroadcast();
        new NameStore();
        vm.stopBroadcast();
    }
}
