import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { parseEther } from 'ethers/utils';  // Used to convert ETH to wei
import { useWriteNameStoreStoreName } from '../generated';  // Import the correct function

function EngraveForm() {
  const [name, setName] = useState('');  // State to track the name input
  const [ethAmount, setEthAmount] = useState(0);  // State to track the ETH amount input
  const { isConnected } = useAccount();  // Get the wallet connection status

  const [isLoading, setIsLoading] = useState(false);  // Loading state
  const [isSuccess, setIsSuccess] = useState(false);  // Success state
  const [errorMessage, setErrorMessage] = useState('');  // Error message

  const { writeContractAsync } = useWriteNameStoreStoreName();

  const handleEngrave = async () => {
    try {
      setIsLoading(true);
      setIsSuccess(false);
      setErrorMessage('');

      if (!isConnected) {
        alert('Please connect wallet.');
        setIsLoading(false);
        return;
      }

      if (ethAmount < 0.01) {
        alert('Minimum donation amount is 0.01 ETH');
        setIsLoading(false);
        return;
      }

      if (window.confirm(`Engrave this name?: ${name}`)) {
        await writeContractAsync({
          address: "0x21DAe579bD966EA6c406f23A42bcDC2b18506CFa", // contract address here
          value: parseEther(ethAmount.toString()),
          args: [name],
        });  // Send the transaction
        setIsSuccess(true);
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Error engraving name');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    if (newName.length <= 30) {
      setName(newName);
    } else {
      alert('Name cannot exceed 30 characters');
    }
  };

  return (
    <>
    <div className="engrave-form">
      <div className="window" style={{ maxWidth: '800px' }}>
        <div className="title-bar">
          <div className="title-bar-text">Engrave your name permanently</div>
        </div>


      <div className="engrave-form-content">
        <p>Engrave your name for smart contract as a contributor permanently.(1 address, 1 name)</p>
        
        <div className="field-row-stacked" style={{ width: '200px' }}>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}  // Track name input, restrict to 30 characters
          />
        </div>
        
        <div className="field-row-stacked" style={{ width: '200px' }}>
          <label htmlFor="ethAmount">Donated ETH Amount (0.01~): </label>
          <input
            id="ethAmount"
            type="number"
            value={ethAmount}
            onChange={(e) => setEthAmount(Number(e.target.value))}  // Track ETH amount input
          />
        </div>

        <button className="engrave-button"
          onClick={handleEngrave}
          disabled={isLoading}  // Disable button while transaction is in progress
        >
          {isLoading ? 'Engraving...' : 'Engrave'}
        </button>

        {isSuccess && <p>Successfully engraved the name!</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        </div>
      </div>
      </div>
    </>
  );
}

export default EngraveForm;
