<template>
  <v-card>
    <v-list>
      <v-list-item to="/category/">
        <v-list-item-content>
          <v-list-item-title class="title categoryList" style="text-align: center">
            <p>Category</p>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list nav>
      <v-list-item-group :color="color">
        <div v-for="(item, i) in categories" :key="i">
          <v-divider />
          <v-list-item :to="'/category/' + item.id">
            <v-list-item-icon>
              <v-icon :color="color" v-text="item.icon" style="margin-left: 20px"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    /*categories: {
            type: Array,
            default: []
        },*/
    color: {
      type: String,
      default: "#54AD81"
    }
  },
  data() {
    return {
      categories: [
        {
          title: "食事",
          id: "meal",
          icon: "mdi-food-fork-drink"
        },
        {
          title: "運動",
          id: "exercise",
          icon: "mdi-arm-flex"
        },
        {
          title: "睡眠",
          id: "sleep",
          icon: "mdi-sleep"
        },
        {
          title: "禁欲",
          id: "abstinence",
          icon: "mdi-corn-off"
        },
        {
          title: "マインド",
          id: "mind",
          icon: "mdi-thought-bubble-outline"
        },
        {
          title: "その他",
          id: "others",
          icon: "mdi-dots-vertical-circle-outline"
        },
      ]
    };
  }
}
</script>

<style scoped lang="scss">
.categoryList p {
  position: relative;
  display: inline-block;
  margin-bottom: 1em;
}
.categoryList p:before {
  content: "";
  position: absolute;
  bottom: -15px;
  display: inline-block;
  width: 60px;
  height: 5px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #54AD81;
  border-radius: 2px;
}
</style>
