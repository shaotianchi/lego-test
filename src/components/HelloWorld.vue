<template>
  <div class="hello">
    <div>
      {{fingerprint}}
    </div>
    <pre>
      {{components}}
    </pre>
  </div>
</template>

<script>
import FP2 from 'fingerprintjs2';
export default {
  name: 'HelloWorld',
  data () {
    return {
      fingerprint: '',
      components: ''
    }
  },
  mounted () {
      FP2.getV18({excludes: {
        // userAgent: true,
        // sessionStorage: true,
        // localStorage: true,
        // indexedDb: true,
        // addBehavior: true,
        // openDatabase: true,
        // adBlock: true,
        // hasLiedLanguages: true,
        // hasLiedResolution: true,
        // hasLiedOs: true,
        // hasLiedBrowser: true,
        // touchSupport: true,
        // audio: true,
        // deviceMemory: true,
        // hardwareConcurrency: true,
        // doNotTrack: true,
        // plugins: true,
        // canvas: true,
        // webgl: true,
        // enumerateDevices: true
      }}, (result, components) => {
        // result is murmur hash fingerprint
        // components is array of {key: 'foo', value: 'component value'}
        console.log(components);
        this.components = JSON.stringify(components, null, 4);
        this.fingerprint = result;
        console.log(result);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
