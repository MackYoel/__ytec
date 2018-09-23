<template>
	<section class="input-container">
		<textarea rows="1" type="text" v-model="message.text" placeholder="Escribe un mensaje aquí"></textarea>
		<div>
			<button class="button attachment">
				<font-awesome-icon :icon="['fal', 'paperclip']" />
			</button>
		</div>
		<div>
			<button class="button primary small" @click="send">Enviar</button>
		</div>
	</section>
</template>

<script>
export default {

	data() {
		return {
			message: {}
		}
	},

	mounted() {
		document.querySelector('textarea').addEventListener('keydown', autosize)
		function autosize() {
		  let el = this
		  setTimeout(function() {
		  	if (el.scrollHeight <= 100) {
			    el.style.cssText = 'height: auto;'
			    el.style.cssText = `height: ${el.scrollHeight + 2}px;`
		  	}
		  }, 0)
		}
	},

	methods: {
		send() {
			this.$emit('send-message', this.message)
			this.message = {}
		}
	}
}
</script>

<style scoped>
.input-container div {
	align-self: flex-end;
}
.input-container {
	background-color: #ededed;
	position: absolute;
	right: 0;
	left: 0;
	bottom: 0;
	padding: 5px 10px;

	display: flex;
	justify-content: center;
	align-items: center;
}

.input-container textarea {
	padding: 10px 12px;
	overflow: hidden;
	margin: 0;
	resize: none;
}
.button {
  font-size: 12px;
  line-height: 3;
  padding: 0 1em;
}
.button:hover {
	background-color: var(--color-1);
}
.button:active {
	opacity: .7;
}
.attachment {
  font-size: 20px !important;
  line-height: 2.1;
  padding: 0 12px;
}
</style>