// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {NameStore} from "../src/contracts/Engrave.sol";

contract NameStoreTest is Test {
    NameStore public nameStore;

    // オーナー（テストデプロイしたアカウント）と一般ユーザーのアカウントを作成
    address public owner = vm.addr(1);
    address public user = vm.addr(2);

    // setup関数でコントラクトをデプロイ
    function setUp() public {
        // ownerアカウントとuserアカウントに十分なETHを設定
        vm.deal(owner, 10 ether);
        vm.deal(user, 10 ether);

        // コントラクトをデプロイし、オーナーとして設定
        vm.startPrank(owner);
        nameStore = new NameStore();
        vm.stopPrank();
    }

    // Nameをstoreし、ETHが送金されるテスト
    function test_StoreName() public {
        vm.startPrank(user);  // userとして実行
        string memory name = "Alice";

        // storeName関数を呼び出して1 ETHを送る
        nameStore.storeName{value: 1 ether}(name);
        
        // 名前が正しく保存されたか確認
        assertEq(nameStore.getName(user), name);
        
        // コントラクトに送金されたETHが正しいか確認
        assertEq(address(nameStore).balance, 1 ether);

        vm.stopPrank();
    }

    // オーナーがETHを引き出すテスト
    function test_WithdrawByOwner() public {
        vm.startPrank(user);  // 一般ユーザーが最初にETHを送る
        string memory name = "Bob";
        uint256 sendValue = 1 ether;

        nameStore.storeName{value: sendValue}(name);
        vm.stopPrank();

        // withdrawをテスト
        vm.startPrank(owner);  // オーナーとして実行
        uint256 initialBalance = address(owner).balance;  // 正確に残高を取得
        nameStore.withdraw();

        // オーナーの残高が増えているか確認
        assertEq(address(owner).balance, initialBalance + sendValue);

        // コントラクトの残高がゼロになっているか確認
        assertEq(address(nameStore).balance, 0);

        vm.stopPrank();
    }

    // 一般ユーザーがwithdrawを実行できないことをテスト
    function testFail_WithdrawByNonOwner() public {
        vm.startPrank(user);  // userとして実行
        string memory name = "Charlie";
        uint256 sendValue = 1 ether;

        nameStore.storeName{value: sendValue}(name);
        vm.stopPrank();

        // 一般ユーザーがwithdrawを試みる（失敗を期待）
        vm.startPrank(user);
        nameStore.withdraw();
        vm.stopPrank();
    }
}
