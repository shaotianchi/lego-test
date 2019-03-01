import Test from '../components/TestComponents.js'

export default {
  fetchComponents () {
    return [
      {
        id: 1,
        describe: Test,
        view: `
        <template>
          <div>
            show sth
          </div>
        </template>

        <script>
        export default {
          
        }
        </script>

        <style lang="less" scoped>

        </style>
        `
      }
    ]
  }
}