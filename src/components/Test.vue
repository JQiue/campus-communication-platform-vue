<template>
  <div>
    测试组件
    <el-input v-model="msg"></el-input>
    <el-button @click="sendMsg">发送</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      ws: null,
    };
  },
  created() {
    this.ws = new WebSocket("ws://127.0.0.1:3001");
    this.ws.onopen = () => {
      console.log("连接成功");
    };
    this.ws.onmessage = (event) => {
      console.log(event.data);
    };
  },
  methods: {
    sendMsg() {
      this.ws.send(JSON.stringify({ sourceID: 1, target: 2, msg: this.msg }));
      // this.$socket.emit("sent-msg-event", {
      //   msg: this.msg,
      // });
    },
  },
};
</script>

<style>
</style>