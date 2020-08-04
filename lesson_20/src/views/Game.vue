<template>
  <div class="container">
    <v-row justify="space-between">
      <v-col class="ma-0 pa-1" cols="12" sm="2">
        <v-btn class="ma-1" tile icon outlined color="red" height="60%" width="55" href="#/">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
      <v-col class="ma-0 pa-1" cols="12" sm="2">
        <v-text-field class="centered-input"
                      outlined label="Time" type="time" value="5:00" readonly></v-text-field>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col class="ma-0 pa-1" cols="12" sm="2">
        <v-text-field class="centered-input"
                      outlined label="1st" type="number" value="123"></v-text-field>
      </v-col>
      <v-col class="ma-0 pa-1" cols="12" sm="1">
        <v-text-field class="centered-input"
                      outlined disabled
                      value="*"></v-text-field>
      </v-col>
      <v-col class="ma-0 pa-1" cols="12" sm="2">
        <v-text-field class="centered-input"
                      outlined label="2nd" type="number" value="123"></v-text-field>
      </v-col>
      <v-col class="ma-0 pa-1" cols="12" sm="1">
        <v-text-field class="centered-input"
                      outlined disabled
                      value="/"></v-text-field>
      </v-col>
      <v-col class="ma-0 pa-1" cols="12" sm="2">
        <v-text-field class="centered-input"
                      outlined label="3rd" type="number" value="123"></v-text-field>
      </v-col>
      <v-col class="ma-0 pa-1" cols="12" sm="1">
        <v-text-field class="centered-input"
                      outlined disabled
                      value="="></v-text-field>
      </v-col>
      <v-col class="ma-0 pa-1" cols="12" sm="2">
        <v-text-field class="centered-input"
                      outlined label="Result" type="number" value="123"></v-text-field>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-btn class="ma-1" tile icon outlined color="success" width="10%" height="5vh">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn class="ma-1" tile outlined color="warning" width="30%" height="5vh">Send</v-btn>
      <v-btn class="ma-1" tile icon outlined color="success" width="10%" height="5vh">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
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
export default {
  name: 'Game',
};
</script>

<style scoped>
  .centered-input >>> input {
    text-align: center
  }
</style>
