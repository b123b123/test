<template>
  <div>
    <ta-time-picker use12Hours @change="onChange" />
    <ta-time-picker use12Hours format="h:mm:ss A" @change="onChange" />
    <ta-time-picker use12Hours format="h:mm a" @change="onChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onChange(time, timeString){
      console.log(time, timeString);
    }
  },
}
</script>