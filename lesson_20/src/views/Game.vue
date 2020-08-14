<template>
  <div class="container">
    <v-row justify="space-between">
      <v-col class="ma-0 pa-1" cols="12" sm="2">
        <v-btn class="ma-1" tile icon outlined color="red" height="60%" width="55" href="#/">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
      <v-col class="ma-0 pa-1" cols="12" sm="2">
        <v-text-field class="centered-input" :value="date.format('mm:ss')"
                      outlined label="Time" readonly>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row class="align-baseline" justify="center" v-if="!endGame">
      <v-col :key="`col${idx}`" v-for="(elem, idx) in expression" class="ma-0 pa-1" cols="12"
             :sm="(idx + 1) % 2 === 0 ? 1 : 2">
        <v-text-field class="centered-input"
                      outlined :label="(idx + 1) % 2 !== 0 ? `${idx + 1}` : ''"
                      :type="(idx + 1) % 2 === 0 ? 'text' : 'number'"
                      :readonly="elem.el.length !== 0"
                      @focus="setInputFocus($event)"
                      :autofocus="elem.el.length === 0"
                      :placeholder="elem.el.length === 0 ? 'unknown' : ''"
                      :value="elem.el"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="align-baseline" justify="center" v-else>
      <v-alert class="pa-5 ma-1" outlined text
               transition="scale-transition" type="warning">Game over...</v-alert>
    </v-row>

    <v-row align="center" justify="center">
<!--      <v-btn class="ma-1" tile icon outlined color="success" width="10%" height="5vh">-->
<!--        <v-icon>mdi-chevron-left</v-icon>-->
<!--      </v-btn>-->
      <v-btn class="ma-1" tile outlined color="warning" width="30%" height="5vh"
             @click="setNext">Send</v-btn>
<!--      <v-btn class="ma-1" tile icon outlined color="success" width="10%" height="5vh">-->
<!--        <v-icon>mdi-chevron-right</v-icon>-->
<!--      </v-btn>-->
    </v-row>
    <v-row align="center" justify="center">
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">7</v-btn>
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">8</v-btn>
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">9</v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">4</v-btn>
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">5</v-btn>
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">6</v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">1</v-btn>
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">2</v-btn>
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">3</v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">Clr</v-btn>
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">0</v-btn>
      <v-btn class="ma-1" tile outlined color="success" width="5vh" height="5vh">,</v-btn>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Game',
  data() {
    return {
      hasBeenFocusedInput: null,
      settings: this.$store.state.settings,
      date: moment(this.$store.state.settings.duration * 60 * 1000),
      interval: null,
      endGame: false,
      examples: this.$store.getters.getExamplesSelf,
      curExample: null,
      curIndex: 0,
    };
  },
  methods: {
    setInputFocus(event) {
      this.hasBeenFocusedInput = event.target;
    },
    setNext() {
      this.curIndex += 1;
      if (this.curIndex < this.examples.length) {
        this.curExample = this.examples[this.curIndex];
      } else {
        this.endGame = true;
      }
    },
  },
  computed: {
    expression: () => {
      const exprToParse = '1+1=2'; // this.curExample.example
      let num = Math.floor(Math.random() * (exprToParse.length - 1 + 1)) + 1;
      const half = Math.random() > 0.5 ? num - 1 : num + 1;
      num = num % 2 === 0 ? half : num;
      const expr = [];
      exprToParse.split('').forEach((el, ind) => {
        let type = 'number';
        if ('+*/-^='.indexOf(el.trim()) >= 0) {
          type = 'operator';
        } else if (ind === num - 1) {
          type = 'unknown';
        }
        expr.push({ el: type !== 'unknown' ? el : '', type });
      });
      return expr;
    },
  },
  mounted() {
    this.curExample = this.examples[this.curIndex];
    this.interval = setInterval(() => {
      if (!this.endGame) {
        this.date = moment(this.date.subtract(100, 'millisecond'));
        this.curExample = this.examples[this.curIndex];
      }
      if (this.date.format('mm:ss') === '00:00') {
        this.endGame = true;
      }
    }, 100);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
  .centered-input >>> input {
    text-align: center
  }
</style>
