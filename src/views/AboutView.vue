<template>
  <div class="flex flex-col items-center min-h-screen pt-28 bg">

    <div class="flex">
      <div class="flex flex-col">
        <p class="text-white text-xl font-bold">
          Esta página se creo como un examen practico por el aspirante Cristian Ramirez. Se creo utilizando el Framework Vue en su versión 3.7 utilizando Pinia como gestor de almacenamiento global. Para el sistema de traducción se implemento i18n, un complento muy versatil.
        </p>
        <p class="text-white text-xl font-bold">
          Se uso el principio Mobile First para la creación del diseño responsivo, adaptando su tamaño y ubicación de los elementos en función del tamaño de pantalla del cliente. Esto tambien se logra de forma simple utilizando <b>tailwindcss</b>, un Framework CSS cuyo principio son las clases de utilidad que a diferencia de Bootstrap, se centra en ofrecer clases atomicas permitiendo asi una gran personalización.
        </p>
        <p class="text-white text-xl font-bold">
          Se recurre a GIT como gestor de versiones y administrador de cambios para mantener un seguimiento controlado de los cambios y caracteristicas del mismo. El arbol de desarrollo se muestra en la imagen que acompaña a este texto.
        </p>
      </div>
      <img src="@/assets/images/tree.png">
    </div>

    <p>
      Se recurre a Vue Router como administrador de rutas para la creación de una SPA.
    </p>

  </div>
</template>

<style>
</style>
