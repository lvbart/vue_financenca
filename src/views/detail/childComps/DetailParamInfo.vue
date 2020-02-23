<template>
  <div>
    <table v-for="(table, index) in itemParams.rule.tables" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{td}}
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    itemParams: {
      type: Object,
    }
  }

}
</script>

<style>

</style>
