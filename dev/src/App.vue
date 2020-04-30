<template>
  <main id="app">
    <router-view
      name = "header"
      :mode = "$route.name"/>
      <br><br>
    <router-view/>
  </main>
</template>

<style lang="scss" src="@/styles/index.scss" />
