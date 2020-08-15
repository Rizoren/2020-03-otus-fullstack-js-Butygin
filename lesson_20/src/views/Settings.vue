<template>
  <div class="container">
    <v-subheader>Settings</v-subheader>
    <v-alert :value="emptyItems" class="pa-1 ma-1" outlined text
             transition="scale-transition" type="warning">Chose even one quiz operator!</v-alert>
    <v-row>
      <v-col cols="12">
        <v-subheader>Quiz time</v-subheader>
        <v-card-text class="pt-0">
          <v-slider step="1" ticks append-icon="15" prepend-icon="1" min="1" max="15"
                    v-model="settings.duration">
            <template v-slot:thumb-label>
              <v-icon dark>{{ changeValue(0) }}</v-icon>
            </template>
          </v-slider>
        </v-card-text>
        <v-subheader>Quiz level</v-subheader>
        <v-card-text class="pt-0">
          <v-slider step="1" ticks append-icon="7" prepend-icon="1" min="1" max="7"
                    v-model="settings.level">
            <template v-slot:thumb-label>
              <v-icon dark>{{ changeValue(1) }}</v-icon>
            </template>
          </v-slider>
        </v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-subheader>Quiz operators</v-subheader>
        <v-card-text class="pt-0">
          <v-combobox v-model="settings.operations" :items="items" chips clearable
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
  data() {
    return {
      icons: ['mdi-clock-outline', 'mdi-rocket-launch-outline'],
      items: ['Add', 'Sub', 'Mul', 'Div', 'Pow'],
      settings: this.$store.state.settings,
      emptyItems: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.settings.operations.length > 0) {
      this.$store.dispatch('setSettings', this.settings);
      next();
    } else {
      this.emptyItems = true;
    }
  },
  methods: {
    changeValue(val) {
      return this.icons[val];
    },
    remove(item) {
      this.settings.operations.splice(this.settings.operations.indexOf(item), 1);
      this.settings.operators = { ...this.settings.operators };
      this.$store.dispatch('setSettings', this.settings);
    },
  },
};
</script>
