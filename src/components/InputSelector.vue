<template>
    <div class="input_field">
        <div class="tab">
            <button
                v-for="tab in tabs"
                :key="tab"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab"
            >{{ tab }}</button>
        </div>
        <component :is="currentTabComponent" class="window"></component>
    </div>
</template>

<script setup>
import ImportFile from "./ImportFile.vue";
import ManualControl from "./ManualControl.vue";
</script>

<script>
export default {
    components: {
        'tab-file': ImportFile,
        'tab-manual': ManualControl
    },
    data() {
        return {
            tabs: ['File', 'Manual'],
            currentTab: 'File'
        }
    },
    computed: {
        currentTabComponent() {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
}
</script>

<style scoped>
.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
}

.tab-button {
    width: 50%;
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
}

.tab button:hover {
    background-color: #ddd;
}

.tab button.active {
    background-color: #ccc;
}

.input_field {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 600px;
    border: 1px gray solid;
    border-radius: 6px;
    margin: 0 auto;
}

.window {
    height: 555px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.window_opened {
    justify-content: space-around;
}
</style>