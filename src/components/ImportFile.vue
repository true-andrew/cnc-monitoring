<script>
export default {
    name: 'import-file',
    data() {
        return {
            btnInputClicked: true,
            preview: null,
            editableTemp: '',
            disableBtns: false
        }
    },
    methods: {
        fileHandler(ev) {
            this.btnInputClicked = false
            let file = ev.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                this.preview = reader.result.split('\r\n');
                this.preview = this.preview.filter((el) => el.length)
                this.preview = this.preview.map((el) => {
                    const a = {
                        el: el.toUpperCase(),
                        editable: false,
                    }
                    return a;
                })
            }
            reader.readAsText(file);
        },
        editElement(index) {
            this.editClick = true;
            this.preview[index].editable = true;
            this.editableTemp = this.preview[index].el;
        },
        saveEdit(index) {
            this.disableBtns = false;
            this.preview[index].editable = false;
            this.preview[index].el = this.editableTemp;
        },
        disableEditing(index) {
            this.disableBtns = false;
            this.editableImageTemp = null;
            this.preview[index].editable = false;
        },
        sendCode() {
            this.disableBtns = true;
            //connect to Server
        }
    }

}
</script>

<template>
    <div :class="{ window_opened: !btnInputClicked }">
        <label for="file_add" class="add_file_btn" v-if="btnInputClicked">
            Выберите файл
            <input type="file" id="file_add" accept=".txt" @change="fileHandler" />
        </label>
        <ul>
            <li v-for="(p, index) in preview" v-bind:key="p.id">
                <div v-if="!p.editable">
                    <transition appear name="fade">
                        <div class="element">
                            <div>
                                {{ index + 1 }}.
                                <span class="text">{{ p.el }}</span>
                            </div>
                            <div class="button_group">
                                <button
                                    type="button"
                                    v-on:click="editElement(index)"
                                    v-if="!disableBtns"
                                >✎</button>
                                <!--<button type="button" v-on:click="deleteElement(index)">❌</button>-->
                            </div>
                        </div>
                    </transition>
                </div>
                <div v-else>
                    <transition appear name="fade">
                        <div class="element">
                            <input
                                v-model="editableTemp"
                                class="input"
                                @keyup.enter="saveEdit(index)"
                                @keyup.escape="disableEditing(index)"
                            />
                            <div class="button_group">
                                <button @click="saveEdit(index)">💾</button>
                                <button @click="disableEditing(index)">⊗</button>
                            </div>
                        </div>
                    </transition>
                </div>
            </li>
        </ul>
        <button
            class="add_file_btn"
            v-if="!btnInputClicked"
            @click="disableBtns = true"
        >Отправить код</button>
    </div>
</template>


<style scoped>
#file_add {
    display: none;
}

.add_file_btn {
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
}

.add_file_btn:hover {
    background-color: #ddd;
}

ul {
    max-height: 400px;
    overflow-y: auto;
}
.fade-enter-active {
    transition: opacity 0.5s ease;
}
.fade-enter-from {
    opacity: 0;
}

li {
    marker: none;
    padding: 10px;
    text-align: start;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 5px;
}

li:hover {
    transition: 0.3s;
    background-color: #ddd;
}

.element {
    display: flex;
    justify-content: space-between;
}

.button_group {
    display: flex;
}

.button_group button {
    margin-right: 10px;
}
</style>