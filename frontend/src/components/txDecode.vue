<template>
  <div class="q-pa-md row items-start q-gutter-md flex flex-center">
    <q-card class="my-card" style="min-width: 1200px">
      <q-card-section class="text-body1">Analyse tx</q-card-section>
      <q-separator />
      <q-card-section>
        <q-form v-model="valid" @submit.prevent="decodeTx" class="q-gutter-md">
          <q-input label="Tx hash" v-model="txHash" />
          <q-btn label="submit" color="primary" type="submit" />
        </q-form>
      </q-card-section>
      <q-card-section>
        {{renderData}}
      </q-card-section>
      <q-card-section>
        {{renderData}}
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import Web3 from 'web3'
export default {
  name: 'txDecode',
  data: () => ({
    valid: false,
    txHash: '',
    renderData: {
      logs: ''
    }
  }),
  computed: {
  },
  methods: {
    getPastEvent () {
    },
    decodeTx () {
      var web3 = new Web3(window.web3.currentProvider)
      web3.eth.getTransactionReceipt(this.txHash)
        .then(result => {
          console.log(result)
          this.renderData.logs = result.logs[0]
          console.log(result.logs[0].address)
          web3.eth.getTransactionReceipt(result.logs[0].address).then(console.log)
        })
    }
  }
}
</script>

<style lang="sass">
.q-card
  height: 350px
</style>
