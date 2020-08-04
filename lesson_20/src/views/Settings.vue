<template>
  <div class="container">
    <v-subheader>Settings</v-subheader>
    <v-row>
      <v-col cols="12">
        <v-subheader>Quiz time</v-subheader>
        <v-card-text class="pt-0">
          <v-slider step="1" ticks append-icon="15" prepend-icon="1" min="1" max="15">
            <template v-slot:thumb-label>
              <v-icon dark>{{ changeTime(0) }}</v-icon>
            </template>
          </v-slider>
        </v-card-text>
        <v-subheader>Quiz level</v-subheader>
        <v-card-text class="pt-0">
          <v-slider step="1" ticks append-icon="7" prepend-icon="1" min="1" max="7">
            <template v-slot:thumb-label>
              <v-icon dark>{{ changeTime(1) }}</v-icon>
            </template>
          </v-slider>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-subheader>Quiz operators</v-subheader>
        <v-card-text class="pt-0">
          <v-combobox v-model="chips" :items="items" chips clearable
            label="Your operators" multiple solo>
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip v-bind="attrs" :input-value="selected" close
                @click="select" @click:close="remove(item)">
                <strong>{{ item }}</strong>
              </v-chip>
            </template>
          </v-combobox>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data: () => ({
    icons: [
      'mdi-clock-outline',
      'mdi-rocket-launch-outline',
    ],
    chips: ['Add', 'Sub'],
    items: ['Add', 'Sub', 'Mul', 'Div', 'Pow'],
  }),
  methods: {
    changeTime(val) {
      return this.icons[val];
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
};
</script>
