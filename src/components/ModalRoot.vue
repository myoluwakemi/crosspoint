<template>
  <Modal :isOpen="!!component" :title="title" @onClose="handleModalClose" :modal-width="modalWidth">
    <component :is="component" @onClose="handleClose" v-bind="props" />
  </Modal>
</template>

<script>
import Modal from "@/Commons/Modal";
import {ModalBus} from "@/eventBus";

export default {
name: "ModalRoot.vue",
  components: {Modal},
  data () {
    return {
      component: null,
      title: '',
      props: null,
      closeOnClick: true,
      modalWidth: "30rem"

    }
  },
  created() {
  ModalBus.$on('open', ({ component, title= '', modalWidth = "30rem", props = null, closeOnClick = true})=>{
    this.component = component
    this.title = title
    this.props = props
    this.closeOnClick = closeOnClick
    this.modalWidth = modalWidth

  })
    document.addEventListener('keyup', this.handleKeyup)
  },
  beforeDestroy() {
    document.removeEventListener('keyup', this.handleKeyup)
  },
  methods: {
  handleModalClose(force = false){
    if(!this.closeOnClick && !force) return
    this.handleClose()
  },
    handleClose () {
      this.component = null
    },
    handleKeyup (e) {
      if (e.keyCode === 27) this.handleClose()
    }

  },

}
</script>

<style scoped>

</style>