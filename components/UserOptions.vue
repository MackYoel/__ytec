<template>
  <ul class="options">
    <li>
      <a href="#">
        Link 1
      </a>
    </li>
    <li>
      <a href="#">
        Link 3
      </a>
    </li>
  </ul>
</template>

<script>
</script>

<style scoped>
  a {
    display: inline-block;
    line-height: 38px;
    padding: 0 10px;
    text-align: center;
  }

  a:hover {
    background-color: black;
  }
  .options {
    float: right;
    display: inline-flex;
  }

  .options li {
    list-style: none;
  }
</style>