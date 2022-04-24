<template>
  <div>
    <ul class="flex flex-wrap text-md font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
      <li v-for="tab in tabs">
        <button @click="changeSelectedTab(tab.action)"
          class="inline-block px-10 py-4 fade text-xl text-white bg-primary rounded-t-md after:border-0" :class="{
            'bg-opacity-30': !isSelectedTab(tab.action),
            'bg-opacity-90': isSelectedTab(tab.action),
          }">
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <div class="tab-content bg-primary bg-opacity-90 rounded-b-md" id="tabs-tabContent">
      <div class="tab-pane fade text-white" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
        <component :is="getComponentTab()?.component || 'div'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import { AuthActions } from '../../enums/auth-actions.enum';
import { TabData } from '../../interfaces/tab-data.interface';

interface TabProps {
  tabs: TabData[];
  selected: string;
}

const props = defineProps<TabProps>();

const tabs: TabData[] = props.tabs;

const getSelectedTab =
  tabs.find((tab) => tab.action === props.selected)?.action || tabs[0].action;

const selectedTab = ref(getSelectedTab);

const isSelectedTab = (action: AuthActions): boolean => action === selectedTab.value;

const changeSelectedTab = (action: AuthActions) => {
  selectedTab.value = action;
};

const getComponentTab = () => {
  return tabs.find((tab) => tab.action === selectedTab.value);
};
</script>

<style lang="scss" scoped>
</style>
