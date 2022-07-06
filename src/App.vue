<!--
 * @Description: 
 * @Version: 2.0
 * @Author: wuyue.nan
 * @Date: 2022-04-08 11:00:11
 * @LastEditors: wuyue.nan
 * @LastEditTime: 2022-07-06 14:07:16
-->
<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
/* #app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	} */
</style>
