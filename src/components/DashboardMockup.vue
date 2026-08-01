<script setup lang="ts">

withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: 'داشبورد عملیات دارایی',
  subtitle: 'نمای لحظه‌ای وضعیت تجهیزات و عملیات نگهداری سازمان'
})

</script>


<template>

<div class="rounded-2xl border border-white/10 bg-[#071522] p-4 shadow-xl">


  <!-- HTML Header -->

  <div class="mb-4 flex items-center justify-between">

    <div>
      <h3 class="text-sm font-semibold text-white">
        {{ title }}
      </h3>

      <p class="text-xs text-slate-400">
        {{ subtitle }}
      </p>
    </div>


    <div
      class="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1"
    >
      <span class="h-2 w-2 rounded-full bg-emerald-400"/>
      <span class="text-xs text-blue-300">
        Live
      </span>
    </div>

  </div>



<svg
viewBox="0 0 760 420"
class="w-full rounded-xl"
>


<defs>


<linearGradient id="background"
x1="0"
x2="1">

<stop
offset="0%"
stop-color="#081728"
/>

<stop
offset="100%"
stop-color="#0B1F38"
/>

</linearGradient>


<linearGradient id="blueLine">

<stop
offset="0%"
stop-color="#0B84F3"
/>

<stop
offset="100%"
stop-color="#38BDF8"
/>

</linearGradient>


<linearGradient id="area">

<stop
offset="0%"
stop-color="#0B84F3"
stop-opacity=".35"
/>

<stop
offset="100%"
stop-color="#0B84F3"
stop-opacity="0"
/>

</linearGradient>


</defs>




<!-- Canvas -->

<rect
width="760"
height="420"
rx="20"
fill="url(#background)"
/>



<!-- ================= KPI ROW ================= -->


<!-- Card 1 -->

<rect
x="20"
y="20"
width="170"
height="100"
rx="16"
fill="#10243C"
/>


<!-- icon -->

<circle
cx="55"
cy="55"
r="18"
fill="#0B84F3"
fill-opacity=".15"
/>


<!-- factory icon -->

<path
d="M45 63V52L55 46L65 52V63H45Z"
fill="none"
stroke="#38BDF8"
stroke-width="2"
/>


<rect
x="45"
y="88"
width="80"
height="10"
rx="5"
fill="#E2E8F0"
/>




<!-- Card 2 -->

<rect
x="210"
y="20"
width="170"
height="100"
rx="16"
fill="#10243C"
/>


<circle
cx="245"
cy="55"
r="18"
fill="#22C55E"
fill-opacity=".15"
/>


<path
d="M235 55L242 62L255 47"
fill="none"
stroke="#22C55E"
stroke-width="3"
/>


<rect
x="235"
y="88"
width="75"
height="10"
rx="5"
fill="#E2E8F0"
/>





<!-- Card 3 -->

<rect
x="400"
y="20"
width="170"
height="100"
rx="16"
fill="#10243C"
/>


<circle
cx="435"
cy="55"
r="18"
fill="#60A5FA"
fill-opacity=".15"
/>


<rect
x="426"
y="45"
width="18"
height="22"
rx="3"
fill="none"
stroke="#60A5FA"
stroke-width="2"
/>


<rect
x="425"
y="88"
width="65"
height="10"
rx="5"
fill="#E2E8F0"
/>





<!-- Card 4 -->

<rect
x="590"
y="20"
width="150"
height="100"
rx="16"
fill="#10243C"
/>


<circle
cx="625"
cy="55"
r="18"
fill="#EF4444"
fill-opacity=".15"
/>


<path
d="M625 45L635 65H615L625 45Z"
fill="none"
stroke="#EF4444"
stroke-width="2"
/>


<rect
x="615"
y="88"
width="50"
height="10"
rx="5"
fill="#E2E8F0"
/>





<!-- ================= CHART ================= -->


<rect
x="20"
y="145"
width="450"
height="250"
rx="18"
fill="#0D2037"
/>


<!-- chart lines -->

<path
d="
M55 335
C120 300
170 315
230 270
C300 220
360 250
430 210
L430 350
L55 350Z"
fill="url(#area)"
/>



<path
d="
M55 335
C120 300
170 315
230 270
C300 220
360 250
430 210"
fill="none"
stroke="url(#blueLine)"
stroke-width="5"
stroke-linecap="round"
/>



<circle
cx="230"
cy="270"
r="6"
fill="#38BDF8"
/>


<circle
cx="430"
cy="210"
r="6"
fill="#38BDF8"
/>





<!-- ================= QUEUE ================= -->


<rect
x="500"
y="145"
width="240"
height="250"
rx="18"
fill="#0D2037"
/>


<!-- queue items -->

<rect
x="525"
y="195"
width="150"
height="32"
rx="10"
fill="#0B84F3"
fill-opacity=".25"
/>


<rect
x="525"
y="245"
width="130"
height="32"
rx="10"
fill="#22C55E"
fill-opacity=".25"
/>


<rect
x="525"
y="295"
width="110"
height="32"
rx="10"
fill="#F59E0B"
fill-opacity=".25"
/>


<rect
x="525"
y="345"
width="90"
height="32"
rx="10"
fill="#EF4444"
fill-opacity=".25"
/>



</svg>


</div>

</template>