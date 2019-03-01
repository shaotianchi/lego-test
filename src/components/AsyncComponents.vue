<script>
  export default {
    render (h, cxt) {
      return h(require(`./dir/${this.app}.vue`), {
        props: {
          prop: this.props
        }
      })
    }
  }
</script>