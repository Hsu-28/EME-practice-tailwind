<!-- <template>
  <div>
    <index/>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
  <div class="p-4 bg-blue-500 text-white">
    Hello, Tailwind!
  </div>
</template> -->


<template>
  <!-- header -->
  <section class="title-bgc bg-mainColor flex justify-between h-20 font-bold">
    <div class="flex justify-between relative  h-4/5 items-center m_auto my-auto custom-rounded-right text-mainColor bg-secondColor ">
      <img src="/img/logo.svg" alt="logo icon" class="w-20  p-4 main-color flex items-center justify-center">
      <h1 class="p-4 pr-20  flex items-center justify-center text-3xl main-color m-auto">計畫監控趨勢</h1>
    </div>


    <div class="flex relative h-full items-center justify-center mr-8 hover:cursor-pointer">
      <img src="/img/logout.svg" alt="logout" class="h-2/5 m-auto">
    </div>
  </section>

  <section class="main-contain border  mt-2 h-mainContain w-100 bg-cover bg-center">
      <div class="h-20 flex flex text-white font-bold items-center">
          <img src="/img/setting.svg" alt="setting" class="ml-5 ">
          <h2 class="ml-5 text-2xl">
              基礎設定
          </h2>
      </div>
      <section class="flex justify-around h-5/6 border-2 border-yellow-500">
        <section class="basis-col2 h-full">
          <ProjectSet/>
        </section>
        <section class="basis-col8 h-full"></section>
        <section class="basis-col2 h-full" ></section>
      </section>
      
  </section>
  <div>
    <div>
      <img src="" alt="">
      <p>2024年7月17日 </p>
    </div>
    <div>
      <img src="" alt="">
      <p>11:11</p>
    </div>
  </div>
</template>

<style scoped >
.custom-rounded-right {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
.main-contain{
  background-image: url('/img/main_bg.png');
  }

.testtt{
    height: 300px;
  }
</style>

<script>

</script>