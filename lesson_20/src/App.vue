<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right>
      <v-list dense>
        <v-list-item href="#/" link>
          <v-list-item-action>
            <v-icon>mdi-gamepad-variant-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Start</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="#/settings" link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="cyan" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>Calculate in Mind</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height align-start" fluid>
        <router-view/>
      </v-container>
    </v-main>

    <v-footer color="cyan" app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2020 Vladimir Butygin, OTUS student.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutsDemosBaselineFlipped',
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>
