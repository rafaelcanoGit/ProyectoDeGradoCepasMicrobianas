<template>
  <div>
    <ul class="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
      <li class="nav-item">
        <router-link
          :to="{name:'caract-macro-levadura'}"
          active-class="active"
          role="tab"
          class="nav-link"
        >
          <span>C. Macroscópicas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'caract-micro-levadura'}"
          active-class="active"
          role="tab"
          class="nav-link"
        >
          <span>C. Microscópicas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'caract-bioqui-levadura'}"
          active-class="active"
          role="tab"
          class="nav-link"
        >
          <span>C. Bioquímicas</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'identi-molecu-levadura'}"
          active-class="active"
          role="tab"
          class="nav-link"
        >
          <span>I. Molecular</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          :to="{name:'metodo-conser-levadura'}"
          active-class="active"
          role="tab"
          class="nav-link"
        >
          <span>M. Conservación</span>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>