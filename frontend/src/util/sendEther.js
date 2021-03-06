import Web3 from 'web3'

let sendEther = function (from, to, amount) {
  console.log(from)
  console.log(to)
  console.log(amount)
  var web3 = new Web3(window.web3.currentProvider)
  web3.eth.sendTransaction({
    from: from,
    to: to,
    value: amount
  })
    .on('transactionHash', function (hash) {
      console.log('Transaction hash : ' + hash) // return Hash of tx
      console.log('Status: Pending') // if value.blockNumber is null => Pending
      web3.eth.getTransaction(hash).then(function (transaction) {
      })
    })
    .on('receipt', function (receipt) {
      console.log('Status: Mined ') // if value.blockNumber is non null => Mined
      console.log(receipt) // Tx is mined, here the receipt
      console.log('Index position  ' + receipt.transactionIndex + '  in the block number  ' + receipt.blockNumber) // Tx's index in the block
      console.log('Cumulated gas :' + receipt.cumulativeGasUsed + ' Gas used ' + receipt.gasUsed)
    })
    .on('confirmation', function (confirmationNumber) {
      if (confirmationNumber === 6) {
        console.log('Status: Confirmed' + confirmationNumber)
      }
      if (confirmationNumber === 24) {
        console.log('Status: Confirmed' + confirmationNumber)
      }
    })
}

export default sendEther
