<template>
	<ul>
		<li class="clearfix">
		  <div class="message" :class="{ self, 'other': !self }">
		    Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? 
		  	<div class="date">13:00</div>
		  	<div v-if="corner" class="corner" :class="{ 'corner-self': self, 'corner-other': !self }"></div>
		  </div>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		self: {
			type: Boolean,
			default: true
		},
		corner: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style scoped>
ul {
	margin: 0;
	list-style: none;
	margin-bottom: 2px;
}
.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}
.message {
	word-wrap: break-word;
  line-height: 26px;
  font-size: 13.6px;
  font-weight: 400;
  color: #222222;
  border-radius: 7.5px;
  max-width: 75%;
  border-radius: 5px;
  line-height: 19px;
  padding: 6px 7px 12px 9px;
  position: relative;
}
.self {
	float: right;
	background-color: #f2e5ff;
}

.other {
	float: left;
	background-color: #f7f7f7;
}

.corner {
  position: absolute;
  top: 0;
  width: 0px;
  height: 0px;
}

.corner-self {
	border-bottom: 12px solid transparent;
  border-left: 12px solid #f2e5ff;
  right: -12px;
}
.corner-other {
	border-left: 12px solid transparent;
  border-top: 12px solid #f7f7f7;
  left: -12px;
}

.date {
  font-size: 11px;
  text-align: right;
  color: rgba(0, 0, 0, 0.45);
  position: absolute;
  right: 7px;
  bottom: 0;
  line-height: 1.4;
}

</style>
