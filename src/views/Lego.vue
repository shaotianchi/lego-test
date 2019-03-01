<template>
  <div class="flex">
    <div class="left">
      <div v-for="component in components" :key="component.id" @click="addComponent(component)">
        <img :src="component.describe.desc.icon" :alt="component.describe.desc.name">
        <div>{{component.describe.desc.name}}</div>
      </div>
    </div>
    <div class="mid">
      <component v-for="(component, index) in showingComponents" :key="index" :is="showingComponents[index]"></component>
    </div>
    <div class="flex-column right">
      <div class=""></div>
      <div class="flex-column">
        <div>
          {{componentInfo.desc.name + '设置'}}
        </div>
        <div class="line"></div>
        <div class="setting-zone">
          <div>样式</div>
          <div class="line"></div>
          <div class="flex" v-for="style in Object.keys(componentInfo.styles)" :key="style">
            <div class="desc">{{componentInfo.styles[style].desc}}</div>
            <div v-if="isText(componentInfo.styles[style].type)"><input/></div>
            <div v-else-if="isColor(componentInfo.styles[style].type)">图片选择控件</div>
            <div v-else-if="isGroup(componentInfo.styles[style].type)">
              <div v-for="group in Object.keys(componentInfo.styles[style].groups)" :key="group">{{componentInfo.styles[style].groups[group].name}}</div>
            </div>
          </div>
        </div>
        <div class="setting-zone">
          <div>数据源</div>
          <div class="line"></div>
          <div class="flex" v-for="ds in Object.keys(componentInfo.dataSource)" :key="ds">
            <div class="desc">{{componentInfo.dataSource[ds].desc}}</div>
            <div v-if="isText(componentInfo.dataSource[ds].type)"><input/></div>
            <div v-else-if="isColor(componentInfo.dataSource[ds].type)">图片选择控件</div>
            <div v-else-if="isAPI(componentInfo.dataSource[ds].type)">
              <div>选择数据源</div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</template>

<script scoped>
import TestComponent from '../components/TestComponents.js';
import ComponentAPI from '../api/componentAPI.js';
import componentAPI from '../api/componentAPI.js';
import Vue from 'vue'
import httpVueLoader from 'http-vue-loader';
httpVueLoader.httpRequest = function(component) {
  return Promise.resolve(
    component.view
  )
}

export default {
  data () {
    return {
      componentInfo: TestComponent,
      components: [],
      showingComponents: []
    }
  },
  methods: {
    isText (type) {
      return (type === 'float' || type === 'string')  
    },
    isColor (type) {
      return (type === 'color')  
    },
    isGroup (type) {
      return (type === 'grouped')
    },
    isAPI (type) {
      return (type === 'api')
    },
    addComponent (component) {
      console.log('123')
      this.showingComponents.push(component.describe.desc.key)
      console.log(this.showingComponents);
    }
  },
  mounted () {
    this.components = componentAPI.fetchComponents();
    this.components.forEach(component => {
      // Vue.component(component.describe.desc.key, function (resolve, reject) {
      //   resolve({
      //     template: component.view
      //   })
      // })
      httpVueLoader.httpRequest(component)
    });
    console.log(this.components);
  }
}
</script>

<style>
.line {
  height: 1px;
  background-color: gray;
}

.setting-zone {
  margin-left: 20px;
  margin-top: 30px;
}

.flex {
  display: flex;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.desc {
  margin-right: 10px;
}
.left {
  width: 260px;
}

.mid {
  flex: 1;
}

.right {
  width: 260px;
}
</style>


